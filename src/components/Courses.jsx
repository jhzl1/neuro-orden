import React from "react";
import { itemsCourses } from "./config/itemsCourses";
import { Button } from "./Button";

const Courses = () => {
  return (
    <div id="courses">
      <div className="container-courses">
        {itemsCourses.map((item, index) => (
          <div className="item-courses" key={index}>
            <div className="container-icon">
              <i className={item.icon} />
            </div>
            <h2> {item.title}</h2>

            <div className="button-container">
              <Button path={item.path} buttonStyle="btn--outline">
                Ver Más
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
