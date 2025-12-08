import { useState, useEffect } from 'react';
import GameStat from './components/GameStat';
import GameBoard from './components/GameBoard';

const fruits = ["🍎", "🍊", "🍇", "🍐", "🍌", "🍉", "🍓", "🍒", "🍎", "🍊", "🍇", "🍐", "🍌", "🍉", "🍓", "🍒"];


const App = () => {
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [fruitsArray, setFruitsArray] = useState([]);
  const [flippedFruit, setFlippedFruit] = useState([]);
  const [matchedFruit, setMatchedFruit] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  // Shuffle fruts array
  const shuffledFruits = (fruits) => {
    for (let i = fruits.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [fruits[i], fruits[j]] = [fruits[j], fruits[i]];
    }
    return fruits;
  }

  const startGame = () => {
    // const fruitsBeingSuffled = shuffledFruits(fruits);

    const finalFruitsArray = fruits.map((fruit, index) => {
      return {
        id: index,
        fruit,
        flipped: false,
        matched: false
      }
    })
    setFruitsArray(finalFruitsArray);
    setMoves(0);
    setScore(0);
    setFlippedFruit([]);
    setMatchedFruit([]);
  }

  useEffect(() => {
    startGame();
  }, []);

  const handleClick = (fruit) => {
    console.log(fruit, flippedFruit);
    // if (flippedFruit.length === 2) return;
    const newFruit = fruitsArray.map(f => {
      if (f.id === fruit.id) {
        return { ...f, flipped: true }
      } else {
        return f
      }
    })
    setFruitsArray(newFruit);
    setFlippedFruit((prev) => [...prev, fruit.id]);
    setMoves((prev) => prev + 1);

    // Fruit match if 2nd one is same as first
    if (flippedFruit.length === 1) {
      setIsLocked(true)
      const firstFruit = fruitsArray[flippedFruit[0]]

      if (firstFruit.fruit === fruit.fruit) {
        setTimeout(() => {
          setMatchedFruit((prev) => [...prev, firstFruit.id, fruit.id])
          setScore((prev) => prev + 1)
          setFruitsArray((prev) => prev.map(f => {
            if (f.id === fruit.id || f.id === firstFruit.id) {
              return { ...f, matched: true }
            } else {
              return f
            }
          }))
          setFlippedFruit([])
          setIsLocked(false)
        }, 500)

      } else {
        setTimeout(() => {
          const flipTheFruit = fruitsArray.map(f => {
            if (f.id === fruit.id || f.id === firstFruit.id) {
              return { ...f, flipped: false }
            } else {
              return f
            }
          })
          setFruitsArray(flipTheFruit)
          setFlippedFruit([])
          setIsLocked(false)
        }, 1000)
      }
    }
  }

  const isGameComplete = matchedFruit.length === fruitsArray.length;

  return (
    <div className='game-container'>
      <GameStat score={score} moves={moves} resetGame={startGame} />
      {isGameComplete && <div className="game-over">
        <h1 className="text-2xl font-bold">Game Over</h1>
        <p className="text-lg">You matched all the fruits!</p>
        <button className="btn-primary" onClick={startGame}>Play Again</button>
      </div>}
      <GameBoard fruitsArray={fruitsArray} handleClick={handleClick} />
    </div>
  )
}

export default App