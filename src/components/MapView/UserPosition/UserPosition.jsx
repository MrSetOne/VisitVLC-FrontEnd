import React, { useEffect, useState } from "react";
import L, { Icon } from "leaflet";
import { Marker } from "react-leaflet";

const UserPosition = () => {
  const [userPosition, setUserPosition] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setUserPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      function (error) {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <Marker
      position={[userPosition.latitude, userPosition.longitude]}
      icon={redIcon}
    />
  );
};

export default UserPosition;