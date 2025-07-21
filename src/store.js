import { create } from 'zustand'

const carCrashSound = new Audio('/sounds/car-crash.mp3');
const carHornSound = new Audio('/sounds/car-horn.mp3');
const carDriftingSound = new Audio('/sounds/car-drifting.mp3');

const useStore = create((set,get) => ({
    gameRunning: false,
    toggleGameState:()=>{
        set((states)=>({
            gameRunning: states.gameRunning?false:true
        }))
    },
    carPositionY: 10000,
    setCarPositionY: (p)=>{
        set({carPositionY: p});
    },
    carPosition: 'right',
    setCarPosition: (key)=>{
        if(key==='ArrowRight'){
            if(get().carPosition==='left'){
                set((states)=>({
                    carPosition: states.carPosition === 'left'? 'right':'right'
                }));
                carDriftingSound.play();
            }
        }else if(key==='ArrowLeft'){
            if(get().carPosition==='right'){
                set((states)=>({
                    carPosition: states.carPosition === 'right'? 'left':'left'
                }));
                carDriftingSound.play();
            }
        }
    },
    getLatestCarPosition:()=>{
        return get().carPosition;
    },
    gameOver: false,
    toggleGameOver:()=>{
        set((states)=>({
            gameOver: states.gameOver?false:true
        }))
    },
    gameScore: 0,
    incrementGameScore:()=>{
        set((states)=>({gameScore: states.gameScore+1}));
    },
    initializeGameScore:()=>{
        set({gameScore: 0});
    },
}))


export {useStore,carCrashSound,carHornSound,carDriftingSound} ;
