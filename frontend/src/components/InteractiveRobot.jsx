import React, { useEffect, useRef, useState } from 'react';
import './InteractiveRobot.css';

export default function InteractiveRobot() {
  const worldRef = useRef(null);
  const eyeLRef = useRef(null);
  const eyeRRef = useRef(null);
  const bubbleRef = useRef(null);
  const particlesRef = useRef(null);
  
  const [msg, setMsg] = useState('hello.exe 👋');

  useEffect(() => {
    const msgs = [
      'hello.exe 👋', 'i see you! 👁️', 'wanna hire me? 😏', 
      'mern stack go brrr 🔥', 'building stuff... ⚡', 
      'ai mode: ON 🤖', 'follow follow~ 🎯', 'groq api ready 🧠', 
      '8.57 cgpa btw 😎', 'jaanvi.exe running 💻'
    ];
    let msgIdx = 0;
    let lastMsg = 0;
    let particleThrottle = 0;

    function trackEye(el, mx, my) {
      if (!el) return;
      const r = el.parentElement.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = mx - cx;
      const dy = my - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const max = 5;
      const s = dist > 0 ? Math.min(max / dist, 1) : 0;
      el.style.transform = `translate(${dx * s}px, ${dy * s}px)`;
    }

    function spawnP(x, y) {
      if (!particlesRef.current) return;
      const p = document.createElement('div');
      p.className = 'p';
      const a = Math.random() * Math.PI * 2;
      const d = 30 + Math.random() * 55;
      const sz = 3 + Math.random() * 4;
      const c = Math.random() > 0.5 ? '#2563EB' : '#60A5FA';
      p.style.cssText = `left:${x}px;top:${y}px;--px:${Math.cos(a) * d}px;--py:${Math.sin(a) * d}px;animation-duration:${0.5 + Math.random() * 0.5}s;width:${sz}px;height:${sz}px;background:${c};border-radius:50%;`;
      particlesRef.current.appendChild(p);
      setTimeout(() => {
        if (p.parentNode) p.remove();
      }, 1100);
    }

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (!worldRef.current) return;
      const rect = worldRef.current.getBoundingClientRect();
      
      trackEye(eyeLRef.current, e.clientX, e.clientY);
      trackEye(eyeRRef.current, e.clientX, e.clientY);
      
      if (now - particleThrottle > 80) {
        spawnP(e.clientX - rect.left, e.clientY - rect.top);
        particleThrottle = now;
      }
      
      if (now - lastMsg > 3500) {
        msgIdx = (msgIdx + 1) % msgs.length;
        setMsg(msgs[msgIdx]);
        lastMsg = now;
      }
    };

    const handleClick = (e) => {
      if (!worldRef.current) return;
      const rect = worldRef.current.getBoundingClientRect();
      for (let i = 0; i < 8; i++) {
        spawnP(e.clientX - rect.left, e.clientY - rect.top);
      }
      setMsg(msgs[Math.floor(Math.random() * msgs.length)]);
      if (bubbleRef.current) {
        bubbleRef.current.style.opacity = '1';
        setTimeout(() => {
          if (bubbleRef.current) bubbleRef.current.style.opacity = '';
        }, 2000);
      }
    };

    // We add listeners to window so it tracks eyes everywhere on the page!
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="world" id="world" ref={worldRef}>
      <div className="particles" id="particles" ref={particlesRef}></div>
      <div className="robot-wrap" id="robotWrap">
        <div className="bubble" id="bubble" ref={bubbleRef}>{msg}</div>
        <div className="robot-body-wrap">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="antenna-ball"></div>
            <div className="antenna-stick"></div>
          </div>
          <div className="head" id="head">
            <div className="ear ear-l"></div>
            <div className="ear ear-r"></div>
            <div className="eyes-row">
              <div className="eye-socket">
                <div className="eyeball" id="eyeL" ref={eyeLRef}>
                  <div className="eye-shine"></div>
                </div>
              </div>
              <div className="eye-socket">
                <div className="eyeball" id="eyeR" ref={eyeRRef}>
                  <div className="eye-shine"></div>
                </div>
              </div>
            </div>
            <div className="mouth">
              <div className="mbar"></div><div className="mbar"></div><div className="mbar"></div>
              <div className="mbar"></div><div className="mbar"></div>
            </div>
            <div className="cheek cheek-l"></div>
            <div className="cheek cheek-r"></div>
          </div>
          <div className="neck"></div>
          <div className="torso-wrap">
            <div className="arm arm-l"><div className="hand"></div></div>
            <div className="torso">
              <div className="chest-screen">
                <div className="screen-bars">
                  <div className="sbar"></div><div className="sbar"></div><div className="sbar"></div>
                  <div className="sbar"></div><div className="sbar"></div>
                </div>
                <div className="screen-dots">
                  <div className="sdot"></div><div className="sdot"></div><div className="sdot"></div>
                </div>
              </div>
            </div>
            <div className="arm arm-r"><div className="hand"></div></div>
          </div>
          <div className="legs">
            <div className="leg"><div className="foot"></div></div>
            <div className="leg"><div className="foot"></div></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
      <div className="hint">— move your cursor around —</div>
    </div>
  );
}
