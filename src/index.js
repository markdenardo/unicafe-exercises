import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodValue = () => {
    console.log('clicked')
    setGood(good+1)
  }

  const neutralValue = () => {
    console.log('clicked')
    setNeutral(neutral+1)
  }

  const badValue = () => {
    console.log('clicked')
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      
      <button onClick={() => goodValue()} text="good">good</button>
      <button onClick={() => neutralValue()} text="neutral" >neutral</button>
      <button onClick={() => badValue()} text="bad">bad</button>

      <h1>statistics</h1>
      <ul>good {good}</ul>
      <ul>neutral {neutral}</ul>
      <ul>bad {bad}</ul>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)