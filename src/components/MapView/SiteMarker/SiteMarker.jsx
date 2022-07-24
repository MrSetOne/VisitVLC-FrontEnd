import { Marker, Popup } from "react-leaflet";
import L, { Icon } from "leaflet";
import { Button } from "antd";
import "./SiteMarker.scss";
import { useState } from "react";
import ModalSiteDetail from "../ModalSiteDetail/ModalSiteDetail";

const SiteMarker = ({ place, i, current }) => {
  console.log("current: " + current);
  console.log("i: " + i);

  const [visibleModalDetail, setVisibleModalDetail] = useState(false);

  const Icon = new L.Icon({
    iconUrl: require(`../../../assets/Pins/pinPosition-${i + 1}.svg`),
    iconSize: current === i ? [46, 60] : [32, 41],
    iconAnchor: [16, 38],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const truncateAfterWord = (str, chars, placeholder = "...") =>
    str.length < chars
      ? str
      : `${str.substr(
          0,
          str.substr(0, chars - placeholder.length).lastIndexOf(" ")
        )}${placeholder}`;

  return (
    <Marker
      position={[place.location.latitude, place.location.longitude]}
      icon={Icon}
    >
      <Popup>
        <div className="siteMarker-popup">
          <h2>{place.name}</h2>
          <p>{truncateAfterWord(place.description, 83)}</p>
          <Button
            type="primary"
            block
            onClick={() => setVisibleModalDetail(true)}
          >
            Más Info
          </Button>
        </div>
        <ModalSiteDetail
          visibleModalDetail={visibleModalDetail}
          setVisibleModalDetail={setVisibleModalDetail}
          place={place}
        />
      </Popup>
    </Marker>
  );
};

export default SiteMarker;
