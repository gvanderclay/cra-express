import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { sum } from "../core/math";

function App() {
  const [serverResult, setServerResult] = useState<number | null>(null);
  useEffect(() => {
    (async () => {
      const result = await fetch("/ping");
      const newServerResult = await result.json();
      setServerResult(newServerResult);
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Client result {sum(1, 3)}</p>
        <p>Server result {serverResult}</p>
      </header>
    </div>
  );
}

export default App;
