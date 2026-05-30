import React, { useState, useEffect } from 'react';

const EMOJIS = ['🚀','👽','👾','🤖','⚡','🔥','🌟','🍕'];
const CARDS = [...EMOJIS, ...EMOJIS].sort(()=>Math.random() - 0.5);

export default function MemoryMatch() {
  const [cards, setCards] = useState(CARDS.map(id => ({ id, flipped: false, solved: false })));
  const [flippedIdx, setFlippedIdx] = useState([]);

  useEffect(() => {
    if(flippedIdx.length === 2) {
       const [a,b] = flippedIdx;
       if(cards[a].id === cards[b].id) {
         setCards(prev => { const n=[...prev]; n[a].solved=true; n[b].solved=true; return n; });
         setFlippedIdx([]);
       } else {
         setTimeout(() => {
           setCards(prev => { const n=[...prev]; n[a].flipped=false; n[b].flipped=false; return n; });
           setFlippedIdx([]);
         }, 800);
       }
    }
  }, [flippedIdx]);

  const flip = (i) => {
    if(flippedIdx.length===2 || cards[i].flipped || cards[i].solved) return;
    setCards(prev => { const n=[...prev]; n[i].flipped=true; return n;});
    setFlippedIdx(prev => [...prev, i]);
  }

  const reset = () => {
    setCards([...EMOJIS, ...EMOJIS].sort(()=>Math.random() - 0.5).map(id => ({ id, flipped: false, solved: false })));
  }

  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button onClick={reset} style={{marginBottom:'1rem', background:'var(--accent)', border:'none', padding:'2px 8px', borderRadius:'4px'}}>Reset</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 50px)', gap: '5px' }}>
        {cards.map((c, i) => (
          <div key={i} onClick={()=>flip(i)} style={{ width: '50px', height: '50px', background: c.flipped || c.solved ? 'var(--surface)' : 'var(--accent)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', cursor:'pointer', border:'1px solid var(--border)' }}>
            {(c.flipped || c.solved) ? c.id : '?'}
          </div>
        ))}
      </div>
    </div>
  );
}
