import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Briefcase, X, MessageSquare, Code, Gamepad2, BookOpen, Image as ImageIcon, Mail, PauseCircle, PlayCircle, Download } from 'lucide-react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import AskJaanviAI from './pages/AskJaanviAI';
import Arcade from './pages/Arcade';
import Learn from './pages/Learn';
import Music from './pages/Music';
import Album from './pages/Album';
import Connect from './pages/Connect';
import Certificates from './pages/Certificates';
import Badges from './pages/Badges';
import RobotAssistant from './components/RobotAssistant';
import { Home as HomeIcon, Gamepad2 as GameIcon, User, Layers, Book, Image as ImgIcon, Phone, Music as MusicIcon, Award, Shield } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [hireMeMode, setHireMeMode] = useState(localStorage.getItem('hireMeMode') === 'true');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const location = useLocation();

  // Handle Theme & Mode Persistence
  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('hireMeMode', hireMeMode);
    const body = document.body;
    
    if (theme === 'light') {
      body.classList.add('light');
    } else {
      body.classList.remove('light');
    }

    if (hireMeMode) {
      body.classList.add('hire-me');
    } else {
      body.classList.remove('hire-me');
    }
  }, [theme, hireMeMode]);

  // Handle Custom Cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Background Effects */}
      <div className="bg-effects">
        <div className="bg-grid"></div>
        {theme === 'dark' && !hireMeMode && (
          <>
            <div className="bg-blob"></div>
            <div className="bg-blob bg-blob-2"></div>
          </>
        )}
      </div>

      {/* Custom Cursor */}
      <div 
        className="custom-cursor" 
        style={{ transform: `translate(${cursorPos.x - 6}px, ${cursorPos.y - 6}px)` }} 
      />
      <div 
        className="cursor-ring" 
        style={{ transform: `translate(${cursorPos.x - 20}px, ${cursorPos.y - 20}px)` }} 
      />

      {/* Robot Assistant */}
      {!hireMeMode && <RobotAssistant />}

      {/* Hire Me Banner */}
      {hireMeMode && (
        <div className="hire-me-banner">
          🔔 You're viewing Jaanvi's Professional Profile (Recruiter Mode)
        </div>
      )}

      {/* Top Header */}
      <header style={{
        position: 'fixed',
        top: hireMeMode ? '40px' : '0',
        left: 0, right: 0,
        padding: '1.5rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        background: 'linear-gradient(to bottom, rgba(var(--bg), 0.9), transparent)',
        pointerEvents: 'none'
      }}>
        <Link to="/" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.5rem',
          color: 'var(--accent)',
          textDecoration: 'none',
          letterSpacing: '2px',
          pointerEvents: 'auto',
          textShadow: '0 0 10px rgba(var(--accent-rgb), 0.5)'
        }}>
          MINE.
        </Link>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', pointerEvents: 'auto' }}>
          <Link to="/ai" className="btn-primary" style={{ padding: '0.5rem 1rem' }}>
            <MessageSquare size={16} /> Ask AI
          </Link>
          <button 
            className="btn-secondary" 
            style={{ padding: '0.5rem', borderRadius: '50%' }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="btn-secondary" 
            style={{ 
              borderColor: hireMeMode ? 'var(--accent3)' : 'var(--border)',
              color: hireMeMode ? 'var(--accent3)' : 'var(--text)'
            }}
            onClick={() => setHireMeMode(!hireMeMode)}
          >
            {hireMeMode ? (
              <><X size={16} /> Exit Hire Me</>
            ) : (
              <><Briefcase size={16} /> Hire Me</>
            )}
          </button>
          
          {hireMeMode && (
            <a 
              href="/resume.pdf" 
              download="Jaanvi_Chouhan_Resume.pdf" 
              className="btn-primary" 
              style={{ display: 'flex', gap: '8px', alignItems: 'center', textDecoration: 'none', padding: '0.5rem 1rem' }}
            >
              <Download size={16} /> Resume
            </a>
          )}
        </div>
      </header>

      {/* Bottom Nav Dock */}
      <nav style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        gap: '0.8rem',
        padding: '0.8rem 1.5rem',
        background: 'color-mix(in srgb, var(--card) $(0.65*100)%, transparent)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid var(--border)',
        borderRadius: '30px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
      }}>
        {[
          { path: '/', label: 'Home', icon: HomeIcon, always: true },
          { path: '/about', label: hireMeMode ? 'About' : 'The Lore', icon: User, always: true },
          { path: '/projects', label: 'Work', icon: Layers, always: true },
          { path: '/arcade', label: 'Arcade', icon: GameIcon, always: false },
          { path: '/learn', label: hireMeMode ? 'Skills' : 'Learn', icon: Book, always: true },
          { path: '/certificates', label: 'Awards', icon: Award, hireMeOnly: true },
          { path: '/badges', label: 'Badges', icon: Shield, hireMeOnly: true },
          { path: '/album', label: 'Album', icon: ImgIcon, always: false },
          { path: '/music', label: 'Music', icon: MusicIcon, always: false },
          { path: '/connect', label: 'Connect', icon: Phone, always: true }
        ].filter(link => {
          if (link.hireMeOnly) return hireMeMode;
          if (!hireMeMode) return true; // Normal mode shows everything except hireMeOnly
          return link.always;           // Hire Me Mode shows only 'always' and 'hireMeOnly'
        }).map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;
          return (
            <Link 
              key={link.path}
              to={link.path} 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                padding: '0.5rem 0.8rem',
                borderRadius: '16px',
                background: isActive ? 'var(--surface)' : 'transparent',
                color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isActive ? 'inset 0 1px 0 rgba(255,255,255,0.1)' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.color = 'var(--text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.color = isActive ? 'var(--accent)' : 'var(--text-muted)';
              }}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Main Content Area */}
      <main style={{ 
        paddingTop: hireMeMode ? '120px' : '80px',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1
      }}>
        <Routes>
          <Route path="/" element={<Home hireMeMode={hireMeMode} />} />
          <Route path="/about" element={<About hireMeMode={hireMeMode} />} />
          <Route path="/projects" element={<Projects hireMeMode={hireMeMode} />} />
          <Route path="/ai" element={<AskJaanviAI />} />
          <Route path="/arcade" element={<Arcade />} />
          <Route path="/learn" element={<Learn hireMeMode={hireMeMode} />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/album" element={<Album />} />
          <Route path="/music" element={<Music />} />
          <Route path="/connect" element={<Connect hireMeMode={hireMeMode} />} />
        </Routes>
      </main>
      
      <ScrollToTop />

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid var(--border)',
        marginTop: '4rem',
        color: 'var(--text-muted)',
        fontSize: '0.85rem'
      }}>
        © 2026 Mine. — Built with ❤️ by Jaanvi Chouhan <br/>
        All rights reserved · Made in Indore, India
      </footer>
    </>
  );
}
