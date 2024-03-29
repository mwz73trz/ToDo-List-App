import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>ToDo List App</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/tasks">Tasks</Link>
      </nav>
      <Outlet />
    </div>
  );
}
