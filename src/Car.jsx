import clsx from 'clsx'
import { useEffect, useRef } from 'react';
import {useStore,carHornSound} from "./store";

function Car(){
  const setCarPositionY = useStore((states) => states.setCarPositionY);
  const setCarPosition = useStore((states) => states.setCarPosition);
  const carPosition = useStore((states) => states.carPosition);
  const carRef = useRef(null);
  const gameRunning = useStore((states) => states.gameRunning);

  useEffect(()=>{
    setCarPositionY(carRef.current.getBoundingClientRect().top);
    const handleKeyDown = (e) => {
            if(gameRunning===true){
              switch(e.key){
                  case 'ArrowRight':
                      setCarPosition('ArrowRight')
                      break;
                  case 'ArrowLeft':
                      setCarPosition('ArrowLeft')
                      break;
                  case ' ':
                      carHornSound.play();
                      break;
                  default:
                      console.log('input key not supported!');
              }
          }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
  },[gameRunning])
  return (
    <img src="/images/car.png" alt="Car" width={130} ref={carRef}
     className={clsx(['absolute bottom-5 left-1/2 transition-all duration-500 ease-linear',
                    {'-translate-x-[calc(100%+0.75rem)]': (carPosition==='left')},
                    {'translate-x-3': (carPosition==='right')}])} 
      onClick={()=>{carHornSound.play()}}/>
  )
}

export default Car