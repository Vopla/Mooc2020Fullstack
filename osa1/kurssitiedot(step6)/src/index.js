import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => {
  return(
    <h1>{header}</h1>
  )
}

const Part = ({nimi, lukumaara}) => {
  return(
    <p>{nimi} {lukumaara}</p>
  )
}

const Content = ({content}) => {
  return(
    <div>
        {content.map(osat => <Part nimi={osat.name} lukumaara={osat.exercises} key={osat.id}></Part>)}
    </div>
  )
}

const Course = ({course}) => {
  return(
    course.map(courseParts =>
      <div key={courseParts.id} name={courseParts.name}>
        <div>
          <Header header={courseParts.name} key={courseParts.id}></Header>
          <Content content={courseParts.parts}></Content>
          <Total parts={courseParts.parts}></Total>
        </div>
      </div>
    )
  )
}


const Total = ({parts}) => {
  const totalExercises = parts.map(exercises => exercises.exercises).reduce((a,b) => a + b)
  return(
    <p><b>Number of exercises {totalExercises}</b></p>
  )
}

const App = () => {
  const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },

      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },

      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },

      {
        name: 'New course part',
        exercises: 5,
        id: 4
      },

      {
        name: 'Newer course part',
        exercises: 10,
        id:5    
      }
    ]
  },

  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },

      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  return (
    <div>
      <Course course={courses}></Course>
    </div>
  )
  }

ReactDOM.render(<App />, document.getElementById('root'))