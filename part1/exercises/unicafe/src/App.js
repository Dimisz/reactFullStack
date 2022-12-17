import { useState } from 'react';

import Button from './components/Button';
import Stats from './components/Stats';

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

      <Stats good={goodCount} neutral={neutralCount} bad={badCount} />
    </>
  );
}



export default App;
