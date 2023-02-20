import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import HomeNav from "./HomeNav/HomeNav";
import medium from "../../assets/medium.png";

const Home = () => {
  return (
    <div>
      <HomeNav />
      <div className={style["home-container"]}>
        <div className={style["content"]}>
          <div className={style["content-left"]}>
            <div className={style["h1-container"]}>
              <h1>Stay</h1>
              <div className={style["h1-levels"]}>
                <h1 style={{marginTop : "-1.75rem"}} className={style["level1"]}>Curious.</h1>
              </div>
            </div>
            <div className={style["buttons"]}>
              <Link to="/feed/home">
                <div className={style["button"]}>Start Reading</div>
              </Link>
              <Link to="/write">
                <div className={style["button"]}>Start Writing</div>
              </Link>
            </div>
          </div>
          <img src={medium} />
          <p className={style['details']}>
            author : &nbsp; <a>so_hell</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
