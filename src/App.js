import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/contact" component={ContactPage} />
      </>
    </Router>
  );
}
