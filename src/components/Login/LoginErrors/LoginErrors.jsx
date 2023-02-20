import React from "react";
import style from "./LoginErrors.module.css";


const errors = [

  {
    title: "Email should not be empty and should be a valid.",
    name: "email",
  },
  {
    title : "Password should not be empty.",
    name : "password"
  }
];

const LoginErrors = ({ formik }) => {


  const getColor = (name) => {  
    if(formik.touched[name] == undefined) {
      return "black";
    }
    if(formik.errors[name]){
      return "red"
    }
    return "green"
  }

  return (
    <ol
      style={{ listStyleType: "squared" }}
      className={style["errors-container"]}
    >
      {errors.map((error) => {
        return <li style={{color : `${getColor(error.name)}`}} className={style["error"]}>{error.title}</li>;
      })}
    </ol>
  );
};

export default LoginErrors;
