import React from 'react';

function StatusMessgae({ winner, current }) {
  const noMoveLeft = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMoveLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMoveLeft && `X and O tied`}
    </h2>
  );
}

export default StatusMessgae;
