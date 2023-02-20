import React, { useState } from "react";
import {connect} from "react-redux";
import ArticleTray from "../ArticleTray/ArticleTray";
import Paragraph from "../utils/Article/Paragraph/Paragraph";
import SecondaryHeading from "../utils/Article/SecondaryHeading/SecondaryHeading";
import Heading from "../utils/Article/Heading/Heading";
import Image from "../utils/Article/Image/Image";
import style from "./Write.module.css";
import Underline from "../utils/Article/Underline/Underline";
import Code from "../utils/Article/Code/Code";

const Write = ({elements}) => {



    const renderArticle = () => {
        return elements.map((element) => {
            if(element.htmlTag == "p") {
                return <Paragraph index={element.index} value={element.value}/>
            }
            else if(element.htmlTag=="h1") {
                return <Heading index={element.index} value={element.value}/>
            }
            else if(element.htmlTag == 'h2') {
                return <SecondaryHeading index={element.index} value={element.value} />

            }
            else if(element.htmlTag == 'img') {
                return <Image index={element.index} value={element.value}/>
            }
            else if(element.htmlTag == 'code') {

                return <Code index={element.index} value={element.value}/>

            }
            else if(element.htmlTag == 'underline'){
                return <Underline index={element.index} value=""/>
            }
        })
    }

  return (
    <div className={style['editor-container']}>
        <div className={style['article-playground']}>
            {
                renderArticle()
            }
        </div>
        <ArticleTray/>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        elements : state.elements
    }
}

export default connect(mapStateToProps)(Write);
