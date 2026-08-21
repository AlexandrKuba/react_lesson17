import { PostForm } from "@/entities/post";
import { useCreatePost } from "../model/useCreatePost";
export function PostCreateForm({ onCreated, onCancel }) {
  const { createPost, isLoading } = useCreatePost();
  const handleSubmit = async (values) => {
    await createPost(values);
    onCreated?.();
  };
  return (
    <PostForm
      onSubmit={handleSubmit}
      onCancel={onCancel}
      isLoading={isLoading}
      submitLabel="Створити"
    />
  );
}
