import React from "react";
import { itemsCourses } from "../config/itemsCourses";
import DescriptionTraining from "../DescriptionTraining";

const ForYoung = () => {
  return (
    <>
      <div className="for-young">
        <h1 className="hero-title">Neuro Orden para Adolescentes</h1>
      </div>
      <DescriptionTraining description={itemsCourses[3].description} />
    </>
  );
};

export default ForYoung;
