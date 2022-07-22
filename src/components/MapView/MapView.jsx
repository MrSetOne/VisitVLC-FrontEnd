import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import data from "../../assets/data.json";
import "./MapView.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import SiteMarker from "./SiteMarker/SiteMarker";
import UserPosition from "./UserPosition/UserPosition";
import MapFooter from "./MapFooter/MapFooter";

const MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN;

const MapView = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const allPlaces = data.map((place, i) => <SiteMarker place={place} i={i} />);

  return (
    <>
      <FontAwesomeIcon
        className="info__icon"
        icon={faInfo}
        style={{
          display: visibleDrawer ? "none" : "unset",
        }}
        onClick={() => setVisibleDrawer(!visibleDrawer)}
      />

      <MapContainer
        center={[39.4730789903991, -0.37663455848786936]}
        zoom={14.2}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={'https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=' + MAP_TOKEN}
        />
        {allPlaces}
        <UserPosition />
      </MapContainer>
      <MapFooter data={data}
        setVisibleDrawer={setVisibleDrawer}
        visibleDrawer={visibleDrawer}/>
    </>
  );
};

export default MapView;
