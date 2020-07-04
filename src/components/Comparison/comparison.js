import React from 'react'
import style from './comparison.module.css'

const Comparison = ({order}) => {
    return (
        <div className={style.container}>
            <table >
             <tbody>
                <tr>
                    <th>Rank</th>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
               
                {order.map( (s,index) => {
                   
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{s.state}</td>
                            <td>{s.confirmed}</td>
                            <td>{s.recovered}</td>
                            <td>{s.deaths}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
    
}

export default Comparison