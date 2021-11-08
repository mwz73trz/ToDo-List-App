import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import todoAPI from "../api/todoAPI";

export default function Task() {
  const { taskId } = useParams();
  const [task, setTask] = useState([]);

  async function fetchTask() {
    let taskData = await todoAPI.getTaskById(taskId);
    setTask(taskData);
  }

  useEffect(() => {
    fetchTask();
  });

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Task</h1>
      <h2>{task.name}</h2>
      <p>Completed: {task.completed}</p>
      <p>Due Date: {task.due_date}</p>
    </main>
  );
}
