import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import "./Layout.css";

function Layout({ theme, onToggleTheme }) {
  return (
    <div className="App">
      <button className="theme-toggle" onClick={onToggleTheme} aria-label="Theme wechseln">
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>(c) {new Date().getFullYear()} WISS-Quiz</p>
      </footer>
    </div>
  );
}

export default Layout;