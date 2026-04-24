const Statistics = ({ good, bad, neutral }) => {
    return (
      <div>
        <h1>statistics</h1>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {good + neutral + bad}</div>
        <div>average {(good - bad)/(good + neutral + bad)}</div>
        <div>positive {(good)/(good + neutral + bad) * 100}%</div>
      </div>
    )
  }

  export default Statistics