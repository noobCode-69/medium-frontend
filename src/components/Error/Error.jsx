import React from 'react'
import style from './Error.module.css'
const Error = ({message}) => {


    return (

        <div className={style['error']}>
            <div className={style['error-message']}>
                <h1 className={style['error-title']}>404.</h1>
                {
                    message && <p className={style['error-description']}>{message}</p>
                }
            </div>
            
        </div>

    )
}


export default Error;