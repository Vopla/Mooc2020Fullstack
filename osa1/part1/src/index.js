import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const nimi = "Allu"
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="World" age={5000+2000} />
      <Hello name={nimi} age={ika} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))