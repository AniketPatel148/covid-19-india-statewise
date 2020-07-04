import React from 'react'
import style from './header.module.css'
import mask from '../image/mask.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return(
        <div className={style.main}>
        <img src={mask}  alt="mask" className={style.img}/>
        <div className={style.title}> Covid-19 <span className={style.span}>Tracker</span></div> 
        <div className={style.favicon1}><FontAwesomeIcon icon="bars" /></div>
        </div>
    )

}

export default Header;