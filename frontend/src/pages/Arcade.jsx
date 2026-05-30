import React, { useState, Suspense } from 'react';
import { Gamepad2, ArrowLeft, Grid3x3, Activity, BrainCircuit, List, Scissors, Hash, Hammer, Timer, Keyboard, MousePointer2 } from 'lucide-react';

const TicTacToe = React.lazy(() => import('../components/games/TicTacToe'));
const Snake = React.lazy(() => import('../components/games/Snake'));
const MemoryMatch = React.lazy(() => import('../components/games/MemoryMatch'));
const RockPaperScissors = React.lazy(() => import('../components/games/RockPaperScissors'));
const Connect4 = React.lazy(() => import('../components/games/Connect4'));
const NumberGuess = React.lazy(() => import('../components/games/NumberGuess'));
const WhackAMole = React.lazy(() => import('../components/games/WhackAMole'));
const ReactionTimer = React.lazy(() => import('../components/games/ReactionTimer'));
const TypingTest = React.lazy(() => import('../components/games/TypingTest'));
const CPSTest = React.lazy(() => import('../components/games/CPSTest'));

const GAMES = [
  { id: 'tic', name: 'Tic-Tac-Toe', component: TicTacToe, icon: Grid3x3, color: 'var(--accent)' },
  { id: 'snake', name: 'Retro Snake', component: Snake, icon: Activity, color: 'var(--accent4)' },
  { id: 'memory', name: 'Memory Match', component: MemoryMatch, icon: BrainCircuit, color: 'var(--accent2)' },
  { id: 'connect4', name: 'Connect 4', component: Connect4, icon: List, color: 'var(--accent3)' },
  { id: 'rps', name: 'Rock Paper Scissors', component: RockPaperScissors, icon: Scissors, color: '#F59E0B' },
  { id: 'guess', name: 'Number Guesser', component: NumberGuess, icon: Hash, color: '#059669' },
  { id: 'mole', name: 'Whack-a-Mole', component: WhackAMole, icon: Hammer, color: '#E11D48' },
  { id: 'reaction', name: 'Reaction Timer', component: ReactionTimer, icon: Timer, color: 'var(--accent)' },
  { id: 'typing', name: 'Typing Test', component: TypingTest, icon: Keyboard, color: 'var(--accent4)' },
  { id: 'cps', name: 'Click Speed Test', component: CPSTest, icon: MousePointer2, color: 'var(--accent2)' }
];

export default function Arcade() {
  const [activeGame, setActiveGame] = useState(null);

  const CurrentGame = GAMES.find(g => g.id === activeGame)?.component;

  return (
    <div style={{ padding: '2rem 5%', minHeight: 'calc(100vh - 150px)', paddingBottom: '150px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {!activeGame ? (
        <>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3.5rem', color: 'var(--accent)', textShadow: '0 0 20px rgba(var(--accent-rgb), 0.4)' }}>
               <Gamepad2 size={48} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '15px' }} />
               THE ARCADE
            </h1>
            <p style={{ color: 'var(--text-muted)' }}>10 Classic Games. 1 Hub. Click to Play.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
            {GAMES.map(game => {
              const Icon = game.icon;
              return (
                <button 
                  key={game.id} 
                  onClick={() => setActiveGame(game.id)}
                  className="glass-panel"
                  style={{
                    padding: '2.5rem 1.5rem',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: 'var(--text)',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.2rem',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(145deg, rgba(var(--card), 0.6) 0%, rgba(0,0,0,0.5) 100%)',
                    textAlign: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                    e.currentTarget.style.borderColor = game.color;
                    e.currentTarget.style.boxShadow = `0 20px 40px ${game.color}33, inset 0 0 20px ${game.color}11`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '100px',
                    height: '100px',
                    background: game.color,
                    opacity: 0.15,
                    filter: 'blur(30px)',
                    borderRadius: '50%'
                  }}></div>
                  <Icon size={40} color={game.color} style={{ filter: `drop-shadow(0 0 10px ${game.color}80)` }} />
                  <span style={{ position: 'relative', zIndex: 2, letterSpacing: '0.5px' }}>{game.name}</span>
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button 
            onClick={() => setActiveGame(null)} 
            className="btn-secondary"
            style={{ alignSelf: 'flex-start', marginBottom: '2rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}
          >
            <ArrowLeft size={18} /> Back to Arcade
          </button>
          
          <div className="glass-panel arcade-game-wrapper" style={{ 
            '--text': '#F3F4F6',
            '--text-muted': '#9CA3AF',
            '--surface': 'rgba(255, 255, 255, 0.05)',
            '--card': 'rgba(0, 0, 0, 0.5)',
            '--border': 'rgba(255, 255, 255, 0.1)',
            color: '#F3F4F6',
            padding: '3rem', 
            borderRadius: '24px', 
            width: '100%', 
            maxWidth: '1000px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            minHeight: '600px',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 0 30px rgba(var(--accent-rgb), 0.2)'
          }}>
             <h2 style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '2rem', textShadow: '0 0 10px rgba(var(--accent-rgb), 0.5)' }}>
               {GAMES.find(g => g.id === activeGame)?.name}
             </h2>
             
             <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
               <Suspense fallback={<div style={{color:'var(--accent)', marginTop:'2rem'}}>🔌 Booting Game Module...</div>}>
                  {CurrentGame && <CurrentGame />}
               </Suspense>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
