import React, { useState } from 'react';

const ROWS = 6; const COLS = 7;
export default function Connect4() {
  const [board, setBoard] = useState(Array(ROWS).fill(null).map(()=>Array(COLS).fill(null)));
  const [p1Turn, setP1Turn] = useState(true);
  const [winner, setWinner] = useState(null);

  const drop = (c) => {
    if(winner) return;
    const newBoard = board.map(r=>[...r]);
    for(let r=ROWS-1; r>=0; r--) {
      if(!newBoard[r][c]) {
        newBoard[r][c] = p1Turn ? 'R' : 'Y';
        setBoard(newBoard);
        checkWin(newBoard, r, c, p1Turn ? 'R' : 'Y');
        setP1Turn(!p1Turn);
        return;
      }
    }
  }

  const checkWin = (b, r, c, p) => {
    const dirs = [[0,1],[1,0],[1,1],[1,-1]];
    for(let [dr,dc] of dirs) {
      let count = 1;
      for(let i=1; i<=3; i++) { if(b[r+dr*i]?.[c+dc*i] === p) count++; else break; }
      for(let i=1; i<=3; i++) { if(b[r-dr*i]?.[c-dc*i] === p) count++; else break; }
      if(count>=4) setWinner(p);
    }
  }

  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>{winner ? `${winner==='R'?'Red':'Yellow'} Wins!` : `Turn: ${p1Turn?'Red':'Yellow'}`}</div>
      <div style={{ display:'flex', gap:'5px', background:'var(--accent)', padding:'10px', borderRadius:'10px' }}>
        {Array(COLS).fill(null).map((_,c) => (
          <div key={c} onClick={()=>drop(c)} style={{display:'flex', flexDirection:'column', gap:'5px', cursor:'pointer'}}>
            {board.map((r, ri) => (
               <div key={ri} style={{ width:'30px', height:'30px', borderRadius:'50%', background: r[c]==='R'?'red':(r[c]==='Y'?'yellow':'var(--bg)') }} />
            ))}
          </div>
        ))}
      </div>
      <button onClick={()=>{setBoard(Array(ROWS).fill(null).map(()=>Array(COLS).fill(null))); setWinner(null); setP1Turn(true);}} style={{marginTop:'1rem', padding:'5px 10px'}}>Reset</button>
    </div>
  );
}
