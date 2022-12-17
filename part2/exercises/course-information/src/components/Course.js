import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  const total = course.parts.reduce((accum, part) => accum + part.exercises, 0);

  return(
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <h3>total of {total} exercises</h3>
    </>
  );
}

export default Course;