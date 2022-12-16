import Hello from "./components/Hello";
import Footer from "./components/Footer";

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
      <h1>Count: {count} </h1>
      <button onClick={increaseByOne}> plus </button>
      <button onClick={decreaseByOne}> minus </button>
      <button onClick={reset}> Reset </button>
      <Hello name="Michael" age={20} />
      <Hello name="Peter" age={18} />
      <Hello name="Sarah" age={21} />
      <Footer />
    </>
  );
}

export default App;
