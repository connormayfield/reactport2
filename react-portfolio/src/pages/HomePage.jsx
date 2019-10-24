import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function HomePage(props) {
  return (
    <div className="main" id="main">
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fill-opacity="1"
          d="M0,64L24,80C48,96,96,128,144,149.3C192,171,240,181,288,170.7C336,160,384,128,432,112C480,96,528,96,576,117.3C624,139,672,181,720,208C768,235,816,245,864,250.7C912,256,960,256,1008,256C1056,256,1104,256,1152,256C1200,256,1248,256,1296,261.3C1344,267,1392,277,1416,282.7L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
      <Carousel />
    </div>
  );
}

export default HomePage;
