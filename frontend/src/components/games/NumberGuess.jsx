import React, { useState } from 'react';

export default function NumberGuess() {
  const [target, setTarget] = useState(Math.floor(Math.random()*100)+1);
  const [guess, setGuess] = useState('');
  const [msg, setMsg] = useState('Guess a number between 1 and 100');
  const [attempts, setAttempts] = useState(0);
  const [won, setWon] = useState(false);
  
  const submit = (e) => {
    e.preventDefault();
    if (!guess || won) return;
    
    const v = parseInt(guess);
    setAttempts(a => a + 1);
    
    if(v === target) {
      setMsg('🎯 EXACT MATCH! You win!');
      setWon(true);
    } else {
      const diff = Math.abs(target - v);
      if (diff <= 3) setMsg('🔥 BOILING! You differ by 3 or less!');
      else if (diff <= 10) setMsg('🥵 HOT! Within 10 away.');
      else if (diff <= 25) setMsg('😎 WARM. Getting closer.');
      else if (diff <= 50) setMsg('❄️ COLD. Keep trying.');
      else setMsg('🧊 FREEZING. You are way off.');
    }
    
    setGuess('');
  }

  const reset = () => {
    setTarget(Math.floor(Math.random()*100)+1);
    setGuess('');
    setMsg('Guess a number between 1 and 100');
    setAttempts(0);
    setWon(false);
  }

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center', maxWidth: '400px', width: '100%', borderTop: won ? '4px solid #4CAF50' : '4px solid var(--accent)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text)' }}>Number Guesser</h2>
        
        <div style={{ 
          margin: '2rem 0', 
          padding: '1.5rem', 
          background: 'rgba(0,0,0,0.3)', 
          borderRadius: '12px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: won ? '#4CAF50' : 'var(--accent)',
          transition: 'all 0.3s'
        }}>
          {msg}
        </div>

        {!won ? (
          <form onSubmit={submit} style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="number" 
              value={guess} 
              onChange={e=>setGuess(e.target.value)} 
              placeholder="1 - 100"
              autoFocus
              style={{
                flex: 1,
                padding: '10px 15px', 
                background: 'var(--surface)', 
                color: 'white', 
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '1.2rem',
                outline: 'none'
              }} 
            />
            <button type="submit" className="btn-primary" style={{ padding: '10px 20px', borderRadius: '8px' }}>Guess</button>
          </form>
        ) : (
          <button onClick={reset} className="btn-primary" style={{ padding: '10px 30px', width: '100%' }}>Play Again</button>
        )}

        <div style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>Attempts: {attempts}</div>
      </div>
    </div>
  );
}
