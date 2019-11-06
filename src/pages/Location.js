import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



class Location extends Component {
    render() {
        return (
            <Map google={window.google} initialCenter={{
                lat: 24.6654176,
                lng: 46.6789234
            }} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/* <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div> */}
                </InfoWindow>
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyB8IvvDTsBFWRDDSZ5pGBfJ6g0LvK7kol0')
})(Location)


// <Map google={this.props.google} zoom={14}>

//  <Marker onClick={this.onMarkerClick}
//          name={'Current location'} />

//  <InfoWindow onClose={this.onInfoWindowClose}>
//      <div>
//        <h1>{this.state.selectedPlace.name}</h1>
//      </div>
//  </InfoWindow>
//  </Map>