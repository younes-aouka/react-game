import {useStore,carCrashSound} from "./store";


const obstaclesList = ['/images/obstacle-box.png','/images/obstacle-log.png'];


const RightObstacle = () => {
    const getLatestCarPosition = useStore((states) => states.getLatestCarPosition);
    const carPositionY = useStore((states) => states.carPositionY);
    const toggleGameState = useStore((states) => states.toggleGameState);
    const toggleGameOver = useStore((states) => states.toggleGameOver);
    const incrementGameScore = useStore((states) => states.incrementGameScore);
    const chosenObstacle = (Math.random()*10)<4?0:1 ;

    const trackRightObstacle = (e)=>{
        const el = e.target;
        function testCollision() {
            const rect = el.getBoundingClientRect();
            if(carPositionY <rect.bottom && getLatestCarPosition()==='right'){
                carCrashSound.play();
                toggleGameState();
                toggleGameOver();
            }
            else if(rect.bottom < window.innerHeight-100){
                requestAnimationFrame(testCollision);
            }else{
                //stop tracking and increment score
                incrementGameScore();
            }
        }
        requestAnimationFrame(testCollision);
    }
    return (
        <img src={obstaclesList[chosenObstacle]} width={120} className="absolute top-0 left-48 -translate-y-full animate-rightObstacleMove"
            onAnimationStart={trackRightObstacle} />
    )
}

export default RightObstacle