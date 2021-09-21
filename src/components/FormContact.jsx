import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomButton from "./ui/CustomButton";

const FormContact = () => {
  return (
    <div className="relative w-2/5 my-10">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-pink-800 shadow-lg transform  -rotate-6 rounded-3xl"></div>
      <div className=" relative bg-gray-100 p-4 rounded-2xl mb-2 ">
        <h2 className="mb-4 text-center font-semibold text-3xl">
          Obtén más información
        </h2>
        <Formik>
          <Form className="flex flex-col mb-5">
            <Field
              className="border rounded border-blue-300 p-2 shadow-md mb-2"
              placeholder="Nombre"
            />
            <Field
              className="border rounded border-blue-300 p-2 shadow-md mb-2"
              placeholder="Correo Electrónico"
            />
            <Field
              className="border rounded border-blue-300 p-2 shadow-md mb-2"
              placeholder="Teléfono"
            />
            <Field
              className="border rounded border-blue-300 p-2 shadow-md mb-2"
              as="textarea"
              placeholder="Mensaje"
            />
            <CustomButton title="Enviar" type="submit" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormContact;
