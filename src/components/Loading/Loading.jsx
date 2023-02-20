import React from 'react'
import style from './Loading.module.css'

const Loading = ({message}) => {


    return (

        <div className={style['loading']}>
            <div className={style['loading-img-container']}>
                <img src='https://th.bing.com/th/id/OIP.QxOPjEQ91N8-yeG_m2R9IQHaFj?pid=ImgDet&rs=1'/>
            </div>
            {
                message && <p>{message}</p>
            }
        </div>

    )
}


export default Loading;