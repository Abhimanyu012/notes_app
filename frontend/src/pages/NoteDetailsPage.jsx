import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { getNote } from "../services/notesApi";

const NoteDetailsPage = () => {
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

  if (loading) {
    return <div className="h-40 animate-pulse rounded-2xl bg-white/5" />;
  }

  if (!note) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/80">Details</p>
          <h2 className="text-3xl font-bold text-white">{note.title}</h2>
          <p className="text-sm text-slate-400">
            Updated {new Date(note.updatedAt || note.createdAt).toLocaleString()}
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/notes/${note._id}/edit`}
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Edit
          </Link>
          <Link
            to="/"
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400"
          >
            Back to list
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/5 p-6 text-slate-100 shadow-sm">
        <p className="whitespace-pre-wrap leading-relaxed">{note.content}</p>
      </div>
    </div>
  );
};

export default NoteDetailsPage;