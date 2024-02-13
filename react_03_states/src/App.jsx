import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [counter, setCounter] = useState(0);
  const [book, setBook] = useState({
    title: "Good book",
    author: "No name",
  });

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const clickHandler = () => {
    setCounter((counter) => counter + 1);
  };

  const bookChangeHandler = () => {
    setBook((book) => {
      return {
        ...book,
        author: "N.O. Name",
      };
    });
  };

  const addTaskHandler = () => {
    if (task === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  // const deleteHandler = (task) => {
  //   setTasks(tasks.filter((t) => t !== task));
  // };

  return (
    <>
      <div
        className="simpleState"
        style={{ backgroundColor: "red", padding: "20px", marginBlock: "20px", width: "50px" }}
      >
        {counter}
        <button onClick={clickHandler}>Click</button>
        {/* <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Click</button> */}
      </div>
      <div className="objectState" style={{ backgroundColor: "grey", width: "500px" }}>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <button onClick={bookChangeHandler}>Change Book</button>
      </div>
      <div className="arrayState" style={{ backgroundColor: "bisque", width: "600px" }}>
        <h1>Task list</h1>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value.trim())} />
        <button onClick={addTaskHandler}>Add task!</button>
        <ul className="tasksList">
          {tasks.map((task) => (
            <li key={nanoid()}>
              <span>{task}</span>
              <button
                // onClick={deleteHandler}
                onClick={() => setTasks((prevTasks) => prevTasks.filter((t) => t !== task))}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
