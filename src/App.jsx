import { useState, useEffect } from 'react';
import GameStat from './components/GameStat';
import GameBoard from './components/GameBoard';

const fruits = ["🍎", "🍊", "🍇", "🍐", "🍌", "🍉", "🍓", "🍒", "🍎", "🍊", "🍇", "🍐", "🍌", "🍉", "🍓", "🍒"];


const App = () => {
  const [score, setScore] = useState(0);
  const [movies, setMoves] = useState(0);
  const [fruitsArray, setFruitsArray] = useState([]);

  // Shuffle fruts array
  const shuffledFruits = (fruits) => {
    for (let i = fruits.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [fruits[i], fruits[j]] = [fruits[j], fruits[i]];
    }
    return fruits;
  }

  const startGame = () => {
    const fruitsArray = shuffledFruits(fruits);
    console.log(fruitsArray);
    setFruitsArray(fruitsArray);
  }

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className='flex flex-col items-center gap-2 h-screen bg-slate-200 p-2'>
      <GameStat score={score} moves={movies} resetGame={startGame} />
      <GameBoard fruitsArray={fruitsArray} />
    </div>
  )
}

export default App