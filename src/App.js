import React, { Component } from "react";
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Content from "./Components/Content"
import Socials from "./Components/Socials"
import MyForm from "./Components/MyForm"
import MyCarousel from "./Components/MyCarousel"
import MiddleSection from "./Components/MiddleSection"
import "./App.css"


export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Navbar/>
      <div id="home">
             <Header/>
        </div>
        <div id="about">
            <Content/>
        </div>
        <div className="main">
       
        <div id="socials">
            <Socials/>
        </div>
        <div id="myform">
            <MyForm/>
        </div>
        <div id="myCarousel">
            <MyCarousel/>
        </div>
        </div>
    </div>
  )
}
}