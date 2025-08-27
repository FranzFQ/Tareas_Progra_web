import { useEffect, useState } from "react";
import Order_Task from "./order_task";

export default function Show_Task() {
  const [task_filter, settask_filter] = useState("all task");
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
        <select
          name="task_filter"
          id="task_filter"
          onChange={(e) => settask_filter(e.target.value)}
        >
          <option value="all task">all task</option>
          <option value="to do">to do</option>
          <option value="done">done</option>
        </select>
      </div>
      {task_filter === "all task" && (
        <div>
          <h2>All Tasks</h2>
          {tasks.map((task) => (
            <div key={task.id} className="task">
              <h2>{task.name}</h2>
              <p>{task.state}</p>
              {task.state === "to do" && <button>Complete</button>}
            </div>
          ))}
        </div>
      )}
      {task_filter === "to do" && (
        <div>
          <h2>To Do Tasks</h2>
          {tasks
            .filter((task) => task.state === "to do")
            .map((task) => (
              <div key={task.id} className="task">
                <h2>{task.name}</h2>
                <p>{task.state}</p>
                {task.state === "to do" && <button>Complete</button>}
              </div>
            ))}
        </div>
      )}
      {task_filter === "done" && (
        <div>
          <h2>Done Tasks</h2>
          {tasks
            .filter((task) => task.state === "done")
            .map((task) => (
              <div key={task.id} className="task">
                <h2>{task.name}</h2>
                <p>{task.state}</p>
                {task.state === "to do" && <button>Complete</button>}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
