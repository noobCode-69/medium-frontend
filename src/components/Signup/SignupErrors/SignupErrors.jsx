import React from "react";
import style from "./SignupErrors.module.css";


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
    title: "Twitter should not be empty",
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



const SignupErrors = ({ formik }) => {
  

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

export default SignupErrors;
