import { useEffect, useState } from "react";
import RightObstacle from "./RightObstacle"
import LeftObstacle from "./LeftObstacle"
import {useStore} from "./store";

const RoadObstacles = () => {
  // if side stay the same so react will not make a re-render for a new component
  // then just use an object to give new ref every time
  // id is used to force react to re-create a new element totally (no previews state or somthing)
  const [obstacle, setObstacle] = useState({ side: null, id: 0 });
  const gameRunning = useStore((states) => states.gameRunning);

  const generateRandom = () => (Math.random() < 0.5 ? 'left' : 'right');
  useEffect(() => {
    if(gameRunning===true){
      const interval = setInterval(() => {
        setObstacle({ side: generateRandom(), id: Date.now() }); // force re-mount
      }, 2500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [gameRunning]);

  return (
    <>
      {obstacle.side === 'right' && gameRunning && <RightObstacle key={obstacle.id} />}
      {obstacle.side === 'left' && gameRunning && <LeftObstacle key={obstacle.id} />}
    </>
  );
};


export default RoadObstacles ;