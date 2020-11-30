import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const calculateAverage = () => {

  }

  const goodValue = () => {
    console.log('clicked')
    setGood(good+1)
    setAll(all+1)   
    setSum(sum+1)

  }
  const neutralValue = () => {
    console.log('clicked')
    setNeutral(neutral+1)
    setAll(all + 1)
    setSum(sum+0)
  }

  const badValue = () => {
    console.log('clicked')
    setBad(bad+1)
    setAll(all + 1)
    setSum(sum-1)
  }

  const setStats = () => {
      console.log(all)
      setAverage(sum / all)
      setPositive(sum / good * 100)

  }

  useEffect(setStats, [all, good, sum])

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
      <ul>all {all}</ul>
      <ul>sum {sum}</ul>
      <ul>average {average}</ul>
      <ul>positive {positive}</ul>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)