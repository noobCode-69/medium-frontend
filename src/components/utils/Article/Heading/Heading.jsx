import React, { useEffect, useState } from "react";
import style from "./Heading.module.css";
import { connect } from "react-redux";
import { updateElement, deleteElement } from "../../../../redux/action";
import TextareaAutosize from "react-textarea-autosize";
import DeleteElement from "../DeleteElement/DeleteElement";
const Heading = ({ index, value, updateElement, deleteElement }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={style["element-container"]}
    >
      <TextareaAutosize
        spellcheck="false"
        type={"text"}
        placeholder="Title...."
        className={style["article-heading"]}
        onChange={(e) => updateElement(index, e.target.value)}
        value={value}
      />
      {isHovering && <DeleteElement index={index} />}
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { updateElement, deleteElement })(
  Heading
);
