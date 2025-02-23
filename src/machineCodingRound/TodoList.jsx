import React, { useState } from "react";

// Problem statement : create a simple todo list : 1.add task ,2.can show the added task, 3.there should be a button to complete the task ,4.if task is complete then strikethrough it;

export const TodoList = () => {
  const [addTask, setAddTask] = useState([]);
  const [task, setTask] = useState("");
  const handleTasks = () => {
    if (task.trim()) {
      setAddTask([
        ...addTask,
        { id: Date.now(), text: task, completed: false },
      ]);
      setTask("");
    }
  };
  const toggelTask = (id) => {
    setAddTask(
      addTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add your task here.."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => handleTasks()}>Add task</button>
        <div>
          <ul>
            {addTask &&
              addTask.map((item, index) => (
                <li key={item?.id}>
                  <p
                    style={{
                      textDecoration: item?.completed ? "line-through" : "none",
                    }}
                  >
                    {" "}
                    {item?.text}
                  </p>
                  <button onClick={() => toggelTask(item?.id)}>
                    Complete Task
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
