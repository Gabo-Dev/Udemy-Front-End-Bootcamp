// rafce, which is react arrow function export component
import React from 'react'
import '../css/styles.css'


const GameCircle = ({id, onCircleClicked,className}) => {
    const circleStyle = id % 2 === 0 ? 'odd' : 'even';

    
    return (
        <div className={`gameCircle ${className}`}  onClick={() => onCircleClicked(id)}>
        </div>
    )
    
}

export default GameCircle;