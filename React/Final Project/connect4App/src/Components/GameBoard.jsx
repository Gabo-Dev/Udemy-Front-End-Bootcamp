import React, {useEffect, useState} from "react";
import GameCircle from "./GameCircle";
import '../css/styles.css'
import Header from "./Header";
import Footer from "./Footer";
import { isDraw, isWinner } from "../helper";
import { GAME_STATE_PLAYING,NO_PLAYER,PLAYER_1,PLAYER_2,GAME_STATE_DRAW,GAME_STATE_WIN,NO_CIRCLES } from "../Constants";



 const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setcurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

    // function to make sure game only run when the components first mount
    useEffect(() => {
      initGame();

    }, [])
    
    // initialize our state and the game
    const initGame =()=>{
        setGameBoard(Array(NO_CIRCLES).fill(NO_PLAYER));
        setcurrentPlayer(PLAYER_1);
    }
    //init the Board
    const initBoard = () =>{
        const circles =[];
        for (let index = 0; index < NO_CIRCLES; index++) {
            circles.push(renderCircle(index));
        }
        return circles;
    }

    // callBack
    const circleClicked = (id) =>{
        console.log('circle clicked: ' + id);

        if (gameBoard[id] !== NO_PLAYER) {
            return;
        }
        if (gameState !== GAME_STATE_PLAYING) return;

        if (isWinner(gameBoard,id , currentPlayer)) {
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);
        }
        if (isDraw(gameBoard,id , currentPlayer)) {
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(NO_PLAYER);
        }
        // recommended way of update an array if we've got an estate.
        setGameBoard(prev =>{
            return prev.map((circle,pos)=>{
                if(pos === id) return currentPlayer;
                return circle;
            })
        })

        setcurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        
        console.log(gameBoard);
    } 

    const renderCircle = id => {
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked = {circleClicked}/>
    }
    return (
       <>
        <Header currentPlayer ={currentPlayer} gameState ={gameState} winPlayer = {winPlayer}/>
        <div className="gameBoard">
            {initBoard()}
        </div>
        <Footer onClickEvent ={initGame}/>
       </>
    )
}
export default GameBoard;