import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0){
    return(
      <div><p>No feedback given</p></div>
    )
  }

  if (props.text === "Average"){
    return(
    <tr><td>{props.text}</td><td>{(props.value[0] - props.value[2])/ (props.value[0] + props.value[1] + props.value[2])}</td></tr>
    )
  }

  if (props.text === "Positive"){
    return(
        <tr><td>{props.text}</td><td>{props.value} %</td></tr>
    )
  }

  return(
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}

const Statistics = (props) => {
  if (props.value[0] === 0 && props.value[1] === 0 && props.value[2] === 0){
    return (
      <div><p>No feedback given</p></div>
    )
  }

  else {
  return(
    <div>
      <table>
        <tbody>
              <StatisticLine value={props.value[0]} text="Good"></StatisticLine>
              <StatisticLine value={props.value[1]} text="Neutral"></StatisticLine>
              <StatisticLine value={props.value[2]} text="Bad"></StatisticLine>
              <StatisticLine value={props.value[0] + props.value[1] + props.value[2]} text="All"></StatisticLine>
              <StatisticLine value={[props.value[0], props.value[1], props.value[2]]} text="Average"></StatisticLine>
              <StatisticLine value={(props.value[0] / (props.value[0] + props.value[1] + props.value[2]) * 100)} text="Positive"></StatisticLine>
        </tbody>
      </table>
    </div>
  )
  }
}

const Button = ({onClick, text}) =>{
  return (
    <button onClick={onClick}>{text}</button>
  )
}
 
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
        <Button onClick={() => setGood(good + 1)} text ="Good"></Button>
        <Button onClick={() => setNeutral(neutral + 1)} text="Neutral"></Button>
        <Button onClick={() => setBad(bad + 1)} text="Bad"></Button>
      
      <h1>Statistics</h1>
        <Statistics value={[good, neutral, bad]}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)