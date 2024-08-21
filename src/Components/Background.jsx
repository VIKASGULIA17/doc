import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] bg-zinc-800 w-full h-screen'>
      <div className='absolute top-[5%] w-full h-20 flex justify-center py-7 text-xl font-semibold  text-zinc-600'>Fun Project</div>
      <div className='absolute text-zinc-500 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-[13vw] bold'>React</div>
    </div>
    </>
  )
}

export default Background