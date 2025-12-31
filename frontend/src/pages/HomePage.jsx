import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Sparkles } from "lucide-react";
import toast from "react-hot-toast";
import { deleteNote, getNotes } from "../services/notesApi";
import NoteCard from "../components/NoteCard";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await getNotes();
        setNotes(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Fetch notes failed", error);
        toast.error("Failed to load notes");
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted");
    } catch (error) {
      console.error("Delete note failed", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 dark:border-white/5 bg-white/40 dark:bg-slate-950/30 backdrop-blur-xl p-8 shadow-sm dark:shadow-lg">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-200/80">
              <Sparkles size={16} /> Welcome back
            </p>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Your notes, organized.</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Create, update, and revisit your ideas anytime.</p>
          </div>
          <Link
            to="/create"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-emerald-500/80 backdrop-blur px-4 py-2 font-semibold text-white transition hover:bg-emerald-500 dark:bg-emerald-600/60 dark:hover:bg-emerald-500"
          >
            New Note
          </Link>
        </div>
      </section>

      {loading ? (
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2, 3, 4].map((skeleton) => (
            <div key={skeleton} className="h-32 animate-pulse rounded-2xl bg-white/20 dark:bg-white/5" />
          ))}
        </div>
      ) : notes.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 dark:border-white/5 p-10 text-center text-slate-600 dark:text-slate-300">
          <p>No notes yet. Start by creating one.</p>
          <Link to="/create" className="mt-3 rounded-full bg-emerald-500/80 backdrop-blur px-4 py-2 font-semibold text-white dark:bg-emerald-600/60">
            Create your first note
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;