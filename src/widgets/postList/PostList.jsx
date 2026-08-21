import { useState } from "react";
import { useSelector } from "react-redux";
import { PostCard, useGetPostsQuery } from "@/entities/post";
import { selectAuthUser } from "@/entities/session";
import { roles } from "@/shared/config/roles";
import { PostCreateForm } from "@/features/post/create";
import { PostEditForm } from "@/features/post/update";
import { useDeletePost } from "@/features/post/delete";
import { CommentList } from "@/widgets/commentList";
import { CommentForm } from "@/features/comment/create";
export function PostList() {
  const user = useSelector(selectAuthUser);
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isLoading, error } = useGetPostsQuery({ page, limit });
  const { deletePost } = useDeletePost();
  const [isCreating, setIsCreating] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  if (isLoading)
    return (
      <div className="text-sm text-gray-500">Завантаження оголошень...</div>
    );
  if (error)
    return (
      <div className="text-sm text-red-600">Помилка: {error.toString()}</div>
    );
  const posts = data?.items || [];
  const totalPages = data?.totalPages || 1;
  const canManagePost = (post) =>
    user?.role === roles.admin ||
    (user?.role === roles.manager && parseInt(post.authorId) === user.id);
  const canCreatePost =
    user?.role === roles.admin || user?.role === roles.manager;
  const onDelete = async (id) => {
    await deletePost(id);
    if (posts.length === 1) setPage((p) => Math.max(p - 1, 1));
  };
  return (
    <div>
      {canCreatePost && !isCreating && (
        <button
          onClick={() => setIsCreating(true)}
          className="mb-4 inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5
text-sm font-medium text-white transition-colors hover:bg-indigo-500"
        >
          Додати оголошення
        </button>
      )}
      {isCreating && (
        <PostCreateForm
          onCreated={() => setIsCreating(false)}
          onCancel={() => setIsCreating(false)}
        />
      )}
      {posts.map((post) =>
        editingPostId === post.id ? (
          <PostEditForm
            key={post.id}
            post={post}
            onUpdated={() => setEditingPostId(null)}
            onCancel={() => setEditingPostId(null)}
          />
        ) : (
          <PostCard
            key={post.id}
            post={post}
            canManage={canManagePost(post)}
            onEdit={() => setEditingPostId(post.id)}
            onDelete={onDelete}
          >
            <CommentList postId={post.id} />
            {user && <CommentForm postId={post.id} />}
          </PostCard>
        ),
      )}
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transitioncolors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Назад
        </button>
        <span className="text-sm text-gray-600">
          Сторінка {page} з {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transitioncolors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Вперед
        </button>
      </div>
    </div>
  );
}
