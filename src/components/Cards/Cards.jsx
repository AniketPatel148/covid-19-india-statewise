import React from 'react';

import styles from './Cards.module.css';

const Cards = (props) => {
    const confirmed = (props.data.confirmed)
    const dailyconfirmed = (props.data.dailyconfirmed)
    const recovered = (props.data.recovered)
    const dailyrecovered = (props.data.dailyrecovered)
    const deaths = (props.data.deaths)
    const dailydeceased = (props.data.dailydeceased)
    const lastUpdate = (props.data.lastUpdate)

    
    
    return (
        <div className={styles.maincontainer}>
         <div className={styles.container1}>
              <div className={styles.confirmed}>Confirmed Cases</div>
              <div className={styles.noOfConfirmed}>{confirmed}</div>
              <div className={styles.increaseInConfirmed}> + {dailyconfirmed} cases Today</div>
         </div>
         <div className={styles.container2}>
             <div className={styles.recovered}>Recovered Cases</div>
              <div className={styles.noOfRecovered}>{recovered}</div>
              <div className={styles.increaseRecovered}> + {dailyrecovered} recovered Today</div>
       
         </div>
         <div className={styles.container3}>
              <div className={styles.deaths}>Deaths</div>
              <div className={styles.noOfDeaths}>{deaths}</div>
              <div className={styles.increaseDeaths}> + {dailydeceased} deaths Today</div>
       
         </div>

         <div className={styles.lastUpdateTime}>
             last updated {lastUpdate}
         </div>

        </div>
    )
}

export default Cards;