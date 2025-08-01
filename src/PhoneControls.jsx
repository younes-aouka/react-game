import {useStore} from "./store";

const PhoneControls = () => {
  const setCarPosition = useStore((states) => states.setCarPosition);
  const gameRunning = useStore((states) => states.gameRunning);


  return (
    <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 font-semibold text-3xl flex gap-2">
        <button type="button" className="text-5xl" onClick={()=>{
                if(gameRunning) setCarPosition('ArrowLeft');
            }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={40}><path fill="#2196F3" d="M0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z"/></svg>
        </button>
        <button type="button" className="text-5xl" onClick={()=>{
                if(gameRunning) setCarPosition('ArrowRight')
            }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={40}><path fill="#2196F3" d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z"/></svg>
        </button>
    </div>
  )
}

export default PhoneControls