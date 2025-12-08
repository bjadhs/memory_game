
const GameStat = ({ score, moves, resetGame }) => {
    return (
        <div className='flex flex-col items-center bg-slate-500 p-2 rounded-lg'>
            <h1 className='text-2xl font-bold'> 🎴 Memory Card Game 🎲</h1>
            <div className='flex gap-2'>
                <p>Score: {score}</p>
                <p>Moves: {moves}</p>
            </div>
            <button className='bg-blue-500 text-white p-2 rounded-lg mt-2' onClick={resetGame}>New Game</button>
        </div>
    )
}

export default GameStat