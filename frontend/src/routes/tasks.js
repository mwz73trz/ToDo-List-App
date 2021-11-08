import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import todoAPI from "../api/todoAPI";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    let taskData = await todoAPI.getTasks();
    setTasks(taskData);
  }

  useEffect(() => {
    fetchTasks();
  });
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        {tasks.map((task) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/tasks/${task.id}`}
            key={task.id}
          >
            {task.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
