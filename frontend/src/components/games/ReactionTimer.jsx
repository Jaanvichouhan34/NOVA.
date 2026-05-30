import React, { useState, useRef } from 'react';

export default function ReactionTimer() {
  const [state, setState] = useState('idle'); // idle, wait, click
  const [time, setTime] = useState(null);
  const startRef = useRef(0);
  const timeoutRef = useRef(null);

  const click = () => {
    if(state === 'idle') {
      setState('wait');
      setTime(null);
      timeoutRef.current = setTimeout(() => {
         setState('click');
         startRef.current = Date.now();
      }, Math.random()*2000 + 1000);
    } else if(state === 'wait') {
      clearTimeout(timeoutRef.current);
      setState('idle');
      setTime('Too early!');
    } else {
      setTime(Date.now() - startRef.current + ' ms');
      setState('idle');
    }
  }

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <div onClick={click} style={{ width:'200px', height:'200px', margin:'0 auto', background: state==='wait'?'red':state==='click'?'green':'var(--surface)', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer', borderRadius:'16px', border:'2px solid var(--accent)' }}>
         {state==='idle' ? 'Click to Start' : state==='wait' ? 'Wait for Green...' : 'CLICK NOW!'}
      </div>
      <div style={{ marginTop:'1rem', fontSize:'1.2rem' }}>{time && `Result: ${time}`}</div>
    </div>
  );
}
