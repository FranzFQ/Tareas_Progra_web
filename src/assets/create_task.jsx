import { useState } from "react";

export default function Create_Task({ onTaskCreated }) {
  const [name, setname] = useState("");

  const handleCreateTask = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      alert("Task name cannot be empty.");
      return;
    }

    const storedTasks = localStorage.getItem("tasks");
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];

    const existingTask = tasks.find((task) => task.name === name);
    if (existingTask) {
      alert("Task name already exists");
      return;
    }

    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      name: name,
      state: "to do",
    };

    const updatedTasks = [...tasks, newTask];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    onTaskCreated();
    setname("");
  };

  return (
    <div className="New_Task">
      <h1 className="Create_title">Create Task</h1>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}