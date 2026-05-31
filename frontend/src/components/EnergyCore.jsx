import React from 'react';
import './EnergyCore.css';

export default function EnergyCore() {
  return (
    <div className="energy-scene">
      <div className="core-wrap">
        <div className="core" />
        <div className="ring ring1" />
        <div className="ring ring2" />
        <div className="ring ring3" />
        <div className="ring ring4" />

        {[
          { size: 5, color: '#FF8C42', dy: -120, dx: 60, dur: 2.2, del: 0 },
          { size: 4, color: '#FFD580', dy: 100, dx: -80, dur: 2.8, del: 0.5 },
          { size: 6, color: '#FF6B1A', dy: -80, dx: -100, dur: 3.1, del: 1 },
          { size: 3, color: '#FFB347', dy: 130, dx: 50, dur: 2.5, del: 1.5 },
          { size: 5, color: '#C0390A', dy: 60, dx: 120, dur: 3.4, del: 0.3 },
          { size: 4, color: '#FF8C42', dy: -110, dx: -40, dur: 2.0, del: 0.9 },
        ].map((p, i) => (
          <div key={i} className="particle" style={{
            width: p.size, height: p.size,
            background: p.color,
            '--dy': `${p.dy}px`, '--dx': `${p.dx}px`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.del}s`
          }} />
        ))}

        {['MERN Stack','AI Builder','React.js','Node.js','Full-Stack','AI Engineer']
          .map((tag, i) => (
            <div key={i} className={`tag tag${i + 1}`}>{tag}</div>
        ))}
      </div>
    </div>
  );
}
