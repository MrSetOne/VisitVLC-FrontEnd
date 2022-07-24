import { Marker, Popup } from "react-leaflet";
import L, { Icon } from "leaflet";
import { Button } from "antd";
import "./SiteMarker.scss";
import { useState } from "react";
import ModalSiteDetail from "../ModalSiteDetail/ModalSiteDetail";

const SiteMarker = ({ place, i, current }) => {
  console.log("current: " + current);
  console.log("i: " + i);
  console.log(place);

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
    <>
      <Marker position={[place.longitude, place.latitude]} icon={Icon}>
        <Popup>
          <div className="siteMarker-popup">
            <h2>{place.name}</h2>
            <p>{truncateAfterWord(place.description_es, 83)}</p>
            <Button
              type="primary"
              block
              onClick={() => setVisibleModalDetail(true)}
            >
              Más Info
            </Button>
          </div>
        </Popup>
      </Marker>
      <ModalSiteDetail
        visibleModalDetail={visibleModalDetail}
        setVisibleModalDetail={setVisibleModalDetail}
        place={place}
      />
    </>
  );
};

export default SiteMarker;
