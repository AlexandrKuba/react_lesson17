import { useState } from "react";
import { useDeleteCommentMutation } from "../api/deleteCommentApi";
export function useDeleteComment() {
  const [deleteCommentMutation] = useDeleteCommentMutation();
  const [deletingId, setDeletingId] = useState(null);
  const deleteComment = async (id) => {
    setDeletingId(id);
    try {
      await deleteCommentMutation(id).unwrap();
    } catch (e) {
      console.error(e);
    } finally {
      setDeletingId(null);
    }
  };
  return { deleteComment, deletingId };
}
