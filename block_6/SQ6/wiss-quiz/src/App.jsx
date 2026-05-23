import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Rules from "./pages/Rules";
import Impressum from "./pages/Impressum";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Routes>
      <Route path="/" element={<Layout theme={theme} onToggleTheme={toggleTheme} />}>
        <Route index element={<Home />} />
        <Route path="quiz" element={<Game />} />
        <Route path="regeln" element={<Rules />} />
        <Route path="impressum" element={<Impressum />} />
      </Route>
    </Routes>
  );
}

export default App;