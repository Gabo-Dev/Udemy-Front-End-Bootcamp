import React from "react";
import GameCircle from "./GameCircle";
import '../css/styles.css'

 const GameBoard = () => {
    return (
        <div>
            <GameCircle id={1}>
                <span className="redDiv">Red</span>
            </GameCircle>
            <GameCircle id={2}>
            <span className="blueDiv">Blue</span>
            </GameCircle>
            <GameCircle id={3}>
            <span className="redDiv">Red</span>
            </GameCircle>
            <GameCircle id={4}>
            <span className="blueDiv">Blue</span>
            </GameCircle>
            <GameCircle id={5}>
            <span className="redDiv">Red</span>
            </GameCircle>
            <GameCircle id={6}>
            <span className="blueDiv">Blue</span>            </GameCircle>
            <GameCircle id={7}>
            <span className="redDiv">Red</span>
            </GameCircle>
            <GameCircle id={8}>
            <span className="blueDiv">Blue</span>
            </GameCircle>
        </div>
    )
}
export default GameBoard;