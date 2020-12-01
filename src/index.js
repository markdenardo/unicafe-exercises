import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const [all, setAll] = useState(0)
//   const [sum, setSum] = useState(0)
//   const [average, setAverage] = useState(0)
//   const [positive, setPositive] = useState(0)


//   const goodValue = () => {
//     console.log('clicked')
//     setGood(good+1)
//     setAll(all+1)   
//     setSum(sum+1)

//   }
//   const neutralValue = () => {
//     console.log('clicked')
//     setNeutral(neutral+1)
//     setAll(all + 1)
//     setSum(sum+0)
//   }

//   const badValue = () => {
//     console.log('clicked')
//     setBad(bad+1)
//     setAll(all + 1)
//     setSum(sum-1)
//   }

//   const setStats = () => {
//       console.log(all)
//       setAverage(sum / all)
//       setPositive(sum / good * 100)

//   }

//   useEffect(setStats, [all, good, sum])

//   return (
//     <div>
//       <h1>give feedback</h1>
      
//       <button onClick={() => goodValue()} text="good">good</button>
//       <button onClick={() => neutralValue()} text="neutral" >neutral</button>
//       <button onClick={() => badValue()} text="bad">bad</button>

//       <h1>statistics</h1>
//       <ul>good {good}</ul>
//       <ul>neutral {neutral}</ul>
//       <ul>bad {bad}</ul>
//       <ul>all {all}</ul>
//       <ul>sum {sum}</ul>
//       <ul>average {average}</ul>
//       <ul>positive {positive}</ul>
//     </div>
//   )
// }

const App = (props) => {
  
  const [selected, setSelected] = useState(0)
  const [array, setArray] = useState([{}])
  const [votes, setVotes] = useState([0,0,0,0,0,0])
  const [highest, setHighest] = useState('')

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const random = () => {  
    // setArray()
  //  let index = array.length
    let index = props.anecdotes.length
      if (index !== undefined){
        setSelected(getRandomInt(index))
      }
  }

  // const getArray = () => {
  //     setArray(props.anecdotes)
  // }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const highestVotes = () => {
    let i = votes.indexOf(Math.max(...votes));
    setHighest(props.anecdotes[i].quote)
  }

  // useEffect(random, [array, props.anecdotes]) 
  useEffect(highestVotes, [props, votes])

  return (
    <div>
      <h1>Quotes</h1>
      {/* {array[selected].quote}<br/> */}
      {props.anecdotes[selected].quote}<br/>
      {/* This quote has {array[selected].votes} votes <br/> */}
      This quote has {votes[selected]} votes <br/>
      <button onClick={()=>random()}>new anecdote</button>
      <button onClick={()=>vote()}>vote</button>
      <h1>Most Voted Quote</h1>
      {highest}
    </div>
  )
}

const anecdotes = [
  {quote: 'If it hurts, do it more often', votes: 0},
  {quote:'Adding manpower to a late software project makes it later!', votes: 0},
  {quote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
  {quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
  {quote: 'Premature optimization is the root of all evil.', votes: 0},
  {quote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0}
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)