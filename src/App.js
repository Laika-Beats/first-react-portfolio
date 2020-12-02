import React from 'react'
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Content from "./Components/Content"
import Card from "./Components/Card"
import Socials from "./Components/Socials"
import MyForm from "./Components/MyForm"

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Content/>
      <Card/>
      <Socials/>
      <MyForm/>
    </div>
  )
}