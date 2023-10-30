type TopConsoleProps = {
  newGame: () => void;
  incorrectNum: number;
  totalTrials: number;
};

export default function TopConsole({
  newGame,
  incorrectNum,
  totalTrials,
}: TopConsoleProps) {
  return (
    <div className="absolute top-0 w-full p-2 bg-blue-500 text-white flex place-content-between items-center">
      <span>
        Incorrect Attempt: {incorrectNum} / {totalTrials}
      </span>
      <button
        className="py-2 px-4 bg-slate-50 text-black border border-white hover:bg-blue-600 transition"
        onClick={() => newGame()}
      >
        New Game
      </button>
    </div>
  );
}
