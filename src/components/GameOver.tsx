type GameOverProps = {
  isWinner: boolean;
  isLoser: boolean;
  newGame: () => void;
};

export default function GameOver({
  isWinner,
  isLoser,
  newGame,
}: GameOverProps) {
  return (
    <div className="inset-0 grid items-end justify-center bg-gradient-to-b from-black/60 to-black/90  absolute backdrop-blur-[2px]">
      <div className="text-center max-w-max p-10 bg-white rounded-t-2xl relative shadow-[0_20px_50px_rgba(255,_255,_255,_0.7)]">
        {isWinner && (
          <>
            <h2 className="text-6xl  my-8 font-semibold">Great Job!</h2>
            <p className="text-xl mb-6">
              Your victory tastes sweet, doesn't it? Want to savor it one more
              time?
            </p>
          </>
        )}
        {isLoser && (
          <>
            <h2 className="text-6xl  my-8 font-semibold">Nice Try!</h2>
            <p className="text-xl mb-6">
              Defeat is just a stepping stone to victory. Ready for another go?
            </p>
          </>
        )}
        {(isWinner || isLoser) && (
          <button
            className="border py-4 px-8 rounded-lg bg-blue-500 text-lg font-bold text-white mt-4"
            onClick={newGame}
          >
            New Challenge
          </button>
        )}
      </div>
    </div>
  );
}
