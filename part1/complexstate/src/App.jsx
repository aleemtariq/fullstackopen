import { useState } from 'react'
import Button from './components/Button'

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    setRight(right + 1)
  }

  const History = ({ allClicks }) => {
    if (allClicks.length == 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    } else {
      return (
        <div>
          button press history: {allClicks.join(' ')}
        </div>
      )
    }
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text={'left'}/>
      <Button onClick={handleRightClick} text={'right'}/>
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;