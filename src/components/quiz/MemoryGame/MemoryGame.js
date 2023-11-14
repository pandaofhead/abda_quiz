import "./MemoryGame.css";
import React, { useState, useCallback, useRef, useEffect } from "react";

const emojis = [
  "🎸",
  "🪇",
  "🎺",
  "🎻",
  "🎹",
  "🎷",
  "🥁",
  "🪗",
  "🪘",
  "🪈",
  "🪕",
  "🧑🏾‍🎤",
  "👩🏻‍🎤",
  "👨‍🎤",
]; // 14 emojis --> maximum 28 cards

// Fisher-Yates shuffle algorithm
function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateCards(totalCount, matchCount) {
  const numGroups = totalCount / matchCount;
  if (numGroups > emojis.length) {
    throw new Error("Too many cards");
  }

  const emojiList = emojis.slice(0, numGroups);
  const cards = Array.from({ length: numGroups }, () => null)
    .map((_, idx) => idx)
    .map((idx) =>
      Array.from(
        {
          length: matchCount,
        },
        () => emojiList[idx]
      )
    )
    .flat();

  shuffle(cards);
  return cards;
}

// Main component
const MemoryGame = () => {
  // set game option
  const [gameOption, setGameOption] = useState("easy");
  const [cols, rows] =
    gameOption === "easy" ? [4, 4] : gameOption === "medium" ? [5, 4] : [7, 4];
  const matchCount = 2;
  const delay = 2000;
  const totalCount = cols * rows;

  // set game state
  const [cards, setCards] = useState(generateCards(totalCount, matchCount));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState(new Set());
  const waitTimer = useRef(null);


  const [gameComplete, setGameComplete] = useState(false);

  // init game while total count, match count change
  const resetGame = useCallback(() => {
    waitTimer.current = null;
    setCards(generateCards(totalCount, matchCount));
    setFlipped([]);
    setMatched(new Set());
    setGameComplete(false);
  }, [totalCount, matchCount]);
  // reset game if change cols, rows, matchCount
  useEffect(() => {
    resetGame();
  }, [cols, rows, matchCount, resetGame]);

  if (matchCount < 2) {
    throw new Error("matchCount must be at least 2");
  }

  if (totalCount % matchCount !== 0) {
    throw new Error("totalCount must be a multiple of matchCount");
  }

  function onFlip(index) {
    let currentFlipped = flipped;

    if (waitTimer.current !== null) {
      clearTimeout(waitTimer.current);
      waitTimer.current = null;
      currentFlipped = [];
    }
    const newFlipped = [...currentFlipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length < matchCount) {
      return;
    }

    const allFlippedMatch = newFlipped.every(
      (i) => cards[newFlipped[0]] === cards[i]
    );

    if (allFlippedMatch) {
      const newMatchedSet = new Set(matched);
      newMatchedSet.add(cards[newFlipped[0]]);
      setMatched(newMatchedSet);
      setFlipped([]);

      if (newMatchedSet.size * matchCount === totalCount) {
        setGameComplete(true);
      }

      return;
    }

    const timer = setTimeout(() => {
      setFlipped([]);
      waitTimer.current = null;
    }, delay);

    waitTimer.current = timer;
  }
  return (
    <div className="memorygame">
      <h1>Memory Game</h1>
      <h2>Match all the cards with the same musical icons</h2>
      <select
        className="btn"
        value={gameOption}
        onChange={(e) => {
          setGameOption(e.target.value);
        }}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${cols},var(--size))`,
          gridTemplateRows: `repeat(${rows},var(--size))`,
        }}
      >
        {cards.map((card, index) => {
          const isMatched = matched.has(cards[index]);
          const isFlipped = flipped.includes(index);

          return (
            <button
              key={index}
              className={["card", matched.has(cards[index]) && "card--revealed"]
                .filter(Boolean)
                .join(" ")}
              disabled={isMatched || isFlipped}
              onClick={() => {
                onFlip(index);
              }}
            >
              {(isMatched || isFlipped) && card}
            </button>
          );
        })}
      </div>
      {gameComplete && (
        <button className="btn" onClick={resetGame}>
          Play Again
        </button>
      )}
    </div>
  );
};

export default MemoryGame;
