import React, { useState } from 'react';
import Square from './square.jsx';
export const Board = () => {
  const [board, seatBoard] = useState(Array(9).fill(null));
  const handleSqareClc = () => {
    seatBoard(prev => {
      return prev.map((Square, pos) => {
        if (pos === position) {
          return x;
        }
        return Square;
      });
    });
  };
  // const handleSqareClc = position => {
  //   return (
  //     <Square
  //       value={board[position]}
  //       onclick={() => handleSqareClc(position)}
  //     />
  //   );
  // };
  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onclick={() => handleSqareClc(position)}
      />
    );
  };
  // const renderSquare = () => {
  //   seatBoard(5);
  // };
  console.log(board);
  return (
    <div className="board">
      {/* {renderSquare(0)} */}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
