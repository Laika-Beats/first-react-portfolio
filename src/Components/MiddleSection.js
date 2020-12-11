import React, { Component } from "react";
import Header from "./Header"
import Content from "./Content"
import Socials from "./Socials"
import MyForm from "./MyForm"
import MyCarousel from "./MyCarousel"

export default class middleSection extends Component {
    render() {
        return (
            <>
         <div id="home">
             <Header/>
        </div>
        <div id="about">
            <Content/>
        </div>
        <div id="myCarousel">
            <MyCarousel/>
        </div>
        <div id="socials">
            <Socials/>
        </div>
        <div id="myform">
            <MyForm/>
        </div>
        
            </>
        )
    }
}