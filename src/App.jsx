import { useState } from 'react'
import './App.css'
import { AuroraBackground } from './components/aurora-background'

function App() {
  const [count, setCount] = useState(0)

  return (

    <AuroraBackground>
      <div className='min-h-screen w-full flex flex-col items-center justify-center bg-black'>

        <div >
          <h1 className='text-white  text-4xl font-bold'>
          Avalos
          </h1>
          <h2 className='text-white '>El ultimo prime</h2>
        </div>
      </div>
    </AuroraBackground>
  )
}

export default App
