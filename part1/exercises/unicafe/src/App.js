import { useState } from 'react';

import Button from './components/Button';
import Stat from './components/Stat';

const App = () => {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  return(
    <>
      <h1>Give Feedback</h1>
      <Button text="good" handler={()=>setGoodCount(goodCount + 1)} />
      <Button text="bad" handler={()=>setBadCount(badCount + 1)} />
      <Button text="neutral" handler={()=>setNeutralCount(neutralCount + 1)} />
      <h2>Statistics</h2>
      <Stat text="good" val={goodCount} />
      <Stat text="neutral" val={neutralCount} />
      <Stat text="bad" val={badCount} />
    </>
  );
}



export default App;
