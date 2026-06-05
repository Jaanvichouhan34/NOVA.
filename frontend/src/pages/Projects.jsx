import React, { useState } from 'react';
import { ExternalLink, Code2, FolderGit2, X } from 'lucide-react';

export default function Projects({ hireMeMode }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const liveRepos = [
    {
      path: "Jaanvichouhan34/VoiceDoc",
      liveLink: "https://voice-doc-three.vercel.app/",
      desc: "A production-level AI medical scribe supporting bilingual (Hindi-English) code-switching. Real-time voice capture, structured SOAP notes, EHR dashboard with health-trend charts, and one-click PDF prescriptions.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
      tags: ['React', 'Node.js', 'MongoDB', 'Groq Llama 3', 'Tailwind']
    },
    { 
      path: "Jaanvichouhan34/ElevateU", 
      liveLink: "https://elevate-u-rose.vercel.app/",
      desc: "An intelligent platform leveraging OpenAI APIs to provide mock interviews, outfit scanning, and AI-driven skill evaluation.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80", 
      tags: ['React', 'Node.js', 'AI'] 
    },
    { 
      path: "Jaanvichouhan34/CJ", 
      liveLink: "https://cj-puce.vercel.app/",
      desc: "A futuristic AI desktop assistant with persistent memory, voice control, system control, and smart reminders powered by Groq API (Llama 3).",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80", 
      tags: ['AI', 'Python', 'React', 'Groq API'] 
    },
    { 
      path: "Jaanvichouhan34/SkillMirror", 
      liveLink: "https://skill-mirror-gray.vercel.app/",
      desc: "An adaptive quiz engine covering 6 CS domains with 600+ questions, gamification with badges, XP points, streaks, and leaderboards.",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80", 
      tags: ['MERN', 'Tailwind', 'Flask'] 
    },
    { 
      path: "Jaanvichouhan34/Jeenie-Visualizer", 
      liveLink: "https://jeenie-visualizer-n81f.vercel.app/",
      desc: "An interactive data visualizer bridging complex datasets into user-friendly charts and visual lore.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80", 
      tags: ['React', 'Vite'] 
    },
    { 
      path: "Jaanvichouhan34/InterviewAI", 
      liveLink: "https://ai-interview-coach-steel-three.vercel.app/",
      desc: "An AI-powered interview coach integrating Google Gemini to simulate tough HR and technical interview questions.",
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80", 
      tags: ['Gemini', 'Express'] 
    },
    {
      path: "Jaanvichouhan34/PlaceUp",
      liveLink: "https://place-up-tau.vercel.app/",
      desc: "A personalized, AI-driven placement preparation platform for B.Tech students. Uses Groq API (Llama-3) to craft custom daily study plans with AI rescheduling, progress analytics, and gamification.",
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80",
      tags: ['React', 'Vite', 'Groq API', 'Recharts', 'CSS']
    },
    { 
      path: "Jaanvichouhan34/AttendAI", 
      liveLink: "https://attend-ai-lac.vercel.app/",
      desc: "A smart attendance tracking system utilizing live face matching algorithms and real-time database syncing.",
      img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&q=80", 
      tags: ['Node.js', 'React', 'MongoDB'] 
    },
    { 
      path: "Jaanvichouhan34/AuraCalc", 
      liveLink: "https://aura-calc-20.vercel.app/",
      desc: "A fun and interactive web application to calculate and visualize your personal 'Aura' using pure JS/CSS.",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80", 
      tags: ['JavaScript', 'CSS'] 
    },
    { 
      path: "Jaanvichouhan34/AI-Virtual-Keyboard", 
      liveLink: null,
      desc: "An advanced computer vision application using OpenCV to map hand gestures into a functional virtual keyboard.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80", 
      tags: ['OpenCV', 'Python'] 
    },
    { 
      path: "Jaanvichouhan34/Sign-Language-Translator", 
      liveLink: null,
      desc: "A real-time machine learning model built to detect hand motion and translate sign language into text.",
      img: "https://images.unsplash.com/photo-1534612368275-e4cfd0f21b2d?w=400&q=80", 
      tags: ['Machine Learning', 'Python', 'OpenCV'] 
    },
    {
      path: "Jaanvichouhan34/kinetic-dash",
      liveLink: "https://kinetic-dash.vercel.app",
      desc: "A high-fidelity, interactive system dashboard that blends physics-based UI, real-time hardware monitoring, and sensory-driven design.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion']
    },
    {
      path: "Jaanvichouhan34/portfolio",
      liveLink: "https://portfolio-seven-blue-4jrm6eqqd4.vercel.app",
      desc: "An immersive, high-performance developer portfolio featuring a 3D interactive robot, sleek bento-grid project showcases, and a full-stack contact system.",
      img: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&q=80",
      tags: ['Next.js', 'React', 'Three.js', 'Tailwind', 'Supabase']
    },
    { 
      path: "Jaanvichouhan34/amazon", 
      liveLink: "https://amazon-flax-eight.vercel.app",
      desc: "A simple and responsive clone of the Amazon homepage built using HTML and CSS.",
      img: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400&q=80", 
      tags: ['HTML', 'CSS'] 
    },
    { 
      path: "Jaanvichouhan34/facebook-login-page", 
      liveLink: "https://facebook-login-page-ruby-sigma.vercel.app",
      desc: "A clean and responsive Facebook login page clone built using HTML and CSS.",
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80", 
      tags: ['HTML', 'CSS'] 
    }
  ];

  const learningRepos = [
    { path: "Jaanvichouhan34/javascript-zero-to-advanced", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { path: "Jaanvichouhan34/python-zero-to-advanced", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { path: "Jaanvichouhan34/Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { path: "Jaanvichouhan34/html-practice", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
  ];

  if (hireMeMode) {
    return (
      <div style={{ padding: '2rem 5%', minHeight: 'calc(100vh - 150px)', paddingBottom: '150px', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3.5rem', color: 'var(--accent)' }}>
            <FolderGit2 size={48} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '15px' }} />
            FEATURED WORK
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>High-impact platforms and architecture.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {liveRepos.map((repo, i) => {
            const repoName = repo.path.split('/')[1];
            return (
              <div 
                key={i} 
                className="glass-panel" 
                style={{ 
                  borderRadius:'20px', 
                  overflow:'hidden', 
                  borderTop:'2px solid var(--accent)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onClick={() => setSelectedProject(repo)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(var(--accent-rgb), 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                 <div style={{ width:'100%', height:'200px', backgroundImage:`url(${repo.img})`, backgroundSize:'cover', backgroundPosition:'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', opacity: 0, transition: 'opacity 0.3s' }}
                         onMouseEnter={e => e.currentTarget.style.opacity = 1}
                         onMouseLeave={e => e.currentTarget.style.opacity = 0}
                    >
                      <div style={{ position: 'absolute', bottom: '15px', right: '15px', color: '#fff', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                         <ExternalLink size={16} /> View Details
                      </div>
                    </div>
                 </div>
                 <div style={{ padding:'1.5rem' }}>
                   <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem' }}>
                     <h3 style={{ fontSize:'1.2rem', color:'var(--text)' }}>{repoName.replace(/-/g, ' ')}</h3>
                     <Code2 size={20} color="var(--accent)" />
                   </div>
                   <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginBottom:'1.5rem' }}>
                     {repo.tags.map(t=>(
                       <span key={t} style={{ padding:'4px 10px', background:'rgba(var(--accent-rgb), 0.1)', color:'var(--accent)', borderRadius:'20px', fontSize:'0.8rem' }}>{t}</span>
                     ))}
                   </div>
                 </div>
              </div>
            );
          })}
        </div>

        {/* Modal Overlay */}
        {selectedProject && (
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}
          onClick={() => setSelectedProject(null)}
          >
            <div 
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '800px',
                maxHeight: '90vh',
                overflowY: 'auto',
                borderRadius: '24px',
                border: '1px solid var(--accent)',
                animation: 'fadeInUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
                position: 'relative'
              }}
              onClick={e => e.stopPropagation()} /* Prevent closing when clicking inside modal */
            >
              <button 
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', 
                  border: 'none', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', 
                  display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 10
                }}
              >
                <X size={24} />
              </button>
              
              <div style={{ width:'100%', height:'350px', backgroundImage:`url(${selectedProject.img})`, backgroundSize:'cover', backgroundPosition:'center' }}></div>
              
              <div style={{ padding: '2.5rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>
                  {selectedProject.path.split('/')[1].replace(/-/g, ' ')}
                </h2>
                
                <div style={{ display:'flex', gap:'0.8rem', flexWrap:'wrap', marginBottom:'2rem' }}>
                   {selectedProject.tags.map(t=>(
                     <span key={t} style={{ padding:'6px 14px', background:'rgba(var(--accent-rgb), 0.1)', color:'var(--accent)', borderRadius:'20px', fontSize: '0.9rem', border: '1px solid rgba(var(--accent-rgb), 0.2)' }}>{t}</span>
                   ))}
                </div>

                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                  {selectedProject.desc}
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  {selectedProject.liveLink && (
                    <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', padding: '1rem 2rem' }}>
                      <ExternalLink size={20} /> Live Preview
                    </a>
                  )}
                  <a href={`https://github.com/${selectedProject.path}`} target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', padding: '1rem 2rem' }}>
                    <Code2 size={20} /> View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    );
  }

  return (
    <div style={{ padding: '2rem 5%', minHeight: 'calc(100vh - 150px)', paddingBottom: '150px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--accent)', textShadow: '0 0 20px rgba(var(--accent-rgb), 0.5)' }}>
          <FolderGit2 size={48} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '15px' }} />
          LEARNING LABS
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Repositories where I grind, break things, and learn the raw syntax.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {learningRepos.map((repo, i) => {
          const repoPath = repo.path;
          const repoName = repoPath.split('/')[1];
          const owner = repoPath.split('/')[0];
          
          return (
            <a 
              key={i}
              href={`https://github.com/${repoPath}`}
              target="_blank"
              rel="noreferrer"
              className="glass-panel"
              style={{
                padding: '2.5rem 2rem',
                borderRadius: '24px',
                textDecoration: 'none',
                color: 'var(--text)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                border: '1px solid rgba(var(--accent-rgb), 0.1)',
                background: 'linear-gradient(145deg, color-mix(in srgb, var(--card) 90%, transparent) 0%, color-mix(in srgb, var(--surface) 50%, transparent) 100%)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(var(--accent-rgb), 0.15), inset 0 0 20px rgba(var(--accent-rgb), 0.05)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = 'rgba(var(--accent-rgb), 0.1)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <div style={{ padding: '15px', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '58px', height: '58px' }}>
                   <img src={repo.logo} alt={repoName} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                </div>
                <ExternalLink size={24} color="var(--text-muted)" style={{ transition: 'color 0.3s' }} className="hover-target" />
              </div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.3rem', wordBreak: 'break-word', color: 'var(--text)', letterSpacing: '0.5px' }}>
                  {repoName.replace(/-/g, ' ').toUpperCase()}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                  @{owner}
                </p>
              </div>

              {/* Decorative Background Element */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'var(--accent)',
                opacity: 0.15,
                filter: 'blur(40px)',
                zIndex: 1,
                borderRadius: '50%'
              }}></div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
