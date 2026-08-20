export function CommentItem({ comment, onDelete, isDeleting }) {
  return (
    <div
      className="flex items-center justify-between border-b border-gray-100 py-2 text-sm
last:border-b-0"
    >
      <span>
        <b className="font-medium text-gray-900">{comment.authorName}</b>
        <span className="text-gray-600">: {comment.text}</span>
        {isDeleting && (
          <span className="ml-2 text-xs text-gray-400">Видаляється...</span>
        )}
      </span>
      <button
        onClick={() => onDelete(comment.id)}
        disabled={isDeleting}
        className="ml-3 shrink-0 text-xs font-medium text-red-600 hover:text-red-500 disabled:cursornot-allowed disabled:opacity-40"
      >
        Видалити
      </button>
    </div>
  );
}
