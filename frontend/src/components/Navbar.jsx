import React from "react";
import { Link, useLocation } from "react-router";
import { NotebookPen, Plus, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { pathname } = useLocation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-white/40 backdrop-blur-xl dark:bg-slate-950/40 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
          <span className="rounded-xl bg-emerald-500/20 p-2 text-emerald-600 dark:text-emerald-300">
            <NotebookPen size={20} />
          </span>
          Notes App
        </Link>

        <nav className="flex items-center gap-2 text-sm">
          <Link
            to="/"
            className={`rounded-full px-4 py-2 transition ${
              pathname === "/"
                ? "bg-white/30 dark:bg-white/10 text-slate-900 dark:text-white"
                : "text-slate-700 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-white/10"
            }`}
          >
            Home
          </Link>
          <Link
            to="/create"
            className="flex items-center gap-2 rounded-full bg-emerald-500/80 backdrop-blur px-4 py-2 font-semibold text-white dark:bg-emerald-600/60 transition hover:bg-emerald-500 dark:hover:bg-emerald-500"
          >
            <Plus size={16} /> Create
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-2 rounded-full p-2 hover:bg-white/20 dark:hover:bg-white/10 transition text-slate-700 dark:text-slate-200"
            title="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
