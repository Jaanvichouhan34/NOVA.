import React, { useState } from 'react';

const Q = [
  { q: 'What does HTML stand for?', a: ['Hyper Text Markup Language','Home Tool Markup Language','Hyperlinks'], c: 0 },
  { q: 'Choose the correct HTML element for the largest heading:', a: ['<heading>','<h6>','<h1>'], c: 2 },
  { q: 'What is the correct correct syntax for referring to an external script called "xxx.js"?', a: ['<script src="xxx.js">','<script href="xxx.js">'], c: 0 }
];

export default function QuizGame() {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const answer = (i) => {
    if(i === Q[idx].c) setScore(s=>s+1);
    if(idx+1 < Q.length) setIdx(idx+1);
    else setDone(true);
  }

  if(done) return <div style={{padding:'1rem', textAlign:'center'}}><h2>Score: {score}/{Q.length}</h2><button onClick={()=>{setIdx(0);setScore(0);setDone(false);}}>Restart</button></div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h3 style={{marginBottom:'1rem'}}>{Q[idx].q}</h3>
      <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
        {Q[idx].a.map((ans, i) => (
          <button key={i} onClick={()=>answer(i)} style={{padding:'10px', background:'var(--surface)', color:'white', border:'1px solid var(--accent)', textAlign:'left'}}>{ans}</button>
        ))}
      </div>
    </div>
  );
}
