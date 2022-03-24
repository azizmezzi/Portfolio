import React, { Component } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default class MapsComponent extends Component {
  componentDidMount() {
    this.map = L.map("map", {
      center: [33.7931605, 9.5607653],
      zoom: 6,
      zoomControl: false,
    });
    L.marker([33.7931605, 9.5607653]).addTo(this.map);
    var popup = L.popup()
      .setLatLng([36.9937605, 9.5607653])
      .setContent(
        "<p>Tunisie!<br />Ben Arous, Tunis<br/> @ : azizmezzi@yahoo.fr</p>"
      )
      .openOn(this.map);
    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
      }
    ).addTo(this.map);
  }
  render() {
    return <Wrapper width="100%" height="150%" id="map" />;
  }
}
