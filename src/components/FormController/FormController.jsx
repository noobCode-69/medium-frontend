import React from "react";
import style from "./FormController.module.css";

const FormController = ({htmlFor, label, id, name, formik, type }) => {
  return (
    <div className={style["form-controller"]}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
      {/* {formik.touched[name] && formik.errors[name] ? (
        <div>{formik.errors[name]}</div>
      ) : null} */}
    </div>
  );
};

export default FormController;
