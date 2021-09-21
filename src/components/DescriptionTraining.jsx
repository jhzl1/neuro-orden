const DescriptionTraining = ({ description }) => {
  return (
    <div className=" px-20 py-2">
      <h2 className="font-bold text-2xl mb-4">Descripción del Curso</h2>
      <p className="p-trainings">{description}</p>

      <div className="modality-training">
        <div className="flex">
          <span className="mr-4">
            <strong>Modalidad:</strong> Virtual <i className="fas fa-video"></i>
          </span>
          <span>
            <strong>Horarios de Atención:</strong> Lunes, Miércoles y Viernes,
            08:00 a 18:00 HLA
          </span>
        </div>
      </div>
    </div>
  );
};

export default DescriptionTraining;
