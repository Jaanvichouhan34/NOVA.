import React from 'react';
import { Compass, CircleUserRound, Terminal, Zap, Download, ImageIcon } from 'lucide-react';

export default function About({ hireMeMode }) {

  const proSteps = [
    { year: 'Phase 1: Foundations', title: 'The UI Clones', desc: 'Started my journey by replicating the UI of giants: Amazon, Facebook, and Spotify. Mastered HTML and CSS precision.' },
    { year: 'Phase 2: Logic', title: 'JavaScript & Logic', desc: 'Moved beyond static designs. Learned vanilla JavaScript to make things interactive, eventually transitioning to modern ES6+ standards.' },
    { year: 'Phase 3: the Stack', title: 'MERN Stack Mastery', desc: 'Embraced React.js for the frontend and Node/Express for the backend. Handled databases with MongoDB and MySQL.' },
    { year: 'Phase 4: Intelligence', title: 'AI Engineering', desc: 'Integrated OpenAI APIs, Google Gemini, and OpenCV. Started building apps that think and adapt, like ElevateU and SkillMirror.' }
  ];

  if (!hireMeMode) {
    return (
      <div style={{ padding: '2rem 5%', minHeight: 'calc(100vh - 150px)', paddingBottom: '150px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '4rem', color: 'var(--accent)', textShadow: '0 0 15px rgba(var(--accent-rgb), 0.5)', letterSpacing: '4px' }}>
            <Terminal size={48} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '15px' }} />
            THE LORE
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>Initialize personality.exe...</p>
        </div>

        <div className="glass-panel" style={{ 
          padding: '3rem', 
          borderRadius: '24px', 
          border: '1px solid rgba(var(--accent-rgb), 0.3)', 
          background: 'rgba(var(--card), 0.7)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.2), inset 0 0 20px rgba(var(--accent-rgb), 0.1)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--accent)', opacity: 0.15, filter: 'blur(80px)' }}></div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            <div style={{ 
              flex: '1 1 250px', 
              height: '350px',
              borderRadius: '20px', 
              backgroundImage: 'url("/jaanvi_about.jpeg.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              border: '2px solid rgba(var(--accent-rgb), 0.4)',
              position: 'relative'
            }}>
            </div>

            <div style={{ flex: '2 1 350px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Zap color="var(--accent)" /> Main Character Energy
                </h2>
              </div>

              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text)', marginBottom: '1.5rem' }}>
                I'm Jaanvi. By day, I'm a CS undergrad grinding through algorithms and system design. By night, I'm building AI tools that sound like science fiction.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                I started pulling apart websites just to see how they worked. Before I knew it, I was ripping through React architectures and routing LLM brainpower into local environments. When I'm not coding, I'm definitely listening to music, dropping game high-scores, or finding my next caffeine fix.
              </p>
            </div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>// CURRENT STATUS</h3>
            <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text)' }}>Building insanely cool things on the internet. Turn on 'Hire Me' at the top if you're a recruiter looking for the formal layout.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem 5%', minHeight: 'calc(100vh - 150px)', paddingBottom: '150px', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--accent)' }}>
          <Compass size={48} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '15px' }} />
          MY JOURNEY
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>From pixels to neural networks.</p>
      </div>

      <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '4rem', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', borderTop: '4px solid var(--accent2)' }}>
        
        {/* Professional Headshot */}
        <div style={{ 
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          backgroundImage: 'url("/jaanvi_about.jpeg.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
          border: '4px solid var(--accent2)',
          flexShrink: 0
        }}></div>

        <div style={{ flex: '1 1 300px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '2rem' }}>Jaanvi Chouhan</h2>
            <a href="/resume.pdf" download="Jaanvi_Chouhan_Resume.pdf" className="btn-primary" style={{ display: 'flex', gap: '8px', alignItems: 'center', textDecoration: 'none', padding: '0.6rem 1.2rem' }}>
              <Download size={18} /> Download CV
            </a>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.1rem' }}>
            I am a driven CS undergraduate at Medi-Caps University (CGPA: 8.57) specializing in Full-Stack web development and AI integration. 
            My objective is to leverage my MERN stack expertise and problem-solving skills to build impactful, scalable products in a challenging engineering role.
          </p>
        </div>
      </div>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        <div style={{ position: 'absolute', left: '2rem', top: 0, bottom: 0, width: '2px', background: 'var(--accent)', opacity: 0.3 }}></div>
        
        {proSteps.map((step, i) => (
          <div key={i} style={{ 
            position: 'relative', 
            marginBottom: '3rem', 
            paddingLeft: '3rem',
            animation: `fadeInUp 0.6s ease-out ${i * 0.2}s both`
          }}>
            <div style={{
              position: 'absolute',
              left: '-8px',
              top: '5px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: 'var(--bg)',
              border: '4px solid var(--accent)',
              boxShadow: '0 0 10px var(--accent)'
            }}></div>
            
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', background: 'rgba(var(--card), 0.5)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {step.year}
              </span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
