const StatisticLine = ({ text, value, percent }) => {
  return (
    <div>
      { percent ? 
        <tr>
          <td>{text}</td>
          <td>{value * 100}%</td>
        </tr> 
        : 
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
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
        <table>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={good + neutral + bad} />
          <StatisticLine text={"average"} value={(good - bad)/(good + neutral + bad)} />
          <StatisticLine text={"positive"} value={(good)/(good + neutral + bad)} percent={true} />
        </table>
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