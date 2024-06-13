import React from "react";
import GameCircle from "./GameCircle";
import '../css/styles.css'

 const GameBoard = () => {
    // callBack
    const circleClicked = (id) =>{
        console.log('circle clicked: ' + id);
    } 

    return (
        <div className="gameBoard">
            <GameCircle id={1}  onCircleClicked = {circleClicked}/>
            <GameCircle id={2}  onCircleClicked = {circleClicked}/>
            <GameCircle id={3}  onCircleClicked = {circleClicked}/>
            <GameCircle id={4}  onCircleClicked = {circleClicked}/>
            <GameCircle id={5}  onCircleClicked = {circleClicked} />
            <GameCircle id={6}  onCircleClicked = {circleClicked}/>
            <GameCircle id={7}  onCircleClicked = {circleClicked} />
            <GameCircle id={8}  onCircleClicked = {circleClicked}/>
            <GameCircle id={9}  onCircleClicked = {circleClicked}/>
            <GameCircle id={10} onCircleClicked = {circleClicked} />
            <GameCircle id={11} onCircleClicked = {circleClicked}/>
            <GameCircle id={12} onCircleClicked = {circleClicked} />
            <GameCircle id={13} onCircleClicked = {circleClicked}  />
            <GameCircle id={14} onCircleClicked = {circleClicked} />
            <GameCircle id={15} onCircleClicked = {circleClicked} />
            <GameCircle id={16} onCircleClicked = {circleClicked}/>
        </div>
    )
}
export default GameBoard;