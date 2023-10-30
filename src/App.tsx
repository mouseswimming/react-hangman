import { useEffect, useState } from "react";
import "./App.css";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import { HangmanGraphic } from "./components/HangmanGraphic";
import GameOver from "./components/GameOver";
import TopConsole from "./components/TopConsole";

async function getWord() {
  try {
    const response = await fetch(
      "https://www.wordgamedb.com/api/v1/words/random",
      {
        method: "GET",
      }
    );
    return await response.json();
  } catch {
    console.warn("api fail");
  }
}

const TRIALS = 6;

function App() {
  const [wordToGuess, setWordToGuess] = useState("");
  const [hint, setHint] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  async function newGame() {
    const { word, hint } = await getWord();
    setWordToGuess(word);
    setGuessedLetters([]);
    setHint(hint);
  }
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= TRIALS;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  function addGuessedLetter(letter: string) {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;
    console.log("dfsdfdsf");
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  }

  useEffect(() => {
    newGame();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    window.addEventListener("keypress", handler);

    return () => window.removeEventListener("keypress", handler);
  });

  return (
    <>
      <TopConsole
        newGame={newGame}
        incorrectNum={incorrectLetters.length}
        totalTrials={TRIALS}
      />
      <div className="p-8 w-full max-w-screen-xl m-auto grid grid-cols-[450px_1fr] gap-8 overflow-x-hidden max-lg:grid-cols-none">
        <HangmanGraphic numberOfGuesses={incorrectLetters.length} />
        <div className="grid gap-y-8">
          <HangmanWord
            wordToGuess={wordToGuess}
            hint={hint}
            guessedLetters={guessedLetters}
            reveal={isLoser}
          />
          <Keyboard
            addGuessedLetter={addGuessedLetter}
            disabled={isLoser}
            inactiveLetters={incorrectLetters}
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
          />
        </div>
      </div>
      {(isWinner || isLoser) && (
        <GameOver isLoser={isLoser} isWinner={isWinner} newGame={newGame} />
      )}
    </>
  );
}

export default App;
