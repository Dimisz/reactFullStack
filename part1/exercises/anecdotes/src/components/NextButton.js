const NextButton = ({ clickHandler }) => {
  return (
  <div>
    <button onClick={clickHandler}> next anecdote </button>
  </div>);
}

export default NextButton;