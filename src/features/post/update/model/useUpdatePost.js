import { useUpdatePostMutation } from "../api/updatePostApi";
export function useUpdatePost() {
  const [updatePostMutation, { isLoading, error }] = useUpdatePostMutation();
  async function updatePost(id, data) {
    return updatePostMutation({ id, data }).unwrap();
  }
  return { updatePost, isLoading, error };
}
