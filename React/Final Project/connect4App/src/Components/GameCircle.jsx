// rafce, which is react arrow function export component
import React from 'react'
import '../css/styles.css'


const GameCircle = ({id, color}) => {
    const circleStyle = color === 'red' ? 'redDiv' : 'blueDiv';
    console.log(circleStyle)
    
    return (
        <div className={circleStyle}>
        </div>
    )
    
}

export default GameCircle;