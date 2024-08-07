const Header = (props) => {
 // console.log(props.course)
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Content = (props) => {
 //console.log(props.props.parts)
  return (
    <div>
      <Part name={props.props.parts[0].name} exercise={props.props.parts[0].exercises}/>
      <Part name={props.props.parts[1].name} exercise={props.props.parts[1].exercises}/>
      <Part name={props.props.parts[2].name} exercise={props.props.parts[2].exercises}/>
    </div>
  )
}

const Part = (parts) => {
 //console.log(parts)
  return (
    <p>{parts.name} {parts.exercise}</p>
    
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
const Total = (props) => {
  const sum = props.props.parts[0].exercises + props.props.parts[1].exercises + props.props.parts[2].exercises
  return (
    <div>
      <p>Number of exercises {sum} </p>
    </div>
  )
}
  return (
    <>
      <Header course={course} />
      <Content props={course} />
       <Total props={course} />
    </>
  )
}

export default App