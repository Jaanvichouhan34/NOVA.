import React, { useState, useEffect, useCallback, useRef } from 'react';

const GRID_SIZE = 15;
export default function Snake() {
  const [snake, setSnake] = useState([[5,5]]);
  const [food, setFood] = useState([10,10]);
  const [dir, setDir] = useState([0,-1]);
  const [speed, setSpeed] = useState(150);
  const [gameOver, setGameOver] = useState(false);
  
  const move = useCallback(() => {
    if(gameOver) return;
    setSnake(prev => {
      const head = prev[0];
      const newHead = [head[0]+dir[0], head[1]+dir[1]];
      if(newHead[0]<0||newHead[0]>=GRID_SIZE||newHead[1]<0||newHead[1]>=GRID_SIZE) { setGameOver(true); return prev; }
      if(prev.some(s => s[0]===newHead[0] && s[1]===newHead[1])) { setGameOver(true); return prev; }
      
      const newSnake = [newHead, ...prev];
      if(newHead[0]===food[0] && newHead[1]===food[1]) {
         setFood([Math.floor(Math.random()*GRID_SIZE), Math.floor(Math.random()*GRID_SIZE)]);
      } else { newSnake.pop(); }
      return newSnake;
    });
  }, [dir, food, gameOver]);

  useEffect(() => {
    const handleKey = (e) => {
      switch(e.key) {
        case 'ArrowUp': if(dir[1]!==1) setDir([0,-1]); break;
        case 'ArrowDown': if(dir[1]!==-1) setDir([0,1]); break;
        case 'ArrowLeft': if(dir[0]!==1) setDir([-1,0]); break;
        case 'ArrowRight': if(dir[0]!==-1) setDir([1,0]); break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [dir]);

  useEffect(() => {
    const int = setInterval(move, speed);
    return () => clearInterval(int);
  }, [move, speed]);

  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
         <select onChange={e=>setSpeed(Number(e.target.value))} value={speed} style={{ background:'transparent', color:'var(--text)', border:'1px solid var(--accent)' }}>
           <option value="200" style={{color:'black'}}>Slow</option>
           <option value="150" style={{color:'black'}}>Normal</option>
           <option value="80" style={{color:'black'}}>Fast</option>
         </select>
         <button onClick={()=>{setSnake([[5,5]]); setGameOver(false); setDir([0,-1]);}} style={{marginLeft:'1rem', background:'var(--accent)', border:'none', padding:'2px 8px', borderRadius:'4px'}}>Reset</button>
      </div>
      <div style={{ width:'225px', height:'225px', position:'relative', border:'1px solid var(--accent)', background:'rgba(0,0,0,0.5)' }}>
        {gameOver && <div style={{position:'absolute', top:'40%', left:0, right:0, textAlign:'center'}}>Game Over</div>}
        {snake.map((s,i) => <div key={i} style={{position:'absolute', width:'15px', height:'15px', background:'var(--accent)', left:s[0]*15, top:s[1]*15}}/>)}
        <div style={{position:'absolute', width:'15px', height:'15px', background:'red', left:food[0]*15, top:food[1]*15, borderRadius:'50%'}}/>
      </div>
    </div>
  );
}
