import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { getNote, updateNote } from "../services/notesApi";
import NoteForm from "../components/NoteForm";

const UpdateNotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const data = await getNote(id);
        setNote(data);
      } catch (error) {
        console.error("Fetch note failed", error);
        toast.error("Note not found");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id, navigate]);

  const handleUpdate = async (payload) => {
    try {
      await updateNote(id, payload);
      toast.success("Note updated");
      navigate(`/notes/${id}`);
    } catch (error) {
      console.error("Update note failed", error);
      toast.error("Failed to update note");
    }
  };

  if (loading) {
    return <div className="h-40 animate-pulse rounded-2xl bg-white/20 dark:bg-white/5" />;
  }

  if (!note) return null;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-200/80">Edit</p>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Update note</h2>
        <p className="text-slate-600 dark:text-slate-300">Make changes to your note and save.</p>
      </div>
      <div className="rounded-2xl border border-white/10 dark:border-white/5 bg-white/40 dark:bg-slate-950/30 backdrop-blur-xl p-6 shadow-sm dark:shadow-lg">
        <NoteForm initialValues={note} onSubmit={handleUpdate} actionLabel="Save changes" />
      </div>
    </div>
  );
};

export default UpdateNotePage;