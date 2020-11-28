import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const PageEditor = () => {
  const PageSchema = Yup.object().shape({
    about: Yup.string()
      .min(2, "Este campo debe tener más de 2 carácteres.")
      .max(300, "Este campo no debe tener más de 300 carácteres.")
      .required("Campo obligatorio."),
    address: Yup.string()
      .min(2, "Este campo debe tener más de 2 carácteres.")
      .max(200, "Este campo no debe tener más de 200 carácteres.")
      .required("Campo obligatorio."),
    contact: Yup.string()
      .min(2, "Este campo debe tener más de 2 carácteres.")
      .max(150, "Este campo no debe tener más de 150 carácteres."),
  });

  return (
    <div className="w-full sm:overflow-hidden">
      <Formik
        initialValues={{
          about: "",
          address: "",
          contact: "",
        }}
        validationSchema={PageSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-red-200 shadow-lg h-full p-5">
            <label className="block font-bold mb-2 text-lg" htmlFor="about">
              Sobre nosotras
            </label>
            <Field component="textarea" className="py-3 px-2 w-full shadow-md my-3 " name="about" />
            {errors.about && touched.about ? (
              <div className="appearance-none my-2 bg-gray-100 border-l-4 border-red-500 text-red-700 p-4">
                {errors.about}
              </div>
            ) : null}
            <label className="block font-bold mb-2 text-lg" htmlFor="address">
              Dirección
            </label>
            <Field className="py-3 px-2 w-full shadow-md my-3" name="address" />
            {errors.address && touched.address ? (
              <div className="appearance-none  my-2 bg-gray-100 border-l-4 border-red-500 text-red-700 p-4">
                {errors.address}
              </div>
            ) : null}
            <label className="block font-bold mb-2 text-lg" htmlFor="address">
              Contacto
            </label>
            <Field
              className="appearance-none py-3 px-2 w-full shadow-md my-3"
              name="contact"
            />
            {errors.contact && touched.contact ? (
              <div className="my-2 bg-gray-100 border-l-4 border-red-500 text-red-700 p-4">
                {errors.contact}
              </div>
            ) : null}
            <div className="flex justify-end">
              <button
                className="bg-red-400 text-white font-bold shadow-lg p-3 m-4 hover:"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PageEditor;
