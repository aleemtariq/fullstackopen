const Statistics = ({ good, bad, neutral }) => {
  const feedback = good != 0 || bad != 0 || neutral != 0;

  return (
    <div>
      { feedback ? 
      <div>
        <h1>statistics</h1>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {good + neutral + bad}</div>
        <div>average {(good - bad)/(good + neutral + bad)}</div>
        <div>positive {(good)/(good + neutral + bad) * 100}%</div>
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