import { useEffect, useState } from "react";

export default function Show_Task() {
  const [task_filter, setTask_filter] = useState("all task");
  const [tasks, settasks] = useState([]);
  
  useEffect(() => {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        settasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div>
      <div>
        <h1>Tasks</h1>
        <select name="task_filter" id="task_filter" onChange={(e) => setTask_filter(e.target.value)}>
          <option value="all task">all task</option>
          <option value="to do">to do</option>
          <option value="done">done</option>
        </select>
      </div>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <h2>{task.name}</h2>
          <p>{task.state}</p>
          {task.state === "to do" && <button>Complete</button>}
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
