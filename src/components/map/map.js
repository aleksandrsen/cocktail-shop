import React from 'react';
import './map.scss';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// Components
import Section from "../common-components/section";

function Map(props) {

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{ lat: 40.7011, lng: -73.9416 }}
            >
                {props.isMarkerShown && <Marker position={{ lat: 40.7011, lng: -73.9416 }} />}
            </GoogleMap>
        ));

    return (
        <Section className="get-in-touch-section">
            <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyByLsVEl9V0oreTvREgS9tJ-wxfuOnI3b8"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </Section>
    );

}

export default Map;