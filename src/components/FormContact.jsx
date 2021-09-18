import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormContact = () => {
  return (
    <Formik>
      <Form className="form">
        <Field className="input" placeholder="Nombre" />
        <Field className="input" placeholder="Correo Electrónico" />
        <Field className="input" placeholder="Teléfono" />
        <Field className="input textarea" as="textarea" placeholder="Mensaje" />
        <button type="submit" className="button-form">
          Enviar
        </button>
      </Form>
    </Formik>
  );
};

export default FormContact;
