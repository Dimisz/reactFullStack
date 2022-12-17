import StatsRow from "./StatsRow";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  const getPositiveRatio = (good, all) => {
    if(all !== 0){
      return ((good / all) * 100).toFixed(2);
    }
    else{
      return 0;
    }
  }

  const getAverage = (good, bad, all) => {
    if(all !== 0){
      const avg = (good - bad) / all;
      console.log(avg);

      return avg.toFixed(2);
    }
    else {
      return 0;
    }
  }

  if(all === 0){
    return(
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }

  return(
    <>
      <h1>statistics</h1>
      <StatsRow text="good" val={good} />
      <StatsRow text="neutral" val={neutral} />
      <StatsRow text="bad" val={bad} />
      <StatsRow text="all" val={all} />
      <StatsRow text="average" val={getAverage(good, bad, all)} />
      <StatsRow text="positive" val={`${getPositiveRatio(good, all)}%`} />
    </>
  )
};

export default Statistics;