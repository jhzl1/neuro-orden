import React from "react";
import "../App.css";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Neuro Orden</h1>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          ¡Conóceme!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
