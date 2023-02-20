import React , {useEffect, useRef}from "react";
import style from './Paragraph.module.css'
import {connect} from 'react-redux'
import { updateElement, deleteElement } from "../../../../redux/action";
import TextareaAutosize from 'react-textarea-autosize';
import DeleteElement from "../DeleteElement/DeleteElement";


const Paragraph = ({index, value,updateElement, deleteElement}) => {
    return <div className={style['element-container']}>
            <TextareaAutosize spellCheck="false" type="text" placeholder="Write Your Story..." className={style['article-paragraph']} onChange={(e) => updateElement(index, e.target.value)} value={value} />
            <DeleteElement index={index}/>
        </div>
}


const mapStateToProps = ()=> {
    return {}
}


export default connect(mapStateToProps, {updateElement, deleteElement})(Paragraph);