import { useEffect, useState } from "react";
import Create_Task from "./create_task";
import Show_Task from "./show_task";

export default function App() {
  const [tasksChanged, setTasksChanged] = useState(false);

  const handleTasksUpdated = () => {
    setTasksChanged(prevState => !prevState);
  };

  return (
    <div className="task_container">
      <h1 className="task_title">Task Manager</h1>
      <Create_Task onTaskCreated={handleTasksUpdated} />
      <Show_Task tasksChanged={tasksChanged} />
    </div>
  );
}