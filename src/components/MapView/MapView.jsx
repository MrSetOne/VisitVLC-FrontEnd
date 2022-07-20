import React, {useEffect, useState} from 'react'
import { MapContainer, TileLayer, useMap, Marker, MarkerProps, Popup } from 'react-leaflet'
import L, { Icon } from 'leaflet'
import data from '../../assets/data.json'
import './MapView.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const FaMarker = <FontAwesomeIcon icon={faCoffee} />

const MapView = () => {

    const resp = data.map((place, i) => {
        return (
          <Marker position={[place.location.latitude, place.location.longitude]}>
            <Popup>
              {/* <h2>{`iconodefault-${i}.png`}</h2> */}
                <b>{place.name}</b> <br/><br/>
                {place.description} <br />
                <button>Review</button> 
            </Popup>
          </Marker>
        );
      });

      const [state, setState] = useState({
        longitude: 0,
        latitude: 0,
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                setState({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                    
                })
              },
              function(error) {
                console.log(error)
              },
              { 
                enableHighAccuracy: true
              }
              );
            }, [])

  return (
    <MapContainer center={[39.4730789903991, -0.37663455848786936]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[39.4730789903991, -0.37663455848786936]}>
    <Popup>
      Bienvenido al Centro de Valencia
    </Popup>
  </Marker>

  {resp}

  <Marker position={[state.latitude, state.longitude]} icon={redIcon}>
    <Popup>
      Estás Aquí
    </Popup>
  </Marker>

</MapContainer>
  )
}

export default MapView