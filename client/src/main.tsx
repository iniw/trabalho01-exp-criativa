import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root");
if (!root) {
  throw new Error("root element not created");
}

createRoot(root).render(<App />);
