import React, { useState, useEffect } from "react";
import "./App.css";
import imageUrl from "./images/list.png";

function App() {
  const [taskBox, setTaskBox] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("data");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const addTask = () => {
    if (taskBox === "") {
      alert("You must write something");
    } else {
      const newTask = { text: taskBox, isChecked: false };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveData(updatedTasks);
      setTaskBox("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isChecked: !task.isChecked } : task
    );
    setTasks(updatedTasks);
    saveData(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    saveData(updatedTasks);
  };

  const saveData = (tasks) => {
    localStorage.setItem("data", JSON.stringify(tasks));
  };

  return (
    <div className="App">
      <main className="container">
        <section className="todo-app">
          <span>
            ToDo-App <img src={imageUrl} alt="To-Do List" />
          </span>
          <section className="row">
            <input
              type="text"
              className="input-box"
              placeholder="Add your text"
              spellCheck="false"
              value={taskBox}
              onChange={(e) => setTaskBox(e.target.value)}
            />
            <button onClick={addTask}> +</button>
          </section>
          <ul className="list-container">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={task.isChecked ? "checked" : ""}
                onClick={() => toggleTask(index)}
              >
                {task.text}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(index);
                  }}
                >
                  &times;
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
