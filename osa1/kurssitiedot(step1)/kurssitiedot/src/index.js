import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
  <p>{props.course}</p>
  )
}

const Content = (props) => {
  return(
    <p>{props.name} {props.exercises}</p>
  )
}

const Total = (props) => {
  return(
  <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course= {course}></Header>
      <Content name= {part1} exercises= {exercises1}/>
      <Content name= {part2} exercises= {exercises2}/>
      <Content name= {part3} exercises= {exercises3}/>
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))