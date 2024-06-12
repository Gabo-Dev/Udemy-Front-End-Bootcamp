// rafce, which is react arrow function export component
import React from 'react'


const GameCircle = ({id, children}) => {
    console.log(id);
    const onCLick = () => {
        alert('hi');
    }

    return (
        <div onClick={onCLick}>
            {children}
        </div>
    )
}

export default GameCircle;