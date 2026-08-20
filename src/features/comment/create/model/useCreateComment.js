import { useCreateCommentMutation } from "../api/createCommentApi";
export function useCreateComment() {
  const [createCommentMutation, { isLoading, error }] =
    useCreateCommentMutation();
  async function createComment(postId, text) {
    return createCommentMutation({ postId, text }).unwrap();
  }
  return { createComment, isLoading, error };
}
