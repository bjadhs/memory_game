
const GameBoard = ({ fruitsArray, handleClick }) => {
    return (
        <div className="game-board">
            {fruitsArray.map((fruit) => (
                <div key={fruit.id} className="card" onClick={() => handleClick(fruit)}>
                    {fruit.flipped ? fruit.fruit : "?"}
                </div>
            ))}
        </div>
    )
}

export default GameBoard