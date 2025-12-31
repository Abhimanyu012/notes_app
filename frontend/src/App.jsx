import React from "react";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
import UpdateNotePage from "./pages/UpdateNotePage";

const App = () => {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 text-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/notes/:id" element={<NoteDetailsPage />} />
          <Route path="/notes/:id/edit" element={<UpdateNotePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Toaster position="top-center" toastOptions={{
        style: {
          background: isDark ? "#1e293b" : "#f8fafc",
          color: isDark ? "#e2e8f0" : "#0f172a",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
          backdropFilter: "blur(10px)",
        },
      }} />
    </div>
  );
};

export default App;
