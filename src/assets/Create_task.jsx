import { useState } from "react";

export default function Create_Task() {
  const [name, setname] = useState("");
  const [tasks, settasks] = useState([]);
  const [loading, setLoading] = useState(true);
  let exist = false;

  if (loading) {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      settasks(JSON.parse(storedTasks));
      setLoading(false);
    }
  }

  const handleCreateTask = () => {
    setname(name);
    for (const tk of tasks) {
      if (tk.name === name) {
        exist = true;
        break;
      }
    }
    if (exist) {
      alert("Task name already exists");
      return;
    }
    const task = {
      id: tasks.length + 1,
      name: name,
      state: "to do",
    };
    tasks.push(task);
    settasks(save_tasks(tasks));
    for (const i of tasks) {
      console.log(i);
    }
  };

  return (
    <div className="New_Task">
      <h1 className="Create_title">Create Task</h1>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={() => handleCreateTask()}>Create Task</button>
    </div>
  );
}

function save_tasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return tasks;
}
