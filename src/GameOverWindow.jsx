import {useStore} from "./store";

const GameOverWindow = () => {
  const toggleGameOver = useStore((states) => states.toggleGameOver);
  const toggleGameState = useStore((states) => states.toggleGameState);
  const initializeGameScore = useStore((states) => states.initializeGameScore);
  return (
    <div className='w-2/4 h-2/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-700/90 flex flex-col justify-center items-center rounded-xl'>
        <h3 className='text-2xl font-semibold text-center'>Game over!</h3>
        <button className="px-2 py-3 rounded-lg bg-green-600 mt-4 font-bold "
            onClick={()=>{
              initializeGameScore();
              toggleGameOver();
              toggleGameState();
        }}>Play Again</button>
    </div>
  )
}

export default GameOverWindow