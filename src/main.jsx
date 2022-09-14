import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./CounterApp";
/* import FirstApp from "./FirstApp.jsx";*/
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={5} />
    {/* <FirstApp title="Bienvenido a la app" subtitle="Genial!" name="Gus" /> */}
  </React.StrictMode>
);
