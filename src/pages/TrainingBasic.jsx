import imgDesc from "../components/assets/img/kitchen.jpg";
import CheckItem from "../components/CheckItem";
import DescriptionTraining from "../components/DescriptionTraining";
import FormContact from "../components/FormContact";

const TrainingBasic = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-3/5 px-20 py-5">
          <h2 className="h2 custom-font">Curso Básico</h2>

          <p className="p-style">
            Este curso consta de 8 clases donde ayudamos a reconocer los
            rechazos y cambiamos una debilidad en una habilidad. Las 3 primeras
            clases son emocionales:
          </p>
          <ul>
            <li className="flex mb-2">
              <CheckItem />
              Reconocimiento de Aprendizaje
            </li>
            <li className="flex mb-2">
              <CheckItem />
              Clase Sensorial
            </li>
            <li className="flex mb-2">
              <CheckItem />
              Sistema Nervioso
            </li>
          </ul>
          <p className="p-style">
            Luego, hacemos un recorrido por las áreas del hogar:
          </p>
          <ul>
            <li className="flex mb-2">
              <CheckItem />
              Habitación
            </li>
            <li className="flex mb-2">
              <CheckItem />
              Cocina
            </li>
            <li className="flex mb-2">
              <CheckItem />
              Baño
            </li>
            <li className="flex mb-2">
              <CheckItem />
              Áreas Sociales
            </li>
          </ul>

          <p className="p-style">
            Por último, finalizamos con una clase que llamaremos: "Este lugar se
            llama mi hogar".
          </p>
        </div>
        <div className="w-2/5">
          <img
            src={imgDesc}
            alt="Cocina"
            className="w-full object-cover h-full"
          />
        </div>
      </div>
      <div>
        <DescriptionTraining />
      </div>
      <div className="w-full flex justify-center">
        <FormContact />
      </div>
    </div>
  );
};

export default TrainingBasic;
