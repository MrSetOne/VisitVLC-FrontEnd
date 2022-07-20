import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  MarkerProps,
  Popup,
} from "react-leaflet";
import L, { Icon } from "leaflet";
import data from "../../assets/data.json";
import "./MapView.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Drawer, Steps, Typography } from "antd";
const { Paragraph, Text } = Typography;

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const FaMarker = <FontAwesomeIcon icon={faCoffee} />;

const MapView = () => {
  const { Step } = Steps;
  const [current, setCurrent] = useState(0);

  const [visible, setVisible] = useState(false);

  const onChange = (value) => {
    console.log("onChange:", current);
    setCurrent(value);
  };

  const resp = data.map((place, i) => {
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
  });

  const allSteps = data.map((step) => {
    return (
      <Step
        title={step.name}
        description={
          <Paragraph
            ellipsis={{ rows: 2, expandable: true, symbol: "leer más..." }}
          >
            {step.description}
          </Paragraph>
        }
      />
    );
  });

  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
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

  return (
    <>
      <FontAwesomeIcon
        icon={faCircleInfo}
        style={{
          position: "absolute",
          bottom: "calc(100vh - 7rem)",
          right: "2rem",
          zIndex: 1001,
          display: visible ? "none" : "unset",
        }}
        onClick={() => setVisible(!visible)}
      />
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={() => setVisible(!visible)}
        visible={visible}
        width={"90vw"}
      >
        <Steps
          current={current}
          onChange={onChange}
          direction="vertical"
          initial={0}
        >
          {allSteps}
        </Steps>
      </Drawer>
      <MapContainer
        center={[39.4730789903991, -0.37663455848786936]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {resp}
        <Marker position={[state.latitude, state.longitude]} icon={redIcon}>
          <Popup>Estás Aquí</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapView;
