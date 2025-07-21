
const Terrain = ({children}) => {
  return (
    <div className='bg-terrain w-screen h-screen bg-cover overflow-hidden relative'>
        {children}
    </div>
  )
}

export default Terrain