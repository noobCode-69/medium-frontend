import React from "react";
import style from './ArticleTray.module.css'
import {connect} from 'react-redux'
import { addElement } from "../../redux/action";

const ArticleTray = ({addElement}) => {


    return <div className={style['tray-container']}>

        <div className={style["buttons-container"]}>
            <div onClick={() => addElement("h1")} className={`${style['button']} ${style['primary-heading']}`}>
                <p>H1</p>
            </div>
            <div onClick={() => addElement("h2")} className={`${style['button']} ${style['secondary-heading']}`}>
                <p>H2</p>
            </div>
            <div onClick={() => addElement("p")} className={`${style['button']} ${style['paragraph']}`}><p>P</p></div>
            <div onClick={() => addElement("code")} className={`${style['button']} ${style['code']}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg>            </div>
            <div onClick={() => addElement("img")} className={`${style['button']} ${style['image']}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 9l-2.519 4-2.481-1.96-5 6.96h16l-6-9zm8-5v16h-20v-16h20zm2-2h-24v20h24v-20zm-20 6c0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.896 2-2 2s-2-.895-2-2z"/></svg>
            </div>
            <div onClick={() => addElement("underline")} className={`${style['button']} ${style['underline']}`}>
                <p>\</p>
            </div>
        </div>
        
    </div>
}

const mapStateToProps = () => {
    return {}
}

// heading htmlTag : "h1" , value : "something" 
// secondary heading htmlTag : "h2" , value : "something"
// underline : htmlTag : "underline" , value : "something"
// image htmlTag : "img" , value : "srcUrl",
// code htmlTag : code, value : "something"

export default connect(mapStateToProps , {addElement})(ArticleTray);