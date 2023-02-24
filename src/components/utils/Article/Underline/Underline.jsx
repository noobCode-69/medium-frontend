import React, { useState } from "react";

import style from "./Underline.module.css";
import { connect } from "react-redux";
import { deleteElement } from "../../../../redux/action";
import DeleteElement from "../DeleteElement/DeleteElement";

const Underline = ({ index, value, updateElement, deleteElement }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={style["article-underline-container"]}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={style["article-underline"]}></div>
      {isHovering && <DeleteElement index={index} />}{" "}
    </div>
  );
};
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { deleteElement })(Underline);
