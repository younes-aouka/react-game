import {useStore} from "./store";

const PhoneControls = () => {
  const setCarPosition = useStore((states) => states.setCarPosition);
  const gameRunning = useStore((states) => states.gameRunning);


  return (
    <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 font-semibold text-3xl flex justify-between">
        <button type="button" className="text-5xl" onClick={()=>{
                if(gameRunning) setCarPosition('ArrowLeft');
            }}>
            &#9664;
        </button>
        <button type="button" className="text-5xl" onClick={()=>{
                if(gameRunning) setCarPosition('ArrowRight')
            }}>
            &#9654;
        </button>
    </div>
  )
}

export default PhoneControls