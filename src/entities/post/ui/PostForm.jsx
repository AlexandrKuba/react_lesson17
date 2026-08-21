import { useState } from "react";
export function PostForm({
  initialValues = { title: "", content: "" },
  onSubmit,
  onCancel,
  isLoading,
  submitLabel,
}) {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Заголовок"
        required
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500
focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Текст оголошення"
        rows={3}
        required
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500
focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5
text-sm font-medium text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed
disabled:opacity-50"
        >
          {submitLabel}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transitioncolors hover:bg-gray-50"
          >
            Скасувати
          </button>
        )}
      </div>
    </form>
  );
}
