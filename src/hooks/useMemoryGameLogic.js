import { useState, useEffect } from "react";

const useMemoryGameLogic = (initialFruits) => {
    const [score, setScore] = useState(0);
    const [moves, setMoves] = useState(0);
    const [fruitsArray, setFruitsArray] = useState([]);
    const [flippedFruit, setFlippedFruit] = useState([]);
    const [matchedFruit, setMatchedFruit] = useState([]);
    const [isLocked, setIsLocked] = useState(false);

    // Shuffle fruits array
    const shuffledFruits = (fruits) => {
        for (let i = fruits.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [fruits[i], fruits[j]] = [fruits[j], fruits[i]];
        }
        return fruits;
    }

    const startGame = () => {
        const fruitsToShuffle = [...initialFruits];
        const fruitsBeingShuffled = shuffledFruits(fruitsToShuffle);

        const finalFruitsArray = fruitsBeingShuffled.map((fruit, index) => {
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
        if (initialFruits && initialFruits.length > 0) {
            startGame();
            console.log("Fruits Array", fruitsArray)
            console.log("Matched Fruit", matchedFruit)
            console.log("Flipped Fruit", flippedFruit)
        }
    }, []);

    const handleClick = (fruit) => {
        console.log(fruit, flippedFruit);
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

    const isGameComplete = matchedFruit.length === fruitsArray.length && fruitsArray.length != 0;

    return {
        score,
        moves,
        fruitsArray,
        isGameComplete,
        handleClick,
        startGame,

    }

}

export default useMemoryGameLogic;