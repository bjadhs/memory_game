
const GameCompleteModel = ({ startGame, score, moves, highestScore }) => {

    return (
        <div className="game-overlay">
            <div className="game-model">

                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                    Congratulations!
                </h1>
                <div className="text-4xl animate-bounce delay-200">🎉</div>

                <div className="text-center space-y-2">
                    <p className="text-gray-600 text-lg">You completed the game!</p>
                    <div className="flex gap-8 justify-center mt-4">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-gray-800">{score}</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wide">Score</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-gray-800">{moves}</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wide">Moves</span>
                        </div>
                    </div>
                </div>
                 <p className="text-gray-600 text-md">Your highest score is {highestScore}</p>
                <p className="text-gray-600 text-md">You completed the game!</p>

                <button
                    className="mt-6 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
                    onClick={startGame}
                >
                    Play Again
                </button>
            </div>
        </div>
    )
}

export default GameCompleteModel