const Hello = ({ name, age }) => {
  const yearBorn = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  }
  return(
    <div>
      <p>Hello {name}! You are {age} years old.</p>
      <p>So you were probably born in {yearBorn()}.</p>
    </div>
  );
}

export default Hello;