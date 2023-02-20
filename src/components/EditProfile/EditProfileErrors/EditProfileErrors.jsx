import React from "react";
import style from "./EditProfileErrors.module.css";


const errors = [
  {
    title: "First Name should not be empty",
    name: "firstName",
  },
  {
    title: "Last Name should not be empty",
    name: "lastName",
  },
  {
    title: "Email should not be empty and should be a valid",
    name: "email",
  },
  {
    title: "User Name should not be empty",
    name: "username",
  },
  {
    title: "Instagram should not be empty",
    name: "instagram",
  },
  {
    title: "Instagram should not be empty",
    name: "twitter",
  },
  {
    title: "Linkedin should not be empty",
    name: "linkedin",
  },
  {
    title : "Password should not be empty and should be 5 characters or more",
    name : "password"
  }
];

const EditProfileErrors = ({ formik }) => {
  return (
    <ol
      style={{ listStyleType: "squared" }}
      className={style["errors-container"]}
    >
      {errors.map((error) => {
        return <li style={{color : `${formik.errors[error.name] ? "red" : "black"}`}} className={style["error"]}>{error.title}</li>;
      })}
    </ol>
  );
};

export default EditProfileErrors;
