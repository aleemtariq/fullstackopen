import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const decreaseByOne = () => setCounter(counter - 1)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={decreaseByOne}>minus</button>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
    </div>
  )
}

export default App
