const Button = ({ title, eventHandler }) => {
  return(
    <button onClick={eventHandler}>{title}</button>
  );
}

export default Button;
