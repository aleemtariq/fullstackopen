import { useState } from 'react'
import Display from './components/Display'
import Button from './components/Button'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const decreaseByOne = () => setCounter(counter - 1)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button text={'minus'} onClick={decreaseByOne} />
      <Button text={'plus'} onClick={increaseByOne} />
      <Button text={'zero'} onClick={setToZero} />
    </div>
  )
}

export default App
