import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import FormController from "../FormController/FormController";

import style from "./Login.module.css";
import LoginErrors from "./LoginErrors/LoginErrors";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={style["form-container"]} onSubmit={formik.handleSubmit}>
      <div className={style["login-info"]}>
        <h1 className={style["login-title"]}>We Missed You..</h1>
        <p className={style["login-subtitle"]}>
          Medium help you to share you knowledge to the world. signup to don't
          miss the opportunity to learn new things everyday.
        </p>
      </div>
      <form onSubmit={formik.onSubmit} className={style["form"]}>
        <FormController
          htmlFor="email"
          id="email"
          name="email"
          type="text"
          formik={formik}
          label="Email"
        />
        <FormController
          htmlFor="password"
          id="password"
          name="password"
          type="password"
          formik={formik}
          label="Password"
        />

        <div className={`${style["single-row"]} ${style["last-row"]}`}>
          <button className={style["submit-button"]} type="submit">
            Submit
          </button>
          <p>
            Don't have an account <Link to="/signup">Signup</Link>
          </p>
        </div>
      </form>
      <div className={style["errors-container"]}>
        <LoginErrors formik={formik} />
      </div>
    </div>
  );
};

export default Login;
