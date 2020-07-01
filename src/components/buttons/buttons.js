import React from 'react'
import styles from './buttons.module.css'

const Button = (props) => {
    return(
        <div className={styles.container}>
        <button  onClick={props.click1}>
           {props.name1}
        </button>
        <button onClick={props.click2}>
            {props.name2}
        </button>
        </div>
    )

}

export default Button