import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, AlertCircle } from 'lucide-react';

export default function AskJaanviAI() {
  const [messages, setMessages] = useState([
    { role: 'model', text: "Hey! 👋 I'm Jaanvi's AI. I know everything about her — ask me about her projects, skills, background, or anything you're curious about!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if(!input.trim() || loading) return;
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    
    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, history: newMessages.map(m => ({role: m.role, parts: [{text: m.text}]})) })
      });
      if (!res.ok) throw new Error('Backend down');
      const data = await res.json();
      setMessages([...newMessages, { role: 'model', text: data.reply }]);
      setLoading(false);
    } catch(err) {
      // Fallback local response
      setTimeout(() => {
        setMessages([...newMessages, { 
          role: 'model', 
          text: "System Offline: The backend server at PORT 5000 is currently unreachable. But don't worry! I can tell you that Jaanvi is a brilliant full-stack developer who builds things that feel alive. Ask her to start the server! 😉",
          isError: true
        }]);
        setLoading(false);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div style={{ padding: '2rem 5%', maxWidth: '900px', margin: '0 auto', paddingBottom: '120px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: '3rem', color: 'var(--accent)' }}>
          <Bot size={48} /> Ask AI
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Powered by Gemini. Ask me anything about Jaanvi.</p>
      </div>

      <div className="glass-panel" style={{ height: '60vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid var(--accent)', boxShadow: '0 0 30px rgba(var(--accent-rgb), 0.1)' }}>
        
        {/* Chat History */}
        <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ 
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              background: msg.role === 'user' ? 'var(--accent)' : (msg.isError ? 'rgba(255, 50, 50, 0.1)' : 'var(--surface)'),
              color: msg.role === 'user' ? '#000' : (msg.isError ? '#ff6b6b' : 'var(--text)'),
              padding: '1.2rem',
              borderRadius: '20px',
              borderBottomRightRadius: msg.role === 'user' ? '4px' : '20px',
              borderBottomLeftRadius: msg.role === 'user' ? '20px' : '4px',
              border: msg.isError ? '1px solid #ff6b6b' : 'none',
              maxWidth: '85%',
              lineHeight: '1.6',
              boxShadow: msg.role === 'user' ? '0 5px 15px rgba(var(--accent-rgb), 0.2)' : 'none'
            }}>
              {msg.isError && <AlertCircle size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />}
              {msg.text}
            </div>
          ))}
          {loading && (
            <div style={{ alignSelf: 'flex-start', background: 'var(--surface)', padding: '1rem', borderRadius: '20px', color: 'var(--accent)' }}>
              <i>Jaanvi's AI is typing...</i>
            </div>
          )}
          <div ref={endOfMessagesRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={handleKeyDown}
            style={{ 
              flex: 1, padding: '1.2rem', borderRadius: '16px', background: 'var(--bg)', 
              border: '1px solid var(--border)', color: 'var(--text)', fontSize: '1rem',
              outline: 'none', transition: 'border 0.3s'
            }} 
            placeholder="Type your message..." 
            onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
          />
          <button 
            onClick={handleSend} 
            className="btn-primary"
            style={{ borderRadius: '50%', padding: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
