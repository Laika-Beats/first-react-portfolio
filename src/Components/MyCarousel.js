import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Card from "./Card"
import CardSecond from "./CardSecond"
import './MyCarousel.scss'
import styled from 'styled-components'


 
export default class MyCarousel extends React.Component {
  render() {
    return (
      <div className="flexbox-container-5">
      <CarouselProvider className="caro"
        visibleSlides={1}
        naturalSlideWidth={250}
        naturalSlideHeight={230}
        totalSlides={5}
        
      >
        <Slider>
          <Slide  index={0}><Card /></Slide>
          <Slide  index={1}><CardSecond /></Slide>
          <Slide  index={2}><Card /></Slide>
          <Slide  index={3}><Card /></Slide>
          <Slide  index={4}><Card /></Slide>
         
        </Slider>
        <ButtonBack className="back flexbox-item" >Previous Project</ButtonBack>
        <ButtonNext className="next flexbox-item">Next Project</ButtonNext>

       
        
      </CarouselProvider>
      </div>
      
    );
  }
}