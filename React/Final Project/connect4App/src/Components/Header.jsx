import React from 'react'
import { GAME_STATE_PLAYING, NO_PLAYER, PLAYER_1, PLAYER_2, GAME_STATE_DRAW, GAME_STATE_WIN, NO_CIRCLES } from "../Constants";


const Header = ({ currentPlayer, gameState, winPlayer }) => {
    const renderLabel = () => {
        switch (gameState) {
            case GAME_STATE_PLAYING:
                return <div>Player { currentPlayer } Turn</div>;
                break;
            case GAME_STATE_WIN:
                return <div>Player { winPlayer } Wins</div>;
                break;
            case GAME_STATE_DRAW:
                return <div>Draw!</div>;
            default:
                break;
        }
    }

    return (
        <div className='panel header'>
            <div className='header-text'>
                {renderLabel()}
            </div>
        </div>
    )
}

export default Header;