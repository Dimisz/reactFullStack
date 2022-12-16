import Hello from "./components/Hello";
import Footer from "./components/Footer";

const App = () => {
  return(
    <>
      <h1>Greetings</h1>
      <Hello name="Michael" age={20} />
      <Hello name="Peter" age={18} />
      <Hello name="Sarah" age={21} />
      <Footer />
    </>
  );
}

export default App;
