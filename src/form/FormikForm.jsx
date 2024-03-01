import { useFormik } from "formik";
import React from "react";
import { YupForm } from "./YupForm";

function FormikForm() {
  const formInitialValues = {
    name: "",
    email: "",
  };
  const { handleSubmit, touched, handleChange, handleBlur, values, errors } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: YupForm,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className="page">
      <form action="" onSubmit={handleSubmit}>
        <div className=" flex w-[50%] flex-col gap-1">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <h3 className="text-red-500">{errors.name}</h3>
          ) : null}
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id=""
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && touched.email ? (
            <h3 className="text-red-500">{errors.email}</h3>
          ) : null}

          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

export default FormikForm;
