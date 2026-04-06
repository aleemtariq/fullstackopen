const Hello = (props)  => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Daisy" age={16}/>
      <Hello name="John" age={26}/>
      <Hello name="Eric" age={18}/>
    </div>
  )
}

export default App
