import { useState } from "react";
import Create_Task from "./Create_task";
import Show_Task from "./show_task";

export default function App() {
  return (
    <div className="task_container">
      <h1 className="task_title">Task Manager</h1>
      <Create_Task />
      <Show_Task />
    </div>
  );
}
