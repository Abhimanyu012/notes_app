import React, { useState, useEffect } from "react";

const NoteForm = ({ initialValues, onSubmit, actionLabel = "Save" }) => {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [content, setContent] = useState(initialValues?.content || "");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setTitle(initialValues?.title || "");
    setContent(initialValues?.content || "");
  }, [initialValues]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    try {
      setSubmitting(true);
      await onSubmit({ title: title.trim(), content: content.trim() });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-white/20 dark:border-white/10 bg-white/50 dark:bg-slate-950/30 backdrop-blur px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-emerald-400 dark:focus:border-emerald-400 focus:outline-none"
          placeholder="My note title"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full rounded-xl border border-white/20 dark:border-white/10 bg-white/50 dark:bg-slate-950/30 backdrop-blur px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-emerald-400 dark:focus:border-emerald-400 focus:outline-none"
          placeholder="Write your note content here..."
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/80 backdrop-blur px-4 py-2 font-semibold text-white transition hover:bg-emerald-500 dark:bg-emerald-600/60 dark:hover:bg-emerald-500 disabled:opacity-50"
      >
        {submitting ? "Saving..." : actionLabel}
      </button>
    </form>
  );
};

export default NoteForm;
