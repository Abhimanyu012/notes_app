import React from "react";
import { Link, useLocation } from "react-router";
import { NotebookPen, Plus } from "lucide-react";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-10 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="rounded-xl bg-emerald-500/20 p-2 text-emerald-300">
            <NotebookPen size={20} />
          </span>
          Notes App
        </Link>

        <nav className="flex items-center gap-2 text-sm">
          <Link
            to="/"
            className={`rounded-full px-4 py-2 transition hover:bg-white/10 ${pathname === "/" ? "bg-white/10 text-white" : "text-slate-200"}`}
          >
            Home
          </Link>
          <Link
            to="/create"
            className="flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 font-semibold text-emerald-950 transition hover:bg-emerald-400"
          >
            <Plus size={16} /> Create
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
