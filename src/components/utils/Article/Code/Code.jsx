import React from "react";
import style from "./Code.module.css";
import { connect } from "react-redux";
import { updateElement, deleteElement } from "../../../../redux/action";
import CodeEditor from "@uiw/react-textarea-code-editor";
import DeleteElement from "../DeleteElement/DeleteElement";
const Code = ({ index, value, updateElement, deleteElement }) => {
  const handleChange = (e) => {
    updateElement(index, e.target.value);
  };

  return (
    <div className={style["element-container"]}>
      <CodeEditor
        language="js"
        padding={24}
        onChange={(evn) => handleChange(evn)}
        placeholder="Please Enter JS Code."
        style={{
          // borderStyle: "dashed",
          width : "100%",
          flexShrink: 1,
          fontSize: window.innerWidth < "500" ? 15 : 15,
          backgroundColor: "#202124",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
      <DeleteElement index={index}/>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { updateElement, deleteElement })(Code);
