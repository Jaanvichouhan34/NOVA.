import React, { useState, useRef, useEffect } from 'react';
import { Music as MusicIcon, Play, Pause, SkipForward, SkipBack, Volume2, Disc3 } from 'lucide-react';

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // You can expand this array with your own .mp3 files
  const playlist = [
    { id: 1, title: 'Session 01: Focus', artist: 'Jaanvi', duration: '3:45', file: '/music.mp3' },
    { id: 2, title: 'Midnight Compile', artist: 'Code Vibe', duration: '2:30', file: '/music.mp3' },
    { id: 3, title: 'Server Room Chill', artist: 'Lofi Beats', duration: '4:15', file: '/music.mp3' },
    { id: 4, title: 'Neon Algorithms', artist: 'Synthwave', duration: '3:10', file: '/music.mp3' },
    { id: 5, title: 'Deploy Friday', artist: 'Danger Zone', duration: '2:55', file: '/music.mp3' }
  ];

  const currentTrack = playlist[currentTrackIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 < 0 ? playlist.length - 1 : prev - 1));
  };

  const handleTimeUpdate = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    if (duration) {
      setProgress((currentTime / duration) * 100);
    }
  };
  
  const handleProgressClick = (e) => {
    const bar = e.currentTarget;
    const clickX = e.clientX - bar.getBoundingClientRect().left;
    const width = bar.getBoundingClientRect().width;
    const newProgress = (clickX / width) * 100;
    setProgress(newProgress);
    audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
  };

  return (
    <div style={{ padding: '2rem 5%', minHeight: 'calc(100vh - 150px)', paddingBottom: '150px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '4rem', color: 'var(--accent)', textShadow: '0 0 40px rgba(var(--accent-rgb), 0.7)', letterSpacing: '5px' }}>
          <MusicIcon size={48} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '15px' }} />
          SOUNDTRACK
        </h1>
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>Beats to code and live by.</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start' }}>
        
        {/* Audio Player Core Engine */}
        <audio 
          ref={audioRef} 
          src={currentTrack.file} 
          onTimeUpdate={handleTimeUpdate}
          onEnded={nextTrack}
        />

        {/* Player UI */}
        <div style={{ flex: '1 1 350px' }}>
          <div className="glass-panel" style={{ 
            padding: '3rem 2rem', 
            borderRadius: '24px', 
            background: 'linear-gradient(145deg, rgba(var(--card), 0.7), rgba(0,0,0,0.8))',
            border: '1px solid rgba(var(--accent-rgb), 0.3)',
            boxShadow: isPlaying ? '0 15px 50px rgba(var(--accent-rgb), 0.2)' : '0 10px 30px rgba(0,0,0,0.5)',
            textAlign: 'center',
            transition: 'all 0.5s ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {isPlaying && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--accent)', boxShadow: '0 0 20px var(--accent)', animation: 'pulse 2s infinite' }}></div>
            )}
            
            {/* Spinning Record Art */}
            <div style={{ 
              width: '200px', height: '200px', borderRadius: '50%', margin: '0 auto 2rem',
              background: 'radial-gradient(circle, rgba(var(--card), 1) 0%, rgba(var(--accent-rgb), 0.2) 100%)',
              border: '4px solid var(--accent)',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              boxShadow: isPlaying ? '0 0 50px rgba(var(--accent-rgb), 0.4)' : 'none',
              animation: isPlaying ? 'spin 8s linear infinite' : 'none',
              transition: 'box-shadow 0.3s'
            }}>
               <Disc3 size={100} color="var(--accent)" />
            </div>

            <h2 style={{ fontSize: '1.8rem', color: 'var(--text)', marginBottom: '0.5rem' }}>{currentTrack.title}</h2>
            <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', marginBottom: '2rem' }}>{currentTrack.artist}</p>

            {/* Progress Bar */}
            <div style={{ marginBottom: '2rem', cursor: 'pointer' }} onClick={handleProgressClick}>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ 
                  width: `${progress}%`, height: '100%', background: 'var(--accent)', 
                  boxShadow: '0 0 10px var(--accent)', transition: 'width 0.1s linear' 
                }}></div>
              </div>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
              <button onClick={prevTrack} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='var(--accent)'} onMouseLeave={e => e.target.style.color='var(--text-muted)'}>
                <SkipBack size={28} />
              </button>
              <button 
                onClick={togglePlay} 
                style={{ 
                  background: 'var(--accent)', color: '#000', border: 'none', 
                  borderRadius: '50%', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                  cursor: 'pointer', boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.5)', transition: 'transform 0.1s'
                }}
                onMouseDown={e => e.currentTarget.style.transform='scale(0.9)'}
                onMouseUp={e => e.currentTarget.style.transform='scale(1)'}
              >
                {isPlaying ? <Pause size={32} /> : <Play size={32} style={{ marginLeft: '4px' }} />}
              </button>
              <button onClick={nextTrack} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='var(--accent)'} onMouseLeave={e => e.target.style.color='var(--text-muted)'}>
                <SkipForward size={28} />
              </button>
            </div>
          </div>
        </div>

        {/* Playlist Interface */}
        <div style={{ flex: '1 1 400px' }}>
          <h3 style={{ fontSize: '1.4rem', borderBottom: '1px solid rgba(var(--accent-rgb), 0.2)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Volume2 color="var(--text-muted)" /> Currently in Rotation
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {playlist.map((track, i) => (
              <div key={track.id} 
                style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1.2rem', borderRadius: '12px', cursor: 'pointer',
                  background: currentTrackIndex === i ? 'rgba(var(--accent-rgb), 0.15)' : 'rgba(var(--card), 0.4)',
                  border: `1px solid ${currentTrackIndex === i ? 'var(--accent)' : 'transparent'}`,
                  transition: 'all 0.2s'
                }}
                onClick={() => {
                  setCurrentTrackIndex(i);
                  setIsPlaying(true);
                }}
                onMouseEnter={e => e.currentTarget.style.background = currentTrackIndex === i ? 'rgba(var(--accent-rgb), 0.15)' : 'rgba(var(--card), 0.8)'}
                onMouseLeave={e => e.currentTarget.style.background = currentTrackIndex === i ? 'rgba(var(--accent-rgb), 0.15)' : 'rgba(var(--card), 0.4)'}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ color: currentTrackIndex === i ? 'var(--accent)' : 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    0{track.id}
                  </span>
                  <div>
                    <h4 style={{ color: currentTrackIndex === i ? 'var(--accent)' : 'var(--text)', marginBottom: '4px' }}>{track.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{track.artist}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {currentTrackIndex === i && isPlaying && (
                     <div style={{ display: 'flex', gap: '3px', height: '15px', alignItems: 'flex-end' }}>
                       <div style={{ width: '3px', background: 'var(--accent)', animation: 'equalizer 0.8s ease-in-out infinite' }}></div>
                       <div style={{ width: '3px', background: 'var(--accent)', animation: 'equalizer 0.5s ease-in-out infinite' }}></div>
                       <div style={{ width: '3px', background: 'var(--accent)', animation: 'equalizer 1.2s ease-in-out infinite' }}></div>
                     </div>
                  )}
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                    {track.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes equalizer {
          0% { height: 2px; }
          50% { height: 15px; }
          100% { height: 2px; }
        }
      `}</style>
    </div>
  );
}
