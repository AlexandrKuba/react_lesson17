import { PostForm } from "@/entities/post";
import { useUpdatePost } from "../model/useUpdatePost";
export function PostEditForm({ post, onUpdated, onCancel }) {
  const { updatePost, isLoading } = useUpdatePost();
  const handleSubmit = async (values) => {
    await updatePost(post.id, values);
    onUpdated?.();
  };
  return (
    <PostForm
      initialValues={{ title: post.title, content: post.content }}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      isLoading={isLoading}
      submitLabel="Зберегти"
    />
  );
}
