import { useEffect, useState } from "react";

export function Show_Task({ tasks, onDeleteTask, onCompleteTask }) {
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
        <h1 className="task_title">Tasks</h1>
        <select
          name="task_filter"
          id="task_filter"
          onChange={(e) => settask_filter(e.target.value)}
          value={task_filter}
          className="task_filter"
        >
          <option value="all task">all task</option>
          <option value="to do">to do</option>
          <option value="done">done</option>
        </select>
      </div>
      <h2 className="task_subtitle">
        {task_filter === "all task" ? "All Tasks" : `${task_filter} Tasks`}
      </h2>
      {filteredTasks.map((task) => (
        <div key={task.id} className="task">
          <h2 className="task_name">{task.name}</h2>
          <p className="task_state">{task.state}</p>
          {task.state === "to do" && (
            <button className="task_button" onClick={() => onCompleteTask(task.id)}>Complete</button>
          )}
          <button className="task_button" onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
