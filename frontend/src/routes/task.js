import { useParams } from "react-router";

export default function Task() {
  let params = useParams();
  return <h2>Task: {params.taskId}</h2>;
}
