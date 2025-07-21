import {useStore,carCrashSound} from "./store";

const obstaclesList = ['/images/obstacle-box.png','/images/obstacle-log.png'];

const LeftObstacle = () => {
    const getLatestCarPosition = useStore((states) => states.getLatestCarPosition);
    const carPositionY = useStore((states) => states.carPositionY);
    const toggleGameState = useStore((states) => states.toggleGameState);
    const toggleGameOver = useStore((states) => states.toggleGameOver);
    const incrementGameScore = useStore((states) => states.incrementGameScore);
    const chosenObstacle = (Math.random()*10)<4?0:1 ;
    //focus, remember react snapshot ? yes exactly so if you pass that function bellow to event so it will keep running
    // with old values even if states change and component re-render the new created function with new values
    // don't get assigned
    //so the old one keep running
    const trackLeftObstacle = (e)=>{
        const el = e.target;
        function testCollision() {
            const rect = el.getBoundingClientRect();
            if(carPositionY <rect.bottom && getLatestCarPosition()==='left'){
                carCrashSound.play();
                toggleGameState();
                toggleGameOver();
                return ''
            }
            if(rect.bottom < window.innerHeight-100){
                requestAnimationFrame(testCollision);
            }else{
                //stop tracking and increment score
                incrementGameScore()
            }
        }
        requestAnimationFrame(testCollision);
    }
    return (
        <img src={obstaclesList[chosenObstacle]} width={120} className="absolute top-0 left-8 -translate-y-full animate-leftObstacleMove"
            onAnimationStart={trackLeftObstacle} />
    )
}

export default LeftObstacle