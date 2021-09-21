import badgeImg from "./assets/img/badge.jpg";
import CustomButton from "./ui/CustomButton";

const NewBagde = () => {
  return (
    <div id="badge" className="flex flex-col md:flex-row ">
      <div className="bg-white p-14 w-screen md:w-1/2  flex flex-col justify-center h-2/4 md:h-full">
        <h1 className="custom-font font-semibold text-7xl mb-10 text-center color-text">
          Neuro Orden
        </h1>

        <p className="text-gray-700 text-lg md:text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          suscipit officia quia assumenda architecto. Sint non explicabo
          aspernatur iusto unde? Ex possimus voluptatum odio perferendis
          reprehenderit! Hic, dolorum totam? Pariatur!
        </p>

        <div className="flex justify-center mt-2">
          <CustomButton title="Botón primario" className="my-5 mx-2" />
          <CustomButton
            title="Botón Secundario"
            className="my-5 mx-2"
            color="secondary"
          />
        </div>
      </div>
      <div className="w-screen md:w-1/2 relative h-2/6 md:h-full">
        <img src={badgeImg} alt="" className="w-full object-cover h-full" />
        <div className="w-32 h-full bg-gradient-to-r hidden md:block from-white z-10 absolute left-0 inset-y-0"></div>
      </div>
    </div>
  );
};

export default NewBagde;
