import React from "react";
import { Link } from "react-router";
import { Pencil, Trash2, Eye } from "lucide-react";

const NoteCard = ({ note, onDelete }) => {
  const timestamp = note.createdAt || note.updatedAt;
  const formattedDate = timestamp ? new Date(timestamp).toLocaleDateString() : "–";

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 dark:border-white/5 bg-white/50 dark:bg-slate-950/30 backdrop-blur-md p-4 shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-xl transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{note.title}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">{note.content}</p>
        </div>
        <span className="rounded-full bg-emerald-500/20 dark:bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-200">
          {formattedDate}
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Link
          to={`/notes/${note._id}`}
          className="flex items-center gap-1 rounded-full bg-white/30 dark:bg-white/10 px-3 py-1 text-slate-700 dark:text-slate-100 transition hover:bg-white/50 dark:hover:bg-white/20 backdrop-blur"
        >
          <Eye size={16} /> View
        </Link>
        <Link
          to={`/notes/${note._id}/edit`}
          className="flex items-center gap-1 rounded-full bg-white/30 dark:bg-white/10 px-3 py-1 text-slate-700 dark:text-slate-100 transition hover:bg-white/50 dark:hover:bg-white/20 backdrop-blur"
        >
          <Pencil size={16} /> Edit
        </Link>
        <button
          onClick={() => onDelete?.(note._id)}
          className="ml-auto flex items-center gap-1 rounded-full bg-rose-500/20 dark:bg-rose-500/15 px-3 py-1 text-rose-700 dark:text-rose-100 transition hover:bg-rose-500/30 dark:hover:bg-rose-500/25 backdrop-blur"
        >
          <Trash2 size={16} /> Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
