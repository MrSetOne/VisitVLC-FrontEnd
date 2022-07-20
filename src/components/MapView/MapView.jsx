import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import data from "../../assets/data.json";
import "./MapView.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import SiteMarker from "./SiteMarker/SiteMarker";
import UserPosition from "./UserPosition/UserPosition";
import RouteInfo from "./RouteInfo/RouteInfo";

const MapView = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const allPlaces = data.map((place) => <SiteMarker place={place} />);

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
      <RouteInfo
        data={data}
        setVisibleDrawer={setVisibleDrawer}
        visibleDrawer={visibleDrawer}
      />
      <MapContainer
        center={[39.4730789903991, -0.37663455848786936]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {allPlaces}
        <UserPosition />
      </MapContainer>
    </>
  );
};

export default MapView;
