import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Card from "./Card";
import CardSecond from "./CardSecond";
import CardThird from "./CardThird";
import CardFourth from "./CardFourth";
import "./MyCarousel.scss";
import styled from "styled-components";

export default class MyCarousel extends React.Component {
  render() {
    return (
      <>
        <div id="mobile" className="container">
          <div className="col">
            <CardSecond />
            <CardThird />
          </div>
          <div className="col">
            <Card />
            <CardFourth />
          </div>
        </div>

        <div id="full" className="container">
          <div className="col">
            <CardSecond />
            <CardThird />
          </div>
          <div className="col">
            <Card />
            <CardFourth />
          </div>
        </div>
      </>
    );
  }
}
