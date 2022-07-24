import { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRouteByID } from "../../features/Routes/RoutesSlice";

const MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN;

const MapView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { routeDetail, isLoadingRouteDetail } = useSelector(
    (state) => state.routes
  );

  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [visibleFooter, setVisibleFooter] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    dispatch(getRouteByID(id));
  }, [id]);

  return isLoadingRouteDetail ? (
    <h1>Cargando...</h1>
  ) : (
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
          {routeDetail.poi.map((place, i) => (
            <SiteMarker place={place} i={i} current={current} />
          ))}
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
        data={routeDetail.poi}
        visibleDrawer={visibleDrawer}
        setVisibleDrawer={setVisibleDrawer}
      />
      <MapFooter
        id={id}
        setVisibleFooter={setVisibleFooter}
        setCurrent={setCurrent}
        current={current}
        routeLength={routeDetail.length}
      />
    </div>
  );
};

export default MapView;
