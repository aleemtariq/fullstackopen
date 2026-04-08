const Hello = ({ name , age })  => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old 
      </p>
      <p>So you were probably born in {bornYear()}</p>
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
