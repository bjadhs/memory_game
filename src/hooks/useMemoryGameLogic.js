import { useState, useEffect } from "react";

const useMemoryGameLogic = (initialFruits) => {
      // Shuffle fruits array
    const shuffledFruits = (fruits) => {
        for (let i = fruits.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [fruits[i], fruits[j]] = [fruits[j], fruits[i]];
        }
        return fruits;
    }
    // Generate fruits
    const generateFruits = () =>{
        if(!initialFruits || initialFruits.length === 0) return [];
        const fruitsToShuffle = [...initialFruits];
        const fruitsBeingShuffled = shuffledFruits(fruitsToShuffle);

        return  fruitsBeingShuffled.map((fruit, index) => ({
                id: index,
                fruit,
                flipped: false,
                matched: false
            }))
        }

    const [score, setScore] = useState(0);
    const [moves, setMoves] = useState(0);
    const [fruitsArray, setFruitsArray] = useState(generateFruits);
    const [flippedFruit, setFlippedFruit] = useState([]);
    const [matchedFruit, setMatchedFruit] = useState([]);
    const [isLocked, setIsLocked] = useState(false);
    const [ highestScore, setHighestScore] = useState(localStorage.getItem("highestScore") || 0);

    const startGame = () => {
        setFruitsArray(generateFruits());
        setMoves(0);
        setScore(0);
        setFlippedFruit([]);
        setMatchedFruit([]);
    }


    const handleClick = (fruit) => {
        if (flippedFruit.length === 2
            || isLocked
            || fruit.flipped
            || fruit.matched
        ) return;
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
            const firstFruit = fruitsArray.find(f =>f.id === flippedFruit[0])

            if (firstFruit.fruit === fruit.fruit) {
                setTimeout(() => {
                    const newMatchedCount = matchedFruit.length + 2;
                    setMatchedFruit((prev) => [...prev, firstFruit.id, fruit.id])
                    setScore((prev) => prev + 1)
                    if(newMatchedCount === fruitsArray.length){
                        const finalScore = score+1;
                        localStorage.setItem("highestScore", finalScore);
                        setHighestScore(finalScore);
                    }


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
    
    const isGameOver = fruitsArray.length > 0 && matchedFruit.length === fruitsArray.length;


    return {
        score,
        moves,
        fruitsArray,
        isGameOver,
        handleClick,
        startGame,
        highestScore
    }

}

export default useMemoryGameLogic;