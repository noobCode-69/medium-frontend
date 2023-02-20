import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import FormController from "../FormController/FormController";

import style from "./EditProfile.module.css";
// import SignupErrors from "./SingupErrors/SingupErrors";
import EditProfileErrors from "./EditProfileErrors/EditProfileErrors";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.username) {
    errors.username = "Required";
  }
  // logic for unique usernames

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "Password to easy";
  }

  if (!values.instagram) {
    errors.instagram = "Required";
  }

  if (!values.twitter) {
    errors.linkedin = "Required";
  }

  if (!values.linkedin) {
    errors.linkedin = "Required";
  }

  return errors;
};

const EditProfile = () => {
  const formik = useFormik({
    // get values from the database
    initialValues: {
      firstName: "md",
      lastName: "sohel",
      email: "armanyppph@gmail.com",  
      password: "12345",
      username: "so_hell",
      instagram: "insta_id",
      twitter: "twitter_id",
      linkedin: "linkedin_id",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={style["form-container"]} onSubmit={formik.handleSubmit}>
      <div className={style["edit-profile-info"]}>
        <h1 className={style["edit-profile-title"]}>Edit you credentials.</h1>
      </div>
      <form onSubmit={formik.onSubmit} className={style["form"]}>
        <div className={style["single-row"]}>
          <FormController
            htmlFor="firstName"
            id="firstName"
            name="firstName"
            type="text"
            formik={formik}
            label="First Name"
          />
          <FormController
            htmlFor="lastName"
            id="lastName"
            name="lastName"
            type="text"
            formik={formik}
            label="Last Name"
          />
        </div>
        <div className={style["single-row"]}>
          <FormController
            htmlFor="username"
            id="username"
            name="username"
            type="text"
            formik={formik}
            label="User Name"
          />
          <FormController
            htmlFor="email"
            id="email"
            name="email"
            type="email"
            formik={formik}
            label="Email"
          />
        </div>

        <div className={style["single-row"]}>
          <FormController
            htmlFor="password"
            id="password"
            name="password"
            type="password"
            formik={formik}
            label="Password"
          />
          <FormController
            htmlFor="instagram"
            id="instagram"
            name="instagram"
            type="text"
            formik={formik}
            label="Instagram"
          />
        </div>

        <div className={style["single-row"]}>
          <FormController
            htmlFor="twitter"
            id="twitter"
            name="twitter"
            type="text"
            label={"Twitter"}
            formik={formik}
          />
          <FormController
            htmlFor="linkedin"
            id="linkedin"
            name="linkedin"
            type="text"
            label={"Linkedin"}
            formik={formik}
          />
        </div>
        <div className={`${style["single-row"]} ${style["last-row"]}`}>
          <button className={style["submit-button"]} type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className={style["errors-container"]}>
        <EditProfileErrors formik={formik} />
      </div>
    </div>
  );
};

export default EditProfile;
