import React, { ReactElement } from "react";
import "./map.scss";
// import {
//   Marker,
//   GoogleMap,
//   withScriptjs,
//   withGoogleMap,
// } from "react-google-maps";

type MapComponentPropsType = {
  isMarkerShown: boolean;
  googleMapURL: string;
  loadingElement: ReactElement;
  containerElement: ReactElement;
  mapElement: ReactElement;
};

const Map = () => {
  // const MapComponent = withScriptjs(
  //   withGoogleMap((props: MapComponentPropsType) => (
  //     <GoogleMap
  //       defaultZoom={12}
  //       defaultCenter={{ lat: 40.7011, lng: -73.9416 }}
  //     >
  //       <Marker position={{ lat: 40.7011, lng: -73.9416 }} />
  //     </GoogleMap>
  //   ))
  // );

  return (
    <section className="default-section">
      {/*<MapComponent*/}
      {/*  isMarkerShown*/}
      {/*  googleMapURL="https://maps.googleapis.com/maps/api/js?key="*/}
      {/*  loadingElement={<div style={{ height: `100%` }} />}*/}
      {/*  containerElement={<div style={{ height: `400px` }} />}*/}
      {/*  mapElement={<div style={{ height: `100%` }} />}*/}
      {/*/>*/}
    </section>
  );
};

export default Map;
