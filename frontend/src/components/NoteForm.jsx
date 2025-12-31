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
        <label className="mb-1 block text-sm font-medium text-slate-200">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
          placeholder="My note title"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-200">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
          placeholder="Write your note content here..."
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-emerald-950 transition hover:bg-emerald-400 disabled:opacity-50"
      >
        {submitting ? "Saving..." : actionLabel}
      </button>
    </form>
  );
};

export default NoteForm;
