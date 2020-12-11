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
      <Header
        title="Section 1"
        subtitle={dummyText}
      />
      <Content
        title="Section 2"
        subtitle={dummyText}
      />
      <Card
        title="Section 3"
        subtitle={dummyText}
      />
      <Socials
        title="Section 4"
        subtitle={dummyText}
      />
      <MyForm
        title="Section 5"
        subtitle={dummyText}
      />
    </div>
  )
}