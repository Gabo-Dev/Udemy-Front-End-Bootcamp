import React from "react";
import GameCircle from "./GameCircle";
import '../css/styles.css'

 const GameBoard = () => {
    return (
        <div className="grid-Container">
            <GameCircle id={1} color="red"/>
            <GameCircle id={2} color="blue"/>
            <GameCircle id={3} color="red"/>
            <GameCircle id={4} color="blue"/>
            <GameCircle id={5} color="red" />
            <GameCircle id={6} color="blue"/>
            <GameCircle id={7} color="red" />
            <GameCircle id={8} color="blue"/>
            <GameCircle id={9} color="red"/>
            <GameCircle id={10} color="blue"/>
            <GameCircle id={11} color="red"/>
            <GameCircle id={12} color="blue"/>
            <GameCircle id={13} color="red" />
            <GameCircle id={14} color="blue"/>
            <GameCircle id={15} color="red" />
            <GameCircle id={16} color="blue"/>
        </div>
    )
}
export default GameBoard;