import React, { useState } from "react";
import style from "./Image.module.css";
import { connect } from "react-redux";
import DeleteElement from "../DeleteElement/DeleteElement";
import { updateElement, deleteElement } from "../../../../redux/action";

const Image = ({ index, value, updateElement, deleteElement }) => {
  const [imageUrl, setImageUrl] = useState(value);

  return (
    <div className={style["element-container"]}>
      <div className={style["article-image-container"]}>
        {value == "" ? (
          <div className={style["no-image-container"]}>
            <textarea
              spellcheck="false"
              type={"text"}
              placeholder="Enter Image Url"
              className={style["article-image-input"]}
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
            />
            <div
              onClick={() => updateElement(index, imageUrl)}
              className={style["article-image-submit-button"]}
            >
              Submit
            </div>
          </div>
        ) : (
          <img src={value} className={style["article-image"]} />
        )}
      </div>
      <DeleteElement index={index}/>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { updateElement, deleteElement })(
  Image
);
