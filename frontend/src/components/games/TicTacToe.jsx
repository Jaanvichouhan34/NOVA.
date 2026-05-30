import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0; i<lines.length; i++) {
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return { winner: squares[a], line: lines[i] };
    }
    return null;
  };

  const handleClick = (i) => {
    if(board[i] || calculateWinner(board)) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const reset = () => { setBoard(Array(9).fill(null)); setXIsNext(true); };
  const winInfo = calculateWinner(board);

  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', width: '200px' }}>
        <span>{winInfo ? `${winInfo.winner} Wins!` : (board.every(Boolean) ? 'Draw!' : `Turn: ${xIsNext?'X':'O'}`)}</span>
        <button onClick={reset}><RefreshCw size={16} /></button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 60px)', gap: '5px' }}>
        {board.map((c, i) => (
          <div key={i} onClick={() => handleClick(i)} style={{ width: '60px', height: '60px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--accent)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', cursor:'pointer' }}>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
