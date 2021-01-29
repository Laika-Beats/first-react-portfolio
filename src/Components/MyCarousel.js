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
import CardFif from "./CardFif";
import CardSixth from "./CardSixth";
import "./MyCarousel.scss";
import styled from "styled-components";

export default class MyCarousel extends React.Component {
  render() {
    return (
      <>
        <div id="mobile" className="container">
          <div className="col">
            <CardThird />
            <Card />
          </div>
          <div className="col">
            <CardSecond />
            <CardFif />
          </div>
          <div className="col">
            <CardFourth />
            <CardSixth />
          </div>
        </div>

        <div id="full" className="container">
          <div className="col">
            <CardThird />
            <CardFif />
            <CardFourth />
          </div>
          <div className="col">
            <Card />
            <CardSecond />

            <CardSixth />
          </div>
        </div>
      </>
    );
  }
}
