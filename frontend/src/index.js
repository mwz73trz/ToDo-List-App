import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Tasks from "./routes/tasks";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="tasks" element={<Tasks />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
