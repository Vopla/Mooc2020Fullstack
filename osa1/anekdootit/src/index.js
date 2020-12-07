import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  
  const mostVotes = Math.max(...votes.map(o => o.y), 0);

  const addAVote = () => {
    const arrayCopy = {...votes}
      arrayCopy[selected] += 1
      setVotes(arrayCopy)
  }

  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <table>
        <tbody>
          <tr><td>{props.anecdotes[selected]}</td></tr>
          <tr><td>{votes[selected]} votes</td></tr>
        </tbody>
        <tbody>
          <tr><td><Button text="Next anecdote" onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}></Button></td></tr>
          <tr><td><Button text="Vote" onClick={() => addAVote()}></Button></td></tr>
        </tbody>
      </table>

      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[mostVotes]}has {mostVotes} votes</p>
    </div>
  )
}

const Button = ({onClick, text}) =>{
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)