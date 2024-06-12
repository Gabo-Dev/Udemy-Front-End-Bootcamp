// rafce, which is react arrow function export component
import React from 'react'


const GameCircle = ({id, children}) => {
    console.log(id);
    const onCLick = (id) => {
        alert('hi'+ id);
    }

    return (
        <div onClick={() => onCLick(id)}>
            {children}
        </div>
    )
}

export default GameCircle;