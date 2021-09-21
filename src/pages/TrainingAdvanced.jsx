import DescriptionTraining from "../components/DescriptionTraining";
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
