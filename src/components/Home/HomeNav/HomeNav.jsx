import React from "react";
import style from "./HomeNav.module.css";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className={style["home-nav"]}>
      <Link to="/">
        <div className={style["logo"]}></div>
      </Link>
    </div>
  );
};

export default HomeNav;
