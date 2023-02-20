import React from "react";
import style from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Navigation = ({ links }) => {
  const {feedId} = useParams();
  return (
    <div className={style["navigation-container"]}>
      <div className={style["navigation-links"]}>
        {links.map((link) => {
          return <Link style={{
            color : feedId == link.feedId ? "black" : "grey",
            borderBottom : feedId == link.feedId ? "1px solid black": "none"
          }} className={style['navigation-link']} to={link.path}>{link.title}</Link>;
        })}
      </div>
    </div>
  );
};

export default Navigation;
