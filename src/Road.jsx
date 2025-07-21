import RoadObstacles from './RoadObstacles'
import RoadLine from './RoadLine'

function Road() {
  return (
    <div className='h-screen w-80 bg-gradient-to-r from-black via-[#3c3c3c] via-55% to-black relative mx-auto border-x-2 border-x-white'>
        <RoadLine />
        <RoadObstacles />
    </div>
  )
}

export default Road