import { useEffect, useState } from "react";
import Create_Task from "./create_task";
import Show_Task from "./show_task";

export default function App() {
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (JSON.parse(storedTasks).length > 0) {
      settasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    settasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    settasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    settasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, state: "done" } : task
      )
    );
  };

  return (
    <div className="task_container">
      <h1 className="task_title">Task Manager</h1>
      <Create_Task onAddTask={handleAddTask} tasks={tasks} />
      <Show_Task
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onCompleteTask={handleCompleteTask}
      />
    </div>
  );
}
