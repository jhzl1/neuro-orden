import img1 from "./assets/img/img6.jpg";
import img2 from "./assets/img/img3.jpg";
import img3 from "./assets/img/img7.jpg";

const Description = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between custom-padding bg-gray-100">
      <div className="flex w-full md:w-2/5 justify-center items-center ">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-pink-800 shadow-lg transform  -rotate-6 rounded-3xl"></div>
          <div className="relative p-10 bg-white shadow-lg rounded-3xl grid grid-cols-2 grid-rows-2 gap-4">
            <img src={img3} alt="" className="rounded-2xl row-span-2" />
            <div className="flex">
              <img src={img2} alt="" className="rounded-2xl" />
            </div>
            <div className="flex">
              <img src={img1} alt="" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/6">
        <h2 className="custom-font h2">¿Qué es Neuro Orden?</h2>
        <p className="p-style">
          Es una fusión entre Diseño de Interiores, Organización Profesional y
          Neurociencias. Nació en base a las necesidades de entender cómo
          nuestras emociones y el comportamiento de nuestra vida es una
          respuesta del sistema nervioso, reflejado en el entorno.
        </p>
        <p className="p-style">
          El orden de nuestro espacio puede modificar las emociones de manera
          positiva y de este modo se genera un desbloqueo de la actividad y como
          resultado sanamos interiormente ese rechazo.
        </p>
        <p className="p-style">
          El motivo principal es lograr vivir en un espacio mas tranquilo y que
          reporte estabilidad emocional en todos los habitantes del hogar.
          Desarrollar técnicas de orden y movilidad en el espacio reduciendo los
          tiempos de guardado y ubicación de los objetos, reportando autonomía
          en todos los miembros que conviven del hogar debido a la organización
          y señalización de los espacios.
        </p>
      </div>
    </div>
  );
};

export default Description;
