import { useState } from "react";
export function PostCard({ post, canManage, onEdit, onDelete, children }) {
  const [showComments, setShowComments] = useState(false);
  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
      <p className="mt-1 text-sm text-gray-600">{post.content}</p>
      <div className="mt-2 text-xs text-gray-400">
        Автор: {post.author?.name}
      </div>
      {canManage && (
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => onEdit(post)}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transitioncolors hover:bg-gray-50"
          >
            Редагувати
          </button>
          <button
            onClick={() => onDelete(post.id)}
            className="rounded-md bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transitioncolors hover:bg-red-100"
          >
            Видалити
          </button>
        </div>
      )}
      {children && (
        <>
          <button
            onClick={() => setShowComments((value) => !value)}
            className="mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            {showComments ? "Сховати коментарі" : "Показати коментарі"}
          </button>
          {showComments && <div className="mt-3">{children}</div>}
        </>
      )}
    </div>
  );
}
