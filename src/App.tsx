import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import UserLiveFormCtx from './components/userInput_Context/UserLiveFormCtx'
import UserLiveForm_Sgnl from './components/UserInput_Signals/UserLiveForm_Sgnl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter/>
      </div>
      <hr/>

      <div className="card">
        <UserLiveFormCtx/>
      </div>
      <hr/>

      <div className="card">
        <UserLiveForm_Sgnl/>
        
      </div>
    </>
  )
}

export default App
