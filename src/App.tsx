import { useState } from 'react'
import './App.css'

function ProgressBar() {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-fill" />
    </div>
  )
}

function App() {
  const [bars, setBars] = useState<number[]>([])

  const addBar = () => {
    setBars((prev) => [...prev, Date.now()])
  }

  return (
    <div className="app">
      <button onClick={addBar}>Add</button>
      <div className="progress-bars">
        {bars.map((id) => (
          <ProgressBar key={id} />
        ))}
      </div>
    </div>
  )
}

export default App
