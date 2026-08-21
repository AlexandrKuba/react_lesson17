import { useDeletePostMutation } from "../api/deletePostApi";
export function useDeletePost() {
  const [deletePostMutation, { isLoading }] = useDeletePostMutation();
  async function deletePost(id) {
    return deletePostMutation(id).unwrap();
  }
  return { deletePost, isLoading };
}
