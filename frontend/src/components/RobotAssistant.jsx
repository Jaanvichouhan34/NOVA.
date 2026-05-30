import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';

export default function RobotAssistant() {
  const [position, setPosition] = useState({ y: 0 });
  const [message, setMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Float animation using simple setInterval or requestAnimationFrame
    let start = Date.now();
    const float = setInterval(() => {
      const elapsed = Date.now() - start;
      setPosition({ y: Math.sin(elapsed / 500) * 10 });
    }, 50);

    return () => clearInterval(float);
  }, []);

  useEffect(() => {
    // Contextual messages based on route
    const messages = {
      '/': "Hi there! I'm CJ, your guide! Try scrolling around or opening the AI chat!",
      '/about': "This is the About page. Jaanvi is pretty awesome, right?",
      '/projects': "Look at all these cool projects! They are mostly full-stack AI apps.",
      '/arcade': "Ready to play? Let's have some fun with these mini-games!",
      '/ai': "Ask Jaanvi's AI anything. It knows ALL about her!",
      '/learn': "Learning never stops. Here's what Jaanvi is mastering next.",
      '/album': "A picture is worth a thousand words. Welcome to the gallery!",
      '/connect': "Want to collaborate? Drop a message here!"
    };

    setMessage(messages[location.pathname] || "I'm flying around this cool universe!");
  }, [location.pathname]);

  return (
    <div style={{
      position: 'fixed',
      bottom: '120px',
      right: '40px',
      zIndex: 9000,
      transform: `translateY(${position.y}px)`,
      display: 'flex',
      alignItems: 'flex-end',
      flexDirection: 'column',
      gap: '10px'
    }}>
      {/* Speech Bubble */}
      <div className="glass-panel" style={{
        padding: '1rem',
        borderRadius: '16px',
        borderBottomRightRadius: '0px',
        maxWidth: '200px',
        fontSize: '0.85rem',
        color: 'var(--text)',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        animation: 'fadeIn 0.5s ease-out'
      }}>
        {message}
      </div>

      {/* Robot Body */}
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--accent), var(--accent4))',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.5), inset 0 0 10px rgba(255,255,255,0.5)',
        border: '2px solid rgba(255,255,255,0.2)',
      }}>
        <Bot size={32} color="#000" />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
