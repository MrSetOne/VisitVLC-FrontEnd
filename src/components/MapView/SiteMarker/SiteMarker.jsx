import { Marker, Popup } from "react-leaflet";

const SiteMarker = ({ place }) => {
  return (
    <Marker position={[place.location.latitude, place.location.longitude]}>
      <Popup>
        <b>{place.name}</b> <br />
        <br />
        {place.description} <br />
        <button>Review</button>
      </Popup>
    </Marker>
  );
};

export default SiteMarker;
