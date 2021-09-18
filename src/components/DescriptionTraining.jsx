import React from "react";
import FormContact from "./FormContact";

const DescriptionTraining = ({ description }) => {
  return (
    <div className="description-training">
      <h2>Descripción del Curso</h2>
      <p className="p-trainings">{description}</p>

      <div className="modality-training">
        <div>
          <span>
            <strong>Modalidad:</strong> Virtual <i className="fas fa-video"></i>
          </span>
          <span>
            <strong>Horarios de Atención:</strong> Lunes a Viernes, 08:00 a
            18:00 HLA
          </span>
        </div>

        <div className="container-form">
          <h3>Obtén más información</h3>
          <FormContact />
        </div>
      </div>
    </div>
  );
};

export default DescriptionTraining;
