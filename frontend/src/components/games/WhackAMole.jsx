import React, { useState, useEffect } from 'react';

export default function WhackAMole() {
  const [moles, setMoles] = useState(Array(9).fill(false));
  const [score, setScore] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if(!active) return;
    const int = setInterval(() => {
      const arr = Array(9).fill(false);
      arr[Math.floor(Math.random()*9)] = true;
      setMoles(arr);
    }, 800);
    return () => clearInterval(int);
  }, [active]);

  const whack = (i) => {
    if(moles[i]) {
       setScore(s=>s+1);
       setMoles(Array(9).fill(false));
    }
  }

  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>Score: {score}</div>
      <button onClick={()=>{setActive(!active); setScore(0);}} style={{marginBottom:'1rem'}}>{active?'Stop':'Start'}</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 60px)', gap: '10px' }}>
        {moles.map((m, i) => (
          <div key={i} onClick={()=>whack(i)} style={{ width: '60px', height: '60px', background: m ? 'var(--accent)' : 'var(--surface)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', cursor:'pointer', borderRadius:'10px' }}>
            {m ? '🐹' : ''}
          </div>
        ))}
      </div>
    </div>
  );
}
