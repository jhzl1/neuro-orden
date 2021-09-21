import { Link } from "react-router-dom";

import { itemsCourses } from "../config/itemsCourses";
import CustomButton from "./ui/CustomButton";

const Courses = () => {
  return (
    <div className="custom-padding bg-gray-200">
      <h2 className="text-center custom-font h2">Cursos</h2>

      <div className="flex justify-center items-center">
        {itemsCourses.map(({ title, path, icon }) => (
          <div
            className="flex flex-col justify-center items-center w-80"
            key={title}
          >
            <div className="item-icon-course mb-10">
              <i className={`${icon} text-3xl`} />
            </div>
            <div className="w-16 h-px bg-pink-500 rounded  mb-4 "></div>

            <h2 className="font-bold text-center text-lg mb-6 text-gray-700">
              Neuro Orden {title}
            </h2>

            <Link to={path}>
              <CustomButton title="Ver Más" type="link" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
