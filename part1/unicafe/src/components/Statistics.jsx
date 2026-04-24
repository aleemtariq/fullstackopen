const StatisticLine = ({ text, value, percent }) => {
  return (
    <div>
      { percent ? 
        <>{text} {value * 100}% </> : 
        <>{text} {value}</>
      }
    </div>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  const feedback = good != 0 || bad != 0 || neutral != 0;

  return (
    <div>
      { feedback ? 
      <div>
        <h1>statistics</h1>
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={good + neutral + bad} />
        <StatisticLine text={"average"} value={(good - bad)/(good + neutral + bad)} />
        <StatisticLine text={"positive"} value={(good)/(good + neutral + bad)} percent={true} />
      </div> 
      : 
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
      }
    </div>
  )
}

  export default Statistics