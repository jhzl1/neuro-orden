import DescriptionTraining from "../components/DescriptionTraining";
import { itemsCourses } from "../config/itemsCourses";

const ForKids = () => {
  return (
    <>
      <div className="for-kids">
        <h1 className="hero-title">Neuro Orden para Niños</h1>
      </div>
      <DescriptionTraining description={itemsCourses[2].description} />
    </>
  );
};

export default ForKids;
