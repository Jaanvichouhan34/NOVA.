import React, { useState, useEffect } from 'react';

const BootScreen = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  const terminalLines = [
    { text: "$ boot --user=jaanvi", type: "cmd", speed: 40, delayAfter: 500 },
    { text: "> loading kernel modules..... [ok]", type: "log", speed: 15, delayAfter: 200 },
    { text: "> mounting /home/jaanvi ...... [ok]", type: "log", speed: 15, delayAfter: 200 },
    { text: "> starting ai_core.service ... [ok]", type: "log", speed: 15, delayAfter: 200 },
    { text: "> auth: face-id verified ........ [ok]", type: "log", speed: 15, delayAfter: 300 },
    { text: "$ ./portfolio --launch", type: "cmd", speed: 40, delayAfter: 800 }
  ];

  // Calculate total characters for percentage
  const totalChars = terminalLines.reduce((acc, line) => acc + line.text.length, 0);
  const [typedChars, setTypedChars] = useState(0);

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const currentLine = terminalLines[currentLineIndex];
      
      if (currentCharIndex < currentLine.text.length) {
        const timeout = setTimeout(() => {
          setLines(prev => {
            const newLines = [...prev];
            if (newLines[currentLineIndex] === undefined) {
              newLines[currentLineIndex] = '';
            }
            newLines[currentLineIndex] = currentLine.text.substring(0, currentCharIndex + 1);
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
          setTypedChars(prev => prev + 1);
        }, currentLine.speed); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, currentLine.delayAfter);
        return () => clearTimeout(timeout);
      }
    } else {
      // Finished
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000); // Wait a bit before disappearing
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, onComplete]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#050505',
      color: '#e0e0e0',
      fontFamily: 'monospace',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '90%',
        maxWidth: '600px',
        backgroundColor: '#0a0a0a',
        borderRadius: '8px',
        border: '1px solid #222',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        minHeight: '300px'
      }}>
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '2rem',
          opacity: 0.5
        }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#555' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#555' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#555' }} />
          <span style={{ marginLeft: '1rem', fontSize: '0.8rem', letterSpacing: '2px' }}>JAANVI@SYSTEM - TTY1</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
          {lines.map((line, idx) => {
            const isLastCmd = idx === terminalLines.length - 1;
            const isTyping = currentLineIndex === idx;
            
            return (
              <div key={idx} style={{ 
                color: terminalLines[idx].type === 'cmd' ? '#fff' : '#aaa',
                display: 'flex',
              }}>
                <span dangerouslySetInnerHTML={{ __html: line.replace(/\[ok\]/g, '<span style="color: #4ade80">[ok]</span>') }} />
                {(isLastCmd && idx === lines.length - 1) || (isTyping && terminalLines[idx].type === 'cmd') ? (
                  <span className="cursor-blink" style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '15px',
                    backgroundColor: '#fff',
                    marginLeft: '4px',
                    animation: 'blink 1s step-end infinite'
                  }} />
                ) : null}
              </div>
            );
          })}
        </div>
        
        <div style={{
          marginTop: '3rem',
          borderTop: '1px solid #333',
          paddingTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          fontSize: '0.7rem',
          color: '#555',
          letterSpacing: '2px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>SECURE BOOT</span>
            <span>{Math.min(100, Math.floor((typedChars / totalChars) * 100))}%</span>
          </div>
          <div style={{
            width: '100%',
            height: '2px',
            backgroundColor: '#222',
            marginTop: '4px'
          }}>
            <div style={{
              width: `${Math.min(100, Math.floor((typedChars / totalChars) * 100))}%`,
              height: '100%',
              backgroundColor: '#ddd',
              transition: 'width 0.1s linear'
            }} />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default BootScreen;
