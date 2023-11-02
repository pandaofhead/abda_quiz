import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import { showNotification as show } from "./components/helpers";
import "./Hangman.css";

const words = [
  { title: "Madonna", hint: "Often referred to as the " + "Queen of Pop" },
  {
    title: "Beyonce",
    hint: "Former Destiny's Child member known for" + " Single Ladies",
  },
  {
    title: "DollyParton",
    hint: "Country music singer-songwriter known for" + " Jolene",
  },
  {
    title: "ElvisPresley",
    hint: "The King of Rock and Roll",
  },

  {
    title: "Prince",
    hint: "Known for " + "Purple Rain" + "and a symbol as a name",
  },
  {
    title: "MichaelJackson",
    hint: "Known for " + "Thriller",
  },
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let selectedWordTitle = words[Math.floor(Math.random() * words.length)].title;

export function wordsHint() {
  return selectedWord.hint;
}

const Hangman = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWordTitle
          .includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    // cleanup event
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);
    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);
    selectedWordTitle = words[Math.floor(Math.random() * words.length)];
  }

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWordTitle={selectedWordTitle} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWordTitle={selectedWordTitle}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
};

export default Hangman;
