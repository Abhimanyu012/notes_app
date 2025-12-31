import React from "react";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
import UpdateNotePage from "./pages/UpdateNotePage";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
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
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
