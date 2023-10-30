import "./Keyboard.css";

const KEYS = "abcdefghijklmnopqrstuvwxyz".split("");

type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
  inactiveLetters: string[];
  activeLetters: string[];
  disabled?: boolean;
};
export default function Keyboard({
  addGuessedLetter,
  inactiveLetters,
  activeLetters,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-2 max-lg:grid-cols-[repeat(auto-fit,minmax(4rem,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(3rem,1fr))]">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            className={`border-2 border-black/30 rounded-lg aspect-square uppercase text-[2.5rem] max-md:text-[1.5rem]  font-medium ${
              isActive ? "is-active" : ""
            } ${isInactive ? "is-inactive" : ""}`}
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
