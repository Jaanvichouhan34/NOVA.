import React, { useState } from 'react';

const CHOICES = ['Rock', 'Paper', 'Scissors'];

export default function RockPaperScissors() {
  const [result, setResult] = useState('');
  
  const play = (p) => {
    const c = CHOICES[Math.floor(Math.random()*3)];
    if(p === c) setResult(`Draw! Both chose ${p}`);
    else if ((p==='Rock'&&c==='Scissors') || (p==='Paper'&&c==='Rock') || (p==='Scissors'&&c==='Paper')) setResult(`Win! ${p} beats ${c}`);
    else setResult(`Lose! ${c} beats ${p}`);
  }

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <div style={{ marginBottom: '1rem', fontSize:'1.2rem', minHeight:'30px' }}>{result}</div>
      <div style={{ display: 'flex', gap: '10px', justifyContent:'center' }}>
        {CHOICES.map(c => (
           <button key={c} onClick={()=>play(c)} style={{ padding: '10px', borderRadius:'8px', background:'var(--surface)', color:'white', border:'1px solid var(--accent)' }}>
             {c}
           </button>
        ))}
      </div>
    </div>
  );
}
