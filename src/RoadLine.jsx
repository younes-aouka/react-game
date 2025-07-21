import clsx from "clsx";
import {useStore} from "./store";


const RoadLine = () => {
    const gameRunning = useStore((states) => states.gameRunning);
    const lineChunks = [1,2,3,4]
    return (
        <>
            {lineChunks.map((i)=>{
                return (
                    <div key={i}
                    className={clsx('w-5 h-40 absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full bg-white animate-lineMove'
                        ,gameRunning?'animate-lineMove'+i:'animate-lineMove'+i+'Background')}></div>
                );
                })
            }
        </>
    )
}

export default RoadLine