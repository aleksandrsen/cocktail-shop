import React from "react";
import "./map.scss";
import {
  Marker,
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

const Map = (props) => {
  const MyMapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 40.7011, lng: -73.9416 }}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: 40.7011, lng: -73.9416 }} />
        )}
      </GoogleMap>
    ))
  );

  return (
    <section className="default-section">
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key="
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </section>
  );
};

export default Map;
