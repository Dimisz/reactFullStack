import Display from "./components/Display";
import Button from "./components/Button";

import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseByOne = () => {
    setCount(count + 1);
  };

  const decreaseByOne = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return(
    <>
      <Display counter={count} /> 
      <Button title=" + 1 " eventHandler={increaseByOne} />
      <Button title=" - 1 " eventHandler={decreaseByOne} />
      <Button title=" Reset " eventHandler={reset} />
    </>
  );
}

export default App;
