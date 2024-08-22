import React, { useState, useEffect } from "react";
import "./App.css";
import imageUrl from "./images/list.png";

function App() {
  const [taskBox, setTaskBox] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("data")) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = () => {
    if (taskBox.trim()) {
      const newTask = { text: taskBox, isChecked: false };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("data", JSON.stringify(updatedTasks));
      setTaskBox("");
    } else {
      alert("You must write something");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isChecked: !task.isChecked } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("data", JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("data", JSON.stringify(updatedTasks));
  };

  return (
    <div className="App">
      <main className="container">
        <section className="todo-app">
          <span>
            ToDo-App <img src={imageUrl} alt="To-Do List" />
          </span>
          <div className="row">
            <input
              type="text"
              className="input-box"
              placeholder="Add your text"
              value={taskBox}
              onChange={(e) => setTaskBox(e.target.value)}
            />
            <button onClick={addTask}>Add +</button>
          </div>
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
