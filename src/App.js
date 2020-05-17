import React, { useEffect, useState } from "react";
import "./App.css";
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
        "https://i.imgur.com/llLAT9I.jpg",
      image2:
        "https://i.imgur.com/YncRmSC.jpg",
      displacementImage:
        "https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true"
    });
  });

  const [viewToggle, setViewToggle] = useState(false);
  const x = event => {
    event.preventDefault();
    setViewToggle(!viewToggle);
  };

  // const y = (event) => {
  //   event.preventDefault()
  //   setSignUpToggle(!signUpToggle)
  // }

  return (
    <div className="App">
      {/*
    {signUpToggle ? <div className="sign-up">
    <div className="signup">
    
    </div>
    </div> : null}
    */}
      <div className="header">
        <a href="/">
          <h2>
            mint<span style={{ color: "black" }}>.</span>
          </h2>
        </a>
        <div className="sign-login">
          <a onClick={() => {alert("This is just a dummy you can't actually sign up to anything")}}>Sign Up</a>
          <p className="spacer"> | </p>
          <a onClick={() => {alert("This is just a dummy you can't actually sign up to anything")}}>Unregister</a>
        </div>
      </div>
      <div className="background-deco" />
      <div className="background-deco2" />
      {viewToggle ? (
        <div className="blender">
          <p className="explanation">
            Sign Up in the top right corner and get the best flight deals
            straight to your inbox. We will send you awesome flight offers once
            a week, and if you don't want to see our offers anymore, simply
            unsubscribe straight on our website.
          </p>
          <a onClick={x}>
            <div className="see-more">Back</div>
          </a>
        </div>
      ) : (
        <div className="blender">
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
          <div className="triangle-up" />
          <LetterDrop toggle={viewToggle} />
          <a onClick={x}>
            <div className="see-more">How it works</div>
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
