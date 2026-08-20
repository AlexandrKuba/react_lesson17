import { useCreatePostMutation } from "../api/createPostApi";
export function useCreatePost() {
  const [createPostMutation, { isLoading, error }] = useCreatePostMutation();
  async function createPost(data) {
    return createPostMutation(data).unwrap();
  }
  return { createPost, isLoading, error };
}
