const GameStat = ({ score, moves, resetGame }) => {
    return (
        <div className='stats-panel'>
            <h1 className='title'>Memory Game</h1>
            <div className='stats-row'>
                <div className="stat-item">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Score</span>
                    <span className="stat-value">{score}</span>
                </div>
                <div className="stat-item">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Moves</span>
                    <span className="stat-value">{moves}</span>
                </div>
            </div>
            <button className='btn-primary' onClick={resetGame}>New Game 🔄</button>
        </div>
    )
}

export default GameStat