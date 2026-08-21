import { useDeleteUserMutation } from "../api/deleteUserApi";
export function useDeleteUser() {
  const [deleteUserMutation, { isLoading }] = useDeleteUserMutation();
  async function deleteUser(id) {
    return deleteUserMutation(id).unwrap();
  }
  return { deleteUser, isLoading };
}
