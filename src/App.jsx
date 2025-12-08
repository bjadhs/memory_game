import GameStat from './components/GameStat';
import GameBoard from './components/GameBoard';

const App = () => {
  return (
    <div className='flex flex-col items-center gap-2 h-screen'>
      <h1 className='text-2xl font-bold'>Memory Game</h1>
      <GameStat />
      <GameBoard />
    </div>
  )
}

export default App