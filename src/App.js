import React, { useEffect } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import hoverEffect from "hover-effect";
import LetterDrop from "./Letterdrop";

function App() {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(".ticket"),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
      image2:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
      displacementImage:
        "https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true"
    });
  });

  return (
    <div className="App">
      <div className="header">
      <a href="/">
        <h2>
          mint<span style={{ color: "black" }}>.</span>
        </h2>
      </a>
      <div className="sign-login">
        <NavLink exact to="/login" activeStyle={{ color: "#3fc988" }}>
          Login
        </NavLink>
        <p className="spacer"> | </p>
        <NavLink exact to="/register" activeStyle={{ color: "#3fc988" }}>
          Sign Up
        </NavLink>
      </div>
      </div>
      <div className="ticket">
        <div className="overlay"></div>
        <div className="flight-info">
          <h3 className="flight-date">DEC 30 2020 12:30PM</h3>
          <div className="flight-locations">
            <h1>JFK</h1>
            <img src="https://cdn-images-1.medium.com/max/800/1*QFU_XYAKOGJ9nunfqvem1w.png" />
            <h1>LHR</h1>
          </div>
        </div>
      </div>
      <div className="background-deco" />
      <div className="background-deco2" />
      <div className="triangle-up" />
      <LetterDrop />
    </div>
  );
}

export default App;
