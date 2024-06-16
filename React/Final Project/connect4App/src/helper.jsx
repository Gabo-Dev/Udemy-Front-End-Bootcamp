export const isWinner = (gameBoard, currentMove, currentPlayer) => {
    // create a copy coz is not allowed to mutate gameBoard (is referenced)
    let board = [...gameBoard];
    board[currentMove] = currentPlayer;

    const winLines = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 16],
        [3, 6, 9, 12],
    ];

    for (let i = 0; i < winLines.length; i++) {
        const [c1, c2, c3, c4] = winLines[i];
        if (board[c1] > 0 &&
            board[c1] === board[c2] &&
            board[c2] === board[c3] &&
            board[c3] === board[c4]) {
                return true;
        }
    }
    return false;
}
// detect draw game
export const isDraw = (gameBoard, currentMove, currentPlayer) =>{
    let board = [...gameBoard];
    board[currentMove] = currentPlayer;

    // check 0s into the array to determine the draw
    let count = board.reduce((n,x) => n + (x===0),0);
    return count ===0;
}
//  do a simple random move withou ia move, we will move circle that currently are zero in the array
export const getComputerMove = (gameBoard) =>{
    let validMoves = [];
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === 0) {
            validMoves.push(i);
        }
    }
    let rndMove = Math.floor(Math.random() * validMoves.length);
    return validMoves[rndMove];
}