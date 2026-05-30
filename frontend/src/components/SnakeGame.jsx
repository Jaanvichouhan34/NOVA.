import React, { useState, useEffect, useCallback } from 'react';
import { Play, RotateCcw } from 'lucide-react';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [[10, 10]];
const INITIAL_FOOD = [5, 5];
const INITIAL_DIRECTION = [0, -1];
const SPEED = 120;

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [score, setScore] = useState(0);

  const moveSnake = useCallback(() => {
    if (isGameOver || isPaused) return;

    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = newSnake[0];
      const newHead = [head[0] + direction[0], head[1] + direction[1]];

      // Wall collision
      if (newHead[0] < 0 || newHead[0] >= GRID_SIZE || newHead[1] < 0 || newHead[1] >= GRID_SIZE) {
        setIsGameOver(true);
        return prevSnake;
      }

      // Self collision
      for (const segment of newSnake) {
        if (segment[0] === newHead[0] && segment[1] === newHead[1]) {
           setIsGameOver(true);
           return prevSnake;
        }
      }

      newSnake.unshift(newHead);

      // Food collision
      if (newHead[0] === food[0] && newHead[1] === food[1]) {
        setScore(s => s + 10);
        let newFood;
        while (true) {
          newFood = [Math.floor(Math.random() * GRID_SIZE), Math.floor(Math.random() * GRID_SIZE)];
          let conflict = false;
          for (const segment of newSnake) {
             if (segment[0] === newFood[0] && segment[1] === newFood[1]) conflict = true;
          }
          if (!conflict) break;
        }
        setFood(newFood);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, isGameOver, isPaused]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
      
      switch (e.key) {
        case 'ArrowUp': if (direction[1] !== 1) setDirection([0, -1]); break;
        case 'ArrowDown': if (direction[1] !== -1) setDirection([0, 1]); break;
        case 'ArrowLeft': if (direction[0] !== 1) setDirection([-1, 0]); break;
        case 'ArrowRight': if (direction[0] !== -1) setDirection([1, 0]); break;
        case ' ': setIsPaused(p => !p); break;
        default: break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    const interval = setInterval(moveSnake, SPEED);
    return () => clearInterval(interval);
  }, [moveSnake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
    setIsPaused(false);
    setScore(0);
  };

  return (
    <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
           Score: <span style={{ color: 'var(--accent)' }}>{score}</span>
        </div>
        <div>
          {isGameOver ? (
            <button onClick={resetGame} className="btn-secondary" style={{ color: 'var(--accent3)', borderColor: 'var(--accent3)' }}>
               <RotateCcw size={18} /> Game Over! Retry?
            </button>
          ) : (
            <button onClick={() => isPaused ? (score === 0 && snake.length === 1 && !isGameOver ? resetGame() : setIsPaused(false)) : setIsPaused(true)} className="btn-secondary">
               <Play size={18} /> {isPaused ? 'Start / Resume' : 'Pause'}
            </button>
          )}
        </div>
      </div>

      <div style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        background: 'rgba(0,0,0,0.5)',
        border: '2px solid var(--border)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
      }}>
        {snake.map((segment, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${(segment[0] / GRID_SIZE) * 100}%`,
            top: `${(segment[1] / GRID_SIZE) * 100}%`,
            width: `${100 / GRID_SIZE}%`,
            height: `${100 / GRID_SIZE}%`,
            background: i === 0 ? 'var(--accent)' : 'rgba(var(--accent-rgb), 0.7)',
            borderRadius: i === 0 ? '4px' : '2px',
            boxShadow: i === 0 ? '0 0 10px var(--accent)' : 'none'
          }} />
        ))}
        <div style={{
          position: 'absolute',
          left: `${(food[0] / GRID_SIZE) * 100}%`,
          top: `${(food[1] / GRID_SIZE) * 100}%`,
          width: `${100 / GRID_SIZE}%`,
          height: `${100 / GRID_SIZE}%`,
          background: 'var(--accent3)',
          borderRadius: '50%',
          boxShadow: '0 0 10px var(--accent3)'
        }} />
      </div>
      <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>Use Arrow Keys to move. Space to Pause.</p>
    </div>
  );
}
