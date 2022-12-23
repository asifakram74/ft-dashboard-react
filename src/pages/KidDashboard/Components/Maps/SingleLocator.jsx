import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  CircleMarker,
} from "react-leaflet";
import BoyPin from "../../../../assets/images/icon/child-boy-pin.svg";
import GirlPin from "../../../../assets/images/icon/child-girl-pin.svg";
import L from "leaflet";
import { capitalize } from "lodash";
const SingleLocator = (props) => {
  const { zoom, lat, lng, height, width, data } = props;
  console.log("data", data);
  const zoomScale = zoom ? zoom : 16;
  const heightContainer = height ? height : "250px";
  const widthContainer = width ? width : "100wh";
  const position = [lat, lng];
  const gender = capitalize(data.gender);
  const myIcon = new L.Icon({
    iconUrl: gender === "Female" ? GirlPin : BoyPin,
    iconRetinaUrl: gender === "Female" ? GirlPin : BoyPin,
    popupAnchor: [-0, -0],
    iconSize: [50, 50],
  });
  return (
    <>
      <MapContainer
        center={position}
        zoom={zoomScale}
        scrollWheelZoom={false}
        style={{ height: heightContainer, width: widthContainer }}
      >
        <TileLayer
          //   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}>
          <Popup>14 Apr 2021</Popup>

          {/* <Circle center={position} fillColor="blue" radius={150}>
            <Popup>150M</Popup>
          </Circle> */}
          {/* <Circle center={position} fillColor="blue" radius={150} /> */}
          {/* <CircleMarker center={position} radius={150}>
            <Popup>150M</Popup>
          </CircleMarker>
          <CircleMarker center={position} radius={300}>
            <Popup>300M</Popup>
          </CircleMarker> */}
          {/* <Circle center={position} fillColor="blue" radius={300} /> */}
          {/* <Circle center={position} fillColor="blue" radius={1000} /> */}
        </Marker>
      </MapContainer>
    </>
  );
};

export default SingleLocator;
