import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Canvas} from '@react-three/fiber'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Nuty L.A.B.S Keymapper</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
      </div>
      <div id="canvas-container">
        <Canvas>
        <color attach="background" args={["black"]}/>
        </Canvas>
      </div>
    </>


  )
}

export default App
