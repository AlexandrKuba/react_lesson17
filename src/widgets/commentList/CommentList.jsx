import { CommentItem, useGetCommentsByPostQuery } from "@/entities/comment";
import { useDeleteComment } from "@/features/comment/delete";
export function CommentList({ postId }) {
  const { data, isLoading, error } = useGetCommentsByPostQuery({ postId });
  const { deleteComment, deletingId } = useDeleteComment();
  if (isLoading)
    return (
      <div className="text-sm text-gray-500">Завантаження коментарів...</div>
    );
  if (error)
    return (
      <div className="text-sm text-red-600">Помилка: {error.toString()}</div>
    );
  const comments = data || [];
  return (
    <div>
      <h4 className="mb-1 text-sm font-semibold text-gray-700">Коментарі</h4>
      {comments.length === 0 ? (
        <p className="text-sm text-gray-400">Коментарів ще немає</p>
      ) : (
        comments.map((c) => (
          <CommentItem
            key={c.id}
            comment={c}
            onDelete={deleteComment}
            isDeleting={deletingId === c.id}
          />
        ))
      )}
    </div>
  );
}
