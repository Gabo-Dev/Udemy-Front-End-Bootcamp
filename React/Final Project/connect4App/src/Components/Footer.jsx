import React from 'react'

function Footer({onClickEvent}) {
  return (
    <div className='panel footer'>
        <button onClick={onClickEvent}>New Game</button>
    </div>
  )
}

export default Footer