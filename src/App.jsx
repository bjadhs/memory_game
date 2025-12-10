
import { GameStat, GameCompleteModel, GameBoard } from './components';
import useMemoryGameLogic from './hooks/useMemoryGameLogic';

const fruits = ["🍎", "🍊", "🍇", "🍐", "🍌", "🍉", "🍓", "🍒", "🍎", "🍊", "🍇", "🍐", "🍌", "🍉", "🍓", "🍒"];


const App = () => {

  const {
    score,
    moves,
    fruitsArray,
    isGameOver,
    handleClick,
    startGame
  } = useMemoryGameLogic(fruits);



  return (
    <div className='game-container'>
      <GameStat score={score} moves={moves} resetGame={startGame} />
      {isGameOver && <GameCompleteModel startGame={startGame} score={score} moves={moves}/>}
      <GameBoard fruitsArray={fruitsArray} handleClick={handleClick} />
    </div>
  )
}

export default App