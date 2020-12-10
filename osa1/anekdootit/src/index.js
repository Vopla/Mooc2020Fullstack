import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const AddAVote = () => {
    const arrayCopy = {...votes}
      arrayCopy[selected] += 1
      if (arrayCopy[selected] > largestVoteAmount){
        largestVoteAmount = arrayCopy[selected]
        setVotes(arrayCopy)
      }
      else(
        setVotes(arrayCopy)
      )
  }
  
  const GetMostVotedAnecdote = () => {
    const votesCopy = {...votes}
    const anecdotesCopy = {...anecdotes}

    let largestindex = 0

    Array.from(votesCopy).forEach((voteAmount, index) => {
      if (voteAmount === largestVoteAmount){
        largestindex = index
      }
    })
    return anecdotesCopy[largestindex]
  }

  const NextAnecdote = () =>{
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <table>
        <tbody>
          <tr><td>{anecdotes[selected]}</td></tr>
          <tr><td>{votes[selected]} votes</td></tr>
        </tbody>
        <tbody>
          <tr><td><Button text="Next anecdote" onClick={() => NextAnecdote()}></Button></td></tr>
          <tr><td><Button text="Vote" onClick={() => AddAVote()}></Button></td></tr>
        </tbody>
      </table>

      <h1>Anecdote with most votes</h1>
      <p>{() => setSelected(GetMostVotedAnecdote())}</p>
      <p> has {largestVoteAmount} votes</p>
    </div>
  )
}

const Button = ({onClick, text}) =>{
  return (
    <button onClick={onClick}>{text}</button>
  )
}

let largestVoteAmount = 0

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