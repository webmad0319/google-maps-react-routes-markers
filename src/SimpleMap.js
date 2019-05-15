import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
    setMapProperties(map, maps) {
        new maps.Marker({
            position: { lat: 39.470242, lng: -0.376800 },
            map,
            title: 'Valencia'
        });

        const directionsService = new maps.DirectionsService;
        const directionsDisplay = new maps.DirectionsRenderer;

        const directionRequest = {
            origin: { lat: 41.3977381, lng: 2.190471916 },
            destination: 'Madrid, ES',
            travelMode: 'DRIVING'
        };

        directionsService.route(
            directionRequest,
            function (response, status) {
                if (status === 'OK') {
                    // everything is ok
                    directionsDisplay.setDirections(response);

                } else {
                    // something went wrong
                    window.alert('Directions request failed due to ' + status);
                }
            }
        );

        directionsDisplay.setMap(map);
    }

    render() {
        var defaultProps = {
            center: {
                lat: 59.95,
                lng: 14
            },
            zoom: 1
        };

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: this.props.API_KEY }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    onGoogleApiLoaded={({ map, maps }) => this.setMapProperties(map, maps)}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;