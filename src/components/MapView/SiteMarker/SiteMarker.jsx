import { Marker, Popup } from "react-leaflet";

const SiteMarker = ({ place }) => {
  return (
    <Marker position={[place.location.latitude, place.location.longitude]}>
      <Popup>
        <div className="popup">
          <b>{place.name}</b> <br />
          <br />
          {place.description} <br />
          <button>Review</button>
        </div>
        
      </Popup>
    </Marker>
  );
};

export default SiteMarker;
