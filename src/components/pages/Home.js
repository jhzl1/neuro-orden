import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection.jsx";
import Description from "../Description";
import Courses from "../Courses";
import Gallery from "../Gallery";

function Home() {
  return (
    <>
      <HeroSection />
      <Description />
      <Courses />
      <Gallery />
    </>
  );
}

export default Home;
