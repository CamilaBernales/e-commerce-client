import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "El campo nombre debe ser minimo 2 caractares")
        .max(15, "El campo nombre debe ser máximo 15 caractares")
        .required("Campo obligatorio."),
      password: Yup.string()
        .min(6, "La contraseña debe ser al menos 6 caracteres")
        .max(20, "La contraseña debe ser al maximo 20 caracteres ")
        .required("Campo obligatorio."),
      email: Yup.string().email("Correo electronio invalido").required("Campo obligatorio."),
    }),
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="md:w-4/5 xl:3/5 mx-auto mb-32">
      <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">
        Crear Cuenta
      </h2>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white rounded shadow-md px-6 pt-6 pb-8 mb-8 "
          >
            <label
              className="block text-left text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              Nombre
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="my-2 bg-gray-100 border-l-4 border-red-500 text-red-700 p-4">{formik.errors.firstName}</div>
            ) : null}
            <label
              className="block text-left text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="my-2 bg-gray-100 border-l-4 border-red-500 text-red-700 p-4">{formik.errors.email}</div>
            ) : null}
            <label
              className="block text-left text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="my-2 bg-gray-100 border-l-4 border-red-500 text-red-700 p-4">{formik.errors.password}</div>
            ) : null}
            
            <button
              className="mt-3 bg-pink-600  shadow-md hover:bg-pink-800 p-2 w-full text-white uppercase font-bold"
              type="submit"
            >
                Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
