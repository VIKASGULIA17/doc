import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'

const App = () => {
  return (
    <>
    <div className='relative w-full h-screen'>
      <Background />
      <Foreground />
      
    </div>
    </>
  )
}

export default App