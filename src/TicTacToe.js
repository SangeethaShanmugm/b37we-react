import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export function TicTacToe() {
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [isXTurn, setIsXTurn] = useState(true);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);
  const handleClick = (index) => {
    if (winner === null && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };

  // const restart = () => {
  //   if (winner === "X" && winner === "O") {
  //     setBoard(null);
  //   }
  // };
  return (
    <div className="full-game">
      <h2 className="game-title">Tic - Tac - Toe</h2>
      {winner ? <Confetti width={width} height={height} /> : ""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2>Winner is : {winner}</h2> : ""}
    </div>
  );
}
function GameBox({ onPlayerClick, val }) {
  // const [val, setVal] = useState(null);
  const styles = { color: val === "X" ? "green" : "red" };
  return (
    <div onClick={onPlayerClick} style={styles} className="game-box">
      {val}
    </div>
  );
}
