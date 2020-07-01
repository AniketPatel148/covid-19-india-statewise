import React from 'react'
import style from './comparison.module.css'

const Comparison = ({order}) => {
    return (
        <div className={style.container}>
            <table >
             <tbody>
                {order.map( (s,index) => {
                    return (
                        <tr>
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