import React from "react";

import style from "./Underline.module.css";
import { connect } from "react-redux";
import { deleteElement } from "../../../../redux/action";
import DeleteElement from "../DeleteElement/DeleteElement";

const Underline = ({ index, value, updateElement, deleteElement }) => {
  return (
    <div className={style["article-underline-container"]}>
      <div className={style["article-underline"]}></div>
      <DeleteElement index={index} />
    </div>
  );
};
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { deleteElement })(Underline);
