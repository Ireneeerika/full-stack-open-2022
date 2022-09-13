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

  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part part={course.parts}/>
        
      </div>
    )
  }

  const Total = () => {
    const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    return (
      <div>
        Number of exercises: {sum}
      </div>
    )
  }

  const Part = (props) => {

    return (
      <div>
        <p>Name: {course.parts[0].name} <br></br>Exercises: {course.parts[0].exercises}</p>
        <p>Name: {course.parts[1].name} <br></br>Exercises: {course.parts[1].exercises}</p>
        <p>Name: {course.parts[2].name} <br></br>Exercises: {course.parts[2].exercises}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
