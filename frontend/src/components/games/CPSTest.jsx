import React, { useState, useEffect } from 'react';

export default function CPSTest() {
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if(!active || timeLeft<=0) return;
    const int = setInterval(()=>setTimeLeft(t=>t-1), 1000);
    return () => clearInterval(int);
  }, [active, timeLeft]);

  const click = () => {
    if(timeLeft<=0) return;
    if(!active) setActive(true);
    setClicks(c=>c+1);
  }

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <div style={{ marginBottom:'1rem' }}>Time: {timeLeft}s | Clicks: {clicks}</div>
      <button onClick={click} disabled={timeLeft<=0} style={{ width:'200px', height:'100px', background:'var(--accent)', color:'var(--bg)', fontSize:'1.5rem', border:'none', borderRadius:'10px' }}>
         {timeLeft<=0 ? `CPS: ${(clicks/5).toFixed(1)}` : 'CLICK ASAP!'}
      </button>
      {timeLeft<=0 && <div style={{marginTop:'1rem'}}><button onClick={()=>{setClicks(0);setTimeLeft(5);setActive(false);}} style={{padding:'5px 10px'}}>Retry</button></div>}
    </div>
  );
}
