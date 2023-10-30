type HangmanWordProps = {
  wordToGuess: string;
  hint: string;
  guessedLetters: string[];
  reveal: boolean;
};

export default function HangmanWord({
  wordToGuess,
  hint,
  guessedLetters,
  reveal,
}: HangmanWordProps) {
  return (
    <div className="grid gap-y-4">
      <div className="flex justify-center flex-wrap gap-4 text-[6rem] max-lg:text-[4rem] font-bold uppercase font-mono leading-none">
        {wordToGuess.split("").map((letter, index) => (
          <span
            className={`border-b-4 px-1 bg-black/10 transition-colors ${
              !guessedLetters.includes(letter) && reveal
                ? "border-red-600"
                : "border-black"
            } ${
              guessedLetters.includes(letter) || reveal ? "bg-transparent" : ""
            }`}
            key={index}
          >
            <span
              className={` ${
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "invisible"
              } ${
                !guessedLetters.includes(letter) && reveal
                  ? "text-red-600"
                  : "text-black"
              }`}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
      <div className="text-center text-green-700">Hint: {hint}</div>
    </div>
  );
}
