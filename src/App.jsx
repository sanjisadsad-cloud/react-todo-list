import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task === "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  }
  function deleteTask(indexToDolete){
    const newTasks = tasks.filter(function(task, index){
return index !== indexToDolete;
    });
    setTasks(newTasks)
  }

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Введите задачу"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button onClick={addTask}>
        Добавить
      </button>

      {tasks.map(function (task, index) {
        return (
          <div className="task" key={index}>
            <span>{task}</span>

            <button onClick={() => deleteTask(index)}>
              Удалить
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;