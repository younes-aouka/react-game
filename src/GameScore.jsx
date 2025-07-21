import {useStore} from "./store";

const GameScore = () => {
    const gameScore = useStore((states) => states.gameScore);
    return (
        <div className="absolute top-0 left-0 flex flex-col items-center px-1 py-1 text-center">
            <h3 className="  font-bold text-xl md:text-2xl text-white">Score: {gameScore}</h3>
            <div className="md:font-semibold text-white text-sm md:text-xl">
                <div>&larr; left</div>
                <div>&rarr; right</div>
                <p>click 'space' or on 'car'</p>
                <p>to activate car horn</p>
            </div>
        </div>
    )
}

export default GameScore