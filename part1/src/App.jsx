import { Header } from "./Header";
import { Content } from "./Content";
import {Total} from "./Total"

const course = "Half Stack application development";
const items = [
  { part: "Fundamentals of React", exercise: 10 },
  { part: "Using props to pass data", exercise: 7 },
  { part: "State of a component", exercise: 14 },
];
const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content items={items} />
      <Total total={items.reduce((acc, item) => acc + item.exercise, 0)} />
    </div>
  );
};

export default App;
