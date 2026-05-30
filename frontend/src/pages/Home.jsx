import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Briefcase, Database, Code2, BrainCircuit } from 'lucide-react';

export default function Home({ hireMeMode }) {
  const [counts, setCounts] = useState({
    projects: 0,
    cgpa: 0,
    hackathons: 0,
    questions: 0
  });

  useEffect(() => {
    // Animate stats counter
    const duration = 2000;
    const steps = 60;
    let currentStep = 0;

    const targetCounts = {
      projects: 14, // 14 live projects referenced
      cgpa: 8.57,
      hackathons: 3,
      questions: 600
    };

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        projects: Math.floor(targetCounts.projects * progress),
        cgpa: (targetCounts.cgpa * progress).toFixed(2),
        hackathons: Math.floor(targetCounts.hackathons * progress),
        questions: Math.floor(targetCounts.questions * progress)
      });

      if (currentStep >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)', alignItems: 'center', padding: '0 5%' }}>
      
      {/* ---------------- NORMAL MODE (COOL & ELEGANT) ---------------- */}
      {!hireMeMode && (
        <>
          {/* Left Content */}
          <div style={{ flex: 1, zIndex: 10, maxWidth: '600px' }}>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              color: 'var(--accent)', 
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              display: 'block',
              marginBottom: '1rem'
            }}>
              ✦ Welcome to my universe
            </span>
            
            <h1 style={{ 
              fontSize: 'clamp(3.5rem, 8vw, 7rem)', 
              lineHeight: 0.9, 
              marginBottom: '1.5rem',
              letterSpacing: '-2px'
            }}>
              <span style={{ color: 'var(--text)' }}>JAANVI</span> <br/>
              <span style={{ 
                background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent3) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(var(--accent-rgb), 0.4))'
              }}>CHOUHAN</span>
            </h1>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(var(--accent-rgb), 0.05)',
              border: '1px solid rgba(var(--accent-rgb), 0.2)',
              padding: '0.6rem 1.2rem',
              borderRadius: '30px',
              marginBottom: '2rem',
              boxShadow: 'inset 0 0 20px rgba(var(--accent-rgb), 0.05)'
            }}>
              <h2 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', margin: 0, fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>
                FULL-STACK DEV <span style={{color:'var(--accent)', margin:'0 8px'}}>•</span> AI BUILDER <span style={{color:'var(--accent)', margin:'0 8px'}}>•</span> CS @ MEDI-CAPS
              </h2>
            </div>

            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              I build things that feel alive — AI assistants, adaptive evaluators, outfit scanners. 
              This is not just a portfolio. This is Mine.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link to="/projects" className="btn-primary">
                See My Work <ArrowRight size={18} />
              </Link>
              <Link to="/ai" className="btn-secondary">
                Ask Me Anything ✦
              </Link>
            </div>

            {/* Stats */}
            <div className="glass-panel hover-glow" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '1.5rem 2rem',
              marginTop: '2rem',
              borderTop: '2px solid var(--accent)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              {[
                { value: `${counts.projects}+`, label: 'Live Projects' },
                { value: counts.cgpa, label: 'CGPA' },
                { value: `${counts.hackathons}×`, label: 'Hackathons' },
                { value: `${counts.questions}+`, label: 'AI Questions Built' }
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '1.5rem', 
                    color: 'var(--accent)',
                    fontWeight: 'bold',
                    marginBottom: '0.25rem'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Advanced 3D Core with Perfect Orbits */}
          <div style={{ 
            flex: 1, 
            height: '600px', 
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div className="advanced-energy-core">
              {/* Central Orb */}
              <div className="core-orb"></div>
              
              {/* The 3D tilted plane containing all the orbits */}
              <div className="orbital-plane">
                <div className="outer-sphere"></div>
                
                <div className="core-ring ring-1">
                  <div className="node-wrapper wrapper-1">
                    <div className="node"><Database size={20} /></div>
                  </div>
                </div>
                
                <div className="core-ring ring-2">
                  <div className="node-wrapper wrapper-2">
                    <div className="node"><Code2 size={20} /></div>
                  </div>
                </div>
                
                <div className="core-ring ring-3">
                  <div className="node-wrapper wrapper-3">
                    <div className="node"><BrainCircuit size={20} /></div>
                  </div>
                </div>
              </div>
              
              {/* 3D Floating Badges */}
              <div className="floating-badge badge-1">Full-Stack</div>
              <div className="floating-badge badge-2">AI Engineer</div>
            </div>
            
            <style>{`
              .advanced-energy-core {
                position: relative;
                width: 450px;
                height: 450px;
                display: flex;
                justifyContent: center;
                alignItems: center;
                perspective: 800px;
              }
              
              .core-orb {
                position: absolute;
                width: 120px;
                height: 120px;
                background: radial-gradient(circle at 30% 30%, #fff 0%, var(--accent) 15%, transparent 60%);
                border-radius: 50%;
                box-shadow: 
                  0 0 60px var(--accent), 
                  inset 0 0 30px #fff,
                  inset 0 0 60px var(--accent);
                animation: pulse 3s ease-in-out infinite alternate;
                z-index: 10;
                filter: drop-shadow(0 0 20px var(--accent));
              }

              .orbital-plane {
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                justifyContent: center;
                alignItems: center;
                transform-style: preserve-3d;
                transform: rotateZ(45deg) rotateX(70deg);
                animation: floatOrbital 8s ease-in-out infinite alternate;
              }

              .outer-sphere {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 2px dashed rgba(var(--accent-rgb), 0.3);
                animation: spin 30s linear infinite;
              }

              .core-ring {
                position: absolute;
                border-radius: 50%;
                border: 1px solid rgba(255,255,255,0.05);
                box-shadow: 
                  0 0 30px rgba(var(--accent-rgb), 0.15), 
                  inset 0 0 30px rgba(var(--accent-rgb), 0.15);
                transform-style: preserve-3d;
              }

              .ring-1 {
                width: 85%;
                height: 85%;
                border-top: 3px solid var(--accent);
                border-bottom: 1px solid rgba(var(--accent2-rgb), 0.3);
                animation: spin 12s linear infinite;
                filter: drop-shadow(0 0 10px var(--accent));
              }
              .ring-2 {
                width: 65%;
                height: 65%;
                border-left: 3px solid var(--accent3);
                border-right: 1px solid rgba(var(--accent-rgb), 0.3);
                animation: spin-reverse 9s linear infinite;
                filter: drop-shadow(0 0 10px var(--accent3));
              }
              .ring-3 {
                width: 45%;
                height: 45%;
                border-top: 3px solid var(--accent4);
                border-bottom: 1px solid rgba(var(--accent-rgb), 0.3);
                animation: spin 6s linear infinite;
                filter: drop-shadow(0 0 10px var(--accent4));
              }

              @keyframes spin {
                100% { transform: rotate(360deg); }
              }
              @keyframes spin-reverse {
                100% { transform: rotate(-360deg); }
              }

              .node-wrapper {
                position: absolute;
                width: 40px; height: 40px;
                transform-style: preserve-3d;
              }
              
              /* Position nodes on the rings and counter-rotate them so they stand up */
              .wrapper-1 {
                top: -20px; left: calc(50% - 20px);
                animation: anti-spin 12s linear infinite;
              }
              .wrapper-2 {
                top: calc(50% - 20px); left: -20px;
                animation: anti-spin-reverse 9s linear infinite;
              }
              .wrapper-3 {
                bottom: -20px; left: calc(50% - 20px);
                animation: anti-spin 6s linear infinite;
              }

              /* The anti-spin counters BOTH the ring's 2D rotation AND the orbital plane's 70deg tilt */
              @keyframes anti-spin {
                0% { transform: rotate(0deg) rotateX(-70deg) rotateZ(-45deg); }
                100% { transform: rotate(-360deg) rotateX(-70deg) rotateZ(-45deg); }
              }
              @keyframes anti-spin-reverse {
                0% { transform: rotate(0deg) rotateX(-70deg) rotateZ(-45deg); }
                100% { transform: rotate(360deg) rotateX(-70deg) rotateZ(-45deg); }
              }

              .node {
                width: 100%; height: 100%;
                background: rgba(255,255,255,0.05);
                border: 1px solid rgba(var(--accent-rgb), 0.4);
                border-radius: 12px;
                display: flex; justifyContent: center; alignItems: center;
                color: var(--accent);
                backdrop-filter: blur(8px);
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
              }

              .floating-badge {
                position: absolute;
                padding: 0.5rem 1.5rem;
                background: rgba(var(--card), 0.8);
                backdrop-filter: blur(10px);
                border: 1px solid var(--accent);
                border-radius: 20px;
                color: var(--accent);
                font-family: var(--font-mono);
                font-size: 0.8rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.1);
                z-index: 20;
              }
              .badge-1 { top: 5%; left: -10%; animation: floatBadge 5s ease-in-out infinite; }
              .badge-2 { bottom: 5%; right: -10%; animation: floatBadge 6s ease-in-out infinite reverse; }

              @keyframes pulse {
                0% { transform: scale(0.9); opacity: 0.7; }
                100% { transform: scale(1.1); opacity: 1; }
              }
              @keyframes floatOrbital {
                0%, 100% { transform: rotateZ(45deg) rotateX(70deg) translateY(0); }
                50% { transform: rotateZ(45deg) rotateX(70deg) translateY(-15px); }
              }
              @keyframes floatBadge {
                0%, 100% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-20px) scale(1.05); }
              }
            `}</style>
          </div>
        </>
      )}

      {/* ---------------- HIRE ME MODE (PROFESSIONAL & CLEAN) ---------------- */}
      {hireMeMode && (
        <div style={{ display: 'flex', width: '100%', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Left Professional Intro */}
          <div style={{ flex: '1 1 500px' }}>
            <span style={{ color: 'var(--accent3)', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>
              Software Engineer Portfolio
            </span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text)' }}>
              Jaanvi Chouhan
            </h1>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Building Scalable Web Applications & AI-Driven Solutions.
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '3rem' }}>
              Welcome to my professional portfolio. I am a highly motivated Computer Science undergraduate actively seeking internship and collaboration opportunities where I can apply my expertise in the MERN stack and AI API integrations.
            </p>
            
            <div className="glass-panel" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '2rem',
              borderRadius: '16px',
              borderTop: '4px solid var(--accent3)'
            }}>
              {[
                { value: `${counts.projects}+`, label: 'Live Projects' },
                { value: counts.cgpa, label: 'CGPA' },
                { value: `${counts.hackathons}×`, label: 'Hackathons' },
                { value: `${counts.questions}+`, label: 'AI Questions Built' }
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', color: 'var(--text)', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Professional Profile Links */}
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
             <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', width: '100%', maxWidth: '450px', borderTop: '4px solid var(--accent)' }}>
                <img src="/jaanvi.jpeg" alt="Jaanvi Chouhan" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem auto', border: '4px solid var(--accent)', boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.3)' }} />
                <h3 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Professional Profile</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                  Connect with me or review my code repositories.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <a href="https://github.com/Jaanvichouhan34" target="_blank" rel="noreferrer" className="btn-secondary" style={{ justifyContent: 'center', padding: '1rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    GitHub Profile
                  </a>
                  <a href="https://www.linkedin.com/in/jaanvi-chouhan" target="_blank" rel="noreferrer" className="btn-secondary" style={{ justifyContent: 'center', padding: '1rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn
                  </a>
                  <a href="https://leetcode.com/u/jaanvichouhan34/" target="_blank" rel="noreferrer" className="btn-secondary" style={{ justifyContent: 'center', padding: '1rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 22 8-8v-4l-8 8-8-8v4z"/><path d="m12 14 8-8v-4l-8 8-8-8v4z"/></svg>
                    LeetCode
                  </a>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
