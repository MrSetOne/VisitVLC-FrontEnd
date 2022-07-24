import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import data from "../../assets/data.json";
import "./MapView.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import SiteMarker from "./SiteMarker/SiteMarker";
import UserPosition from "./UserPosition/UserPosition";
import MapFooter from "./MapFooter/MapFooter";
import RouteInfo from "./RouteInfo/RouteInfo";
import { motion } from "framer-motion";

const MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN;

const MapView = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [visibleFooter, setVisibleFooter] = useState(false);
  const [current, setCurrent] = useState(0);

  const allPlaces = data.map((place, i) => (
    <SiteMarker place={place} i={i} current={current} />
  ));

  return (
    <div className="map__fullContainer">
      <FontAwesomeIcon
        className="info__icon"
        icon={faInfo}
        style={{
          display: visibleDrawer ? "none" : "unset",
        }}
        onClick={() => setVisibleDrawer(!visibleDrawer)}
      />
      <motion.div
        style={{ height: "100%" }}
        animate={{
          height: visibleFooter ? "calc(100vh - 50px - 150px)" : "100%",
        }}
      >
        <MapContainer
          center={[39.4730789903991, -0.37663455848786936]}
          zoom={14.2}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={
              "https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=" +
              MAP_TOKEN
            }
          />
          {allPlaces}
          <UserPosition />
        </MapContainer>
      </motion.div>
      <FontAwesomeIcon
        className="map__upIcon"
        style={{ display: visibleFooter ? "none" : "unset" }}
        icon={faChevronUp}
        onClick={() => setVisibleFooter(true)}
      />
      <RouteInfo
        current={current}
        setCurrent={setCurrent}
        data={data}
        visibleDrawer={visibleDrawer}
        setVisibleDrawer={setVisibleDrawer}
      />
      <MapFooter
        setVisibleFooter={setVisibleFooter}
        setCurrent={setCurrent}
        current={current}
        routeLength={data.length}
      />
    </div>
  );
};

export default MapView;
