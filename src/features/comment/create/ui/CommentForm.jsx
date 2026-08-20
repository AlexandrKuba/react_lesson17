import { useState } from "react";
import { useCreateComment } from "../model/useCreateComment";
export function CommentForm({ postId }) {
  const [content, setContent] = useState("");
  const { createComment, isLoading } = useCreateComment();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    await createComment(postId, content);
    setContent("");
  };
  return (
    <form onSubmit={onSubmit} className="mt-3 flex flex-col gap-2">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={2}
        placeholder="Напишіть коментар..."
        required
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500
focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="self-start rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white
transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Додати коментар
      </button>
    </form>
  );
}
