import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';

export default function Album() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/seed/${i + 1337}/800/${i % 2 === 0 ? '1200' : '800'}`,
    caption: `Moment capturing the essence of time. #${i + 1}`
  }));

  return (
    <div style={{ padding: '2rem 5%', minHeight: 'calc(100vh - 150px)', paddingBottom: '150px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--accent)', textShadow: '0 0 20px rgba(var(--accent-rgb), 0.4)' }}>
          <Camera size={48} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '15px' }} />
          LIFE IN FRAMES
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Moments, hackathons, and memories.</p>
      </div>

      {/* Masonry Grid */}
      <div style={{
        columns: '3 250px',
        columnGap: '1.5rem',
        width: '100%',
        margin: '0 auto',
        maxWidth: '1200px'
      }}>
        {images.map(img => (
          <div 
            key={img.id} 
            className="masonry-item"
            style={{ 
              marginBottom: '1.5rem', 
              breakInside: 'avoid',
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'zoom-in',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
            onClick={() => setSelectedImg(img)}
          >
            <img 
              src={img.src} 
              alt={img.caption} 
              style={{ width: '100%', display: 'block', transition: 'transform 0.5s', filter: 'grayscale(30%)' }}
              onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.filter = 'grayscale(0%)'; }}
              onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.filter = 'grayscale(30%)'; }}
            />
            <div className="img-overlay" style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '2rem 1.5rem 1.5rem',
              background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
              color: '#fff',
              opacity: 0,
              transition: 'opacity 0.3s',
              pointerEvents: 'none'
            }}>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImg && (
        <div 
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(10px)',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }} onClick={e => e.stopPropagation()}>
             <img 
              src={selectedImg.src} 
              alt={selectedImg.caption} 
              style={{ maxWidth: '100%', maxHeight: '85vh', borderRadius: '12px', boxShadow: '0 0 50px rgba(var(--accent-rgb), 0.2)' }} 
             />
             <div style={{ position: 'absolute', bottom: '-40px', left: 0, color: '#fff', width: '100%', textAlign: 'center' }}>
               {selectedImg.caption}
             </div>
             <button 
                onClick={() => setSelectedImg(null)}
                style={{
                  position: 'absolute',
                  top: '-40px', right: 0,
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent)',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  textTransform: 'uppercase'
                }}
             >
                [ CLOSE ]
             </button>
          </div>
        </div>
      )}

      <style>{`
        .masonry-item:hover .img-overlay { opacity: 1 !important; }
      `}</style>
    </div>
  );
}
