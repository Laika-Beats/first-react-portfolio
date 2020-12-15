import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const location = useLocation();

  return (
    <header>
      <nav className="navigation container" id="navbar">
        <ul className="nav-items row">
          <li className="col-sm-1 col-lg-3">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              {" "}
              Home{" "}
            </Link>
          </li>
          <li className="col-sm-1 col-lg-3">
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              {" "}
              About{" "}
            </Link>{" "}
          </li>
          <li className="col-sm-1 col-lg-3">
            <Link
              to="/projects"
              className={
                location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {" "}
              Projects{" "}
            </Link>{" "}
          </li>
          <li className="col-sm-1 col-lg-3">
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {" "}
              Contact{" "}
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
