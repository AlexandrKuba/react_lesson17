import { useUpdateUserMutation } from "../api/updateUserApi";
export function useUpdateUser() {
  const [updateUserMutation, { isLoading, error }] = useUpdateUserMutation();
  async function updateUser(id, data) {
    return updateUserMutation({ id, data }).unwrap();
  }
  return { updateUser, isLoading, error };
}
