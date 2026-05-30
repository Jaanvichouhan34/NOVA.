import React, { useState, useEffect, useRef } from 'react';

const SENTENCE = "The quick brown fox jumps over the lazy dog";

export default function TypingTest() {
  const [text, setText] = useState('');
  const [start, setStart] = useState(null);
  const [wpm, setWpm] = useState(null);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    if(!start) setStart(Date.now());
    const v = e.target.value;
    if(v.length <= SENTENCE.length) {
      setText(v);
    }
    
    // Check if they typed the whole sentence perfectly
    if(v === SENTENCE) {
      const time = (Date.now() - start) / 1000 / 60; // minutes
      setWpm(Math.round((SENTENCE.length / 5) / time));
    }
  }

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      
      <div 
        style={{
          fontFamily:'var(--font-mono)', 
          marginBottom:'2rem', 
          fontSize: '1.5rem',
          lineHeight: '1.5',
          maxWidth: '600px',
          textAlign: 'center',
          userSelect: 'none',
          padding: '1rem',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '12px'
        }}
        onClick={() => inputRef.current?.focus()}
      >
        {SENTENCE.split('').map((char, i) => {
          let color = 'var(--text-muted)';
          if (i < text.length) {
            color = text[i] === char ? 'var(--accent)' : 'red';
          }
          return (
            <span key={i} style={{ color, textDecoration: text[i] && text[i] !== char ? 'underline' : 'none' }}>
              {char}
            </span>
          );
        })}
      </div>

      {!wpm ? (
        <input 
          ref={inputRef}
          type="text" 
          value={text} 
          onChange={handleChange} 
          autoFocus
          placeholder="Start typing above..." 
          style={{
            width:'80%', 
            maxWidth: '600px',
            padding:'15px', 
            background:'var(--surface)', 
            color:'white', 
            border:'2px solid var(--accent)',
            borderRadius: '12px',
            fontSize: '1.2rem',
            outline: 'none',
            textAlign: 'center',
            boxShadow: '0 0 15px rgba(var(--accent-rgb), 0.2)'
          }} 
        />
      ) : (
        <div style={{ textAlign: 'center', animation: 'fadeInUp 0.5s' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem' }}>{wpm} <span style={{fontSize:'1.5rem',color:'var(--text-muted)'}}>WPM</span></h2>
          <button className="btn-primary" onClick={()=>{setText('');setStart(null);setWpm(null);}} style={{padding:'10px 20px', fontSize: '1.2rem'}}>Play Again</button>
        </div>
      )}
    </div>
  );
}
