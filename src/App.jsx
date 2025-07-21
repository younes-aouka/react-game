import Car from "./Car";
import Road from "./Road";
import Terrain from "./terrain";
import {useStore} from "./store";
import GameOverWindow from "./GameOverWindow";
import GameStarterWindow from "./GameStarterWindow";
import GameScore from "./GameScore";
import Palestine from "./Palestine";
import PhoneControls from "./PhoneControls";


const App = ()=>{
    const gameOver = useStore((states) => states.gameOver);
    const gameRunning = useStore((states) => states.gameRunning);
    return (
        <Terrain>
            <Road />
            <Car />
            {gameOver&&<GameOverWindow />}
            {!gameRunning&&!gameOver&&<GameStarterWindow />}
            {<GameScore />}
            <Palestine />
            <PhoneControls />
        </Terrain>
    )
}

export default App ;