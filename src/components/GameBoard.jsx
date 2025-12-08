
const GameBoard = ({ fruitsArray }) => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                {fruitsArray.map((fruit, index) => (
                    <div key={index} className="bg-blue-400 p-4 rounded-md">
                        {fruit}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GameBoard