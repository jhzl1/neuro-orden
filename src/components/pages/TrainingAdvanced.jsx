import React from "react";
import "../../App.css";
import DescriptionTraining from "../DescriptionTraining";
import { itemsCourses } from "../config/itemsCourses";

export default function TrainingAdvanced() {
  return (
    <>
      <div className="products">
        <h1 className="hero-title">Neuro Orden Básico</h1>
      </div>
      <DescriptionTraining description={itemsCourses[0].description} />
    </>
  );
}
