import React from 'react';
import { Grid,} from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = (props) => {
    
    return (
        <div className={styles.maincontainer}>
         <div className={styles.container1}>
              <div className={styles.confirmed}>Total Confirmed</div>
              <div className={styles.noOfConfirmed}>{props.data.confirmed}</div>
              <div className={styles.increaseInConfirmed}>{props.data.dailyconfirmed}</div>
         </div>
         <div className={styles.container2}>
             <div className={styles.recovered}>Total Recovered</div>
              <div className={styles.noOfRecovered}>{props.data.recovered}</div>
              <div className={styles.increaseRecovered}>{props.data.dailyrecovered}</div>
       
         </div>
         <div className={styles.container3}>
              <div className={styles.deaths}>Total Deaths</div>
              <div className={styles.noOfDeaths}>{props.data.deaths}</div>
              <div className={styles.increaseDeaths}>{props.data.dailydeceased}</div>
       
         </div>

        </div>
    )
}

export default Cards;