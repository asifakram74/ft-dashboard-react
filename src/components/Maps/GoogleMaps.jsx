import React, { useCallback, useMemo, useRef, useState } from "react";
import { render } from "react-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Circle,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import Pin from "../../assets/images/icon/pin.svg";

// import "leaflet/dist/leaflet.css";

// import leaflet from "leaflet";

// function MyComponent() {
//   const map = useMapEvents({
//     click: () => {
//       map.locate();
//     },
//     locationfound: (location) => {
//       console.log("location found:", location);
//     },
//   });
//   return null;
// }

// function MyMapComponent() {
//   return (
//     <MapContainer center={[50.5, 30.5]} zoom={13}>
//       <MyComponent />
//     </MapContainer>
//   );
// }

const GoogleMaps = () => {
  const myIcon = new L.Icon({
    iconUrl: Pin,
    iconRetinaUrl: Pin,
    popupAnchor: [-0, -0],
    iconSize: [35, 35],
  });
  //   return (
  //     <div style={{ width: "500px", height: "100px", marginLeft: "200px" }}>
  //       <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  //         <TileLayer
  //           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //         />
  //         <Marker position={[51.505, -0.09]}>
  //           <Popup>
  //             A pretty CSS3 popup. <br /> Easily customizable.
  //           </Popup>
  //         </Marker>
  //       </MapContainer>
  //     </div>
  //   );
  const center = {
    lat: 31.5315,
    lng: 74.3529,
  };

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(false);
    const [position, setPosition] = useState(center);
    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
          }
        },
      }),
      []
    );
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d);
    }, []);
    console.log("position", position);
    return (
      <Marker
        // draggable={draggable}
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={myIcon}
      >
        <Popup minWidth={90}>
          {/* <span onClick={toggleDraggable}>
            {draggable
              ? "Marker is draggable"
              : "Click here to make marker draggable"}
          </span> */}
        </Popup>
        <Circle center={position} fillColor="blue" radius={150} />
        <Circle center={position} fillColor="blue" radius={300} />
        <Circle center={position} fillColor="blue" radius={500} />
        <Circle center={position} fillColor="blue" radius={1000} />
        {/* <CircleMarker center={position} radius={150}>
          <Popup>150M</Popup>
        </CircleMarker> */}
      </Marker>
    );
  }

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker />
    </MapContainer>
  );
};

export default GoogleMaps;
