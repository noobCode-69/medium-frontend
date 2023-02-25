import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import HomeNav from "./HomeNav/HomeNav";
import medium from "../../assets/medium.png";

const Home = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["visited"]);

  useEffect(() => {
    if (cookie.visited == undefined) {
      const expires = new Date();
      expires.setDate(expires.getDate() + 1);  
      console.log(expires); 
      setCookie("visited", "true", { path: "/" , expires });
    } else {
      navigate("/feed/home");
    }
  }, []);

  return (
    <div>
      <HomeNav />
      <div className={style["home-container"]}>
        <div className={style["content"]}>
          <div className={style["content-left"]}>
            <div className={style["h1-container"]}>
              <h1>Stay</h1>
              <div className={style["h1-levels"]}>
                <h1
                  style={{ marginTop: "-1.75rem" }}
                  className={style["level1"]}
                >
                  Curious.
                </h1>
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
          <p className={style["details"]}>
            author : &nbsp; <a>so_hell</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
