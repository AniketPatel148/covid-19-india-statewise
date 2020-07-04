import React from 'react'
import style from './footer.module.css'

const Footer = () => {

    const year = new Date().getFullYear()

    return(
        <div className={style.container}>
        <div>Stay Home.</div>
        <div>Stay Safe.</div>
        <div>Copyright © {year}</div>
        
        </div>
    )


}

export default Footer