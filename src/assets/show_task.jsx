import { useEffect, useState } from "react";

export default function Show_Task({ tasks, onDeleteTask, onCompleteTask }) {
  const [task_filter, settask_filter] = useState("all task");
  const filteredTasks = tasks.filter((task) => {
    if (task_filter === "all task") {
      return true;
    }
    return task.state === task_filter;
  });

  return (
    <div>
      <div>
        <h1>Tasks</h1>
        <select
          name="task_filter"
          id="task_filter"
          onChange={(e) => settask_filter(e.target.value)}
          value={task_filter}
        >
          <option value="all task">all task</option>
          <option value="to do">to do</option>
          <option value="done">done</option>
        </select>
      </div>
      <h2>
        {task_filter === "all task" ? "All Tasks" : `${task_filter} Tasks`}
      </h2>
      {filteredTasks.map((task) => (
        <div key={task.id} className="task">
          <h2>{task.name}</h2>
          <p>{task.state}</p>
          {task.state === "to do" && (
            <button onClick={() => onCompleteTask(task.id)}>Complete</button>
          )}
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
