import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

const { trainingBasic } = routes;

const AboutMe = () => {
  return (
    <div className="custom-padding bg-gray-300 flex justify-between">
      <div className="card-gradient">
        <h2 className="custom-font text-center text-5xl mb-10">
          ¿Por qué Neuro Orden?
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          necessitatibus ullam ducimus illo rem architecto possimus
          exercitationem obcaecati maiores tempore enim impedit sunt, distinctio
          soluta doloremque velit quibusdam laboriosam quaerat!
        </p>

        <div className="w-1/2 h-px bg-gray-100 rounded mt-8 mb-4 bg-opacity-25"></div>

        <Link
          to={trainingBasic}
          className="bg-white bg-opacity-50 rounded  font-bold p-2"
        >
          Conóceme
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default AboutMe;
