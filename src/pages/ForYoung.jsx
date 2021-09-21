import { itemsCourses } from "../config/itemsCourses";
import DescriptionTraining from "../components/DescriptionTraining";

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
