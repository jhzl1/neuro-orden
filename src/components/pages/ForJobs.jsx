import React from "react";
import { itemsCourses } from "../config/itemsCourses";
import DescriptionTraining from "../DescriptionTraining";

const ForJobs = () => {
  return (
    <>
      <div className="for-jobs">
        <h1 className="hero-title">{itemsCourses[4].title}</h1>
      </div>
      <DescriptionTraining description={itemsCourses[4].description} />
    </>
  );
};

export default ForJobs;
