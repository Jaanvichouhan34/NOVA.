import React from 'react';
import { Code2, Database, BrainCircuit, LayoutTemplate, Briefcase, FileCode2, Zap } from 'lucide-react';

export default function Learn({ hireMeMode }) {
  const skills = [
    { title: 'Languages', icon: Code2, details: 'Python, JavaScript, C, Core Java — strong foundations in logic and OOP.', color: 'var(--accent4)' },
    { title: 'Frontend', icon: LayoutTemplate, details: 'React.js, HTML, CSS, Tailwind CSS, Framer Motion — building responsive, animated UIs.', color: 'var(--accent)' },
    { title: 'Backend', icon: Database, details: 'Node.js, Express.js, REST APIs, JWT — secure, scalable server-side architecture.', color: 'var(--accent2)' },
    { title: 'Database', icon: Database, details: 'MongoDB, MySQL — schema design, aggregation pipelines, and relational modeling.', color: 'var(--accent3)' },
    { title: 'AI & Tools', icon: BrainCircuit, details: 'Groq API, OpenAI, Google Gemini, OpenCV, Git, GitHub, Vercel, Render.', color: 'var(--accent)' }
  ];

  const challenges = [
    { title: 'AI Rate Limiting & Fallbacks', icon: Zap, details: 'When building intelligent chat, API downtime would crash the UI. I implemented robust frontend fallbacks using React state to simulate graceful degradation (Offline mode) instead of failing catastrophically.' },
    { title: 'Complex Route Nesting & State', icon: FileCode2, details: 'Handling dual "Normal" and "Hire Me" global states required careful lifting of state to the App component and utilizing prop drilling and local storage to persist the recruiter experience reliably across renders.' },
    { title: 'Performance vs Aesthetics', icon: Briefcase, details: 'Balancing glassmorphism CSS filters with heavy React rendering was dropping frames. I localized CSS variables and optimized React re-renders using useCallback/useMemo where necessary, keeping 60fps animations.' }
  ];

  if (hireMeMode) {
    return (
      <div style={{ padding: '2rem 5%', minHeight: 'calc(100vh - 150px)', paddingBottom: '150px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3.5rem', color: 'var(--accent)' }}>SKILLS & CHALLENGES</h1>
          <p style={{ color: 'var(--text-muted)' }}>My technical stack and how I solve problems.</p>
        </div>

        {/* Technical Stack Grid */}
        <h2 style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Technical Stack</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="glass-panel" style={{ 
                 padding: '2rem', 
                 borderTop: `4px solid ${skill.color}`, 
                 borderRadius: '16px',
                 transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                 e.currentTarget.style.boxShadow = `0 15px 30px ${skill.color}33`;
              }}
              onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0) scale(1)';
                 e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ animation: `pulse 3s infinite ${index}s` }}>
                  <Icon size={32} color={skill.color} style={{ marginBottom: '1rem' }} />
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{skill.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{skill.details}</p>
              </div>
            );
          })}
        </div>

        {/* Challenges Overcome */}
        <h2 style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Engineering Challenges Overcome</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {challenges.map((challenge, index) => {
             const Icon = challenge.icon;
             return (
              <div key={index} className="glass-panel" style={{ 
                padding: '2rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateX(10px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                 <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', color: 'var(--accent3)' }}>
                   <Icon size={28} />
                 </div>
                 <div>
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--text)' }}>{challenge.title}</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{challenge.details}</p>
                 </div>
              </div>
             );
          })}
        </div>
        <style>{`
          @keyframes pulse {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem 5%', minHeight: 'calc(100vh - 150px)', paddingBottom: '150px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '4rem', color: 'var(--accent)', textShadow: '0 0 40px rgba(var(--accent-rgb), 0.7)', letterSpacing: '5px' }}>
          <Zap size={48} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '15px' }} />
          LEARNING NEURAL NET
        </h1>
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>The technologies driving my personal universe.</p>
      </div>

      <div style={{ position: 'relative', paddingLeft: '3rem', marginTop: '4rem' }}>
        {/* Glowing Energy Line */}
        <div style={{ 
          position: 'absolute', 
          left: '2rem', 
          top: 0, 
          bottom: 0, 
          width: '4px', 
          background: 'linear-gradient(to bottom, transparent, var(--accent), var(--accent2), var(--accent3), transparent)',
          boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.6)',
          borderRadius: '10px'
        }}></div>

        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} style={{ 
              position: 'relative', 
              marginBottom: '4rem', 
              animation: `fadeInUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.2}s both`
            }}>
              {/* Outer Energy Ring */}
              <div style={{
                position: 'absolute',
                left: '-26px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.8)',
                border: `3px solid ${skill.color}`,
                boxShadow: `0 0 25px ${skill.color}`,
                zIndex: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: skill.color }}></div>
              </div>
              
              <div className="glass-panel" style={{ 
                padding: '2.5rem', 
                border: `1px solid rgba(var(--accent-rgb), 0.2)`,
                background: 'linear-gradient(135deg, color-mix(in srgb, var(--card) $(0.6*100)%, transparent), rgba(0,0,0,0.8))',
                borderRadius: '24px',
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) translateX(10px)';
                e.currentTarget.style.boxShadow = `0 15px 50px ${skill.color}33`;
                e.currentTarget.style.borderColor = skill.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) translateX(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.5)';
                e.currentTarget.style.borderColor = 'rgba(var(--accent-rgb), 0.2)';
              }}>
                <div style={{
                  position: 'absolute', right: '-50px', top: '-50px', width: '200px', height: '200px', background: skill.color, opacity: 0.1, filter: 'blur(50px)'
                }}></div>

                <div style={{ 
                  padding: '1.5rem', 
                  borderRadius: '20px', 
                  background: 'rgba(255,255,255,0.05)',
                  color: skill.color,
                  border: `1px solid ${skill.color}40`,
                  boxShadow: `inset 0 0 20px ${skill.color}20` 
                }}>
                  <Icon size={40} />
                </div>

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h2 style={{ marginBottom: '0.8rem', fontSize: '1.8rem', color: 'var(--text)', letterSpacing: '1px' }}>{skill.title}</h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.1rem' }}>{skill.details}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Developer Learning Roadmap */}
      <div className="glass-panel" style={{
        marginTop: '6rem',
        padding: '3rem',
        background: 'linear-gradient(135deg, rgba(var(--accent-rgb), 0.1), rgba(0,0,0,0.8))',
        borderRadius: '24px',
        border: '1px solid rgba(var(--accent-rgb), 0.3)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 25px 60px rgba(var(--accent-rgb), 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)';
      }}>
        <div style={{
          position: 'absolute', right: '-10%', top: '-20%', width: '300px', height: '300px', background: 'var(--accent)', opacity: 0.15, filter: 'blur(80px)', borderRadius: '50%'
        }}></div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', border: '1px solid rgba(var(--accent-rgb), 0.3)', boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.2)' }}>
              <LayoutTemplate size={48} color="var(--accent)" />
            </div>
          </div>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text)', marginBottom: '1rem', letterSpacing: '2px' }}>
            THE DEVELOPER ROADMAP
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            Looking to break into Full-Stack or AI Engineering? Start by mastering the foundations of HTML/CSS, conquer logic with JavaScript, handle data using MongoDB/MySQL, build dynamic UIs with React, and finally integrate LLMs through Python or Node.js. The journey from static pages to intelligent applications starts here.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem', textAlign: 'left' }}>
            <a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', textDecoration: 'none', transition: 'transform 0.3s', border: '1px solid var(--border)' }} onMouseEnter={e => {e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--text)';}} onMouseLeave={e => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)';}}>
               <h3 style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>1. Foundations</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>Master HTML, CSS, and core UI design. <br/><span style={{ color: 'var(--accent)', fontSize: '0.8rem', marginTop: '10px', display: 'inline-block' }}>View MDN Web Docs ↗</span></p>
            </a>
            <a href="https://javascript.info/" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', textDecoration: 'none', transition: 'transform 0.3s', border: '1px solid var(--border)' }} onMouseEnter={e => {e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--text)';}} onMouseLeave={e => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)';}}>
               <h3 style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>2. Core Logic</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>Deep dive into JavaScript, ES6+, & Python. <br/><span style={{ color: 'var(--accent)', fontSize: '0.8rem', marginTop: '10px', display: 'inline-block' }}>View javascript.info ↗</span></p>
            </a>
            <a href="https://fullstackopen.com/en/" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', textDecoration: 'none', border: '1px solid rgba(var(--accent2-rgb), 0.3)', transition: 'transform 0.3s' }} onMouseEnter={e => {e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--accent2)';}} onMouseLeave={e => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(var(--accent2-rgb), 0.3)';}}>
               <h3 style={{ color: 'var(--accent2)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>3. The MERN Stack</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>React, Node, Express, MongoDB. <br/><span style={{ color: 'var(--accent2)', fontSize: '0.8rem', marginTop: '10px', display: 'inline-block' }}>View Full Stack Open ↗</span></p>
            </a>
            <a href="https://platform.openai.com/docs/" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', textDecoration: 'none', border: '1px solid var(--accent)', background: 'rgba(var(--accent-rgb), 0.1)', transition: 'transform 0.3s' }} onMouseEnter={e => {e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(var(--accent-rgb),0.3)';}} onMouseLeave={e => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none';}}>
               <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>4. AI Engineering</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>Integrate LLMs and prompt engineering. <br/><span style={{ color: 'var(--accent)', fontSize: '0.8rem', marginTop: '10px', display: 'inline-block' }}>View OpenAI Docs ↗</span></p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
