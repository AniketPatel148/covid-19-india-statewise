import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from './footer.module.css'

const Footer = () => {

    const year = new Date().getFullYear()

    return(
        <div className={style.container}>
        <div>Developed by Aniket</div>
        <div>Follow me on</div>
        <div className={style.fontawesome}>
        <a href='https://www.instagram.com/an.ik.et_p/'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        <a href='https://github.com/AniketPatel148'><FontAwesomeIcon icon={['fab', 'github']} /></a>
        <a href='https://www.facebook.com/profile.php?id=100037285100535'><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
        <a href='https://twitter.com/king_of_chausar'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        
         </div>

        <div>Copyright © {year}</div>
        
        </div>
    )


}

export default Footer