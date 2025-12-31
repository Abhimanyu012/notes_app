import React from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { createNote } from "../services/notesApi";
import NoteForm from "../components/NoteForm";

const CreatePage = () => {
  const navigate = useNavigate();

  const handleCreate = async (payload) => {
    try {
      await createNote(payload);
      toast.success("Note created");
      navigate("/");
    } catch (error) {
      console.error("Create note failed", error);
      toast.error("Failed to create note");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-200/80">Create</p>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">New Note</h2>
        <p className="text-slate-600 dark:text-slate-300">Capture your thoughts with a title and content.</p>
      </div>
      <div className="rounded-2xl border border-white/10 dark:border-white/5 bg-white/40 dark:bg-slate-950/30 backdrop-blur-xl p-6 shadow-sm dark:shadow-lg">
        <NoteForm onSubmit={handleCreate} actionLabel="Create note" />
      </div>
    </div>
  );
};

export default CreatePage;