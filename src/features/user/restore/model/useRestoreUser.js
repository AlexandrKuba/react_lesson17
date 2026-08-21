import { useRestoreUserMutation } from "../api/restoreUserApi";
export function useRestoreUser() {
  const [restoreUserMutation, { isLoading }] = useRestoreUserMutation();
  async function restoreUser(id) {
    return restoreUserMutation(id).unwrap();
  }
  return { restoreUser, isLoading };
}
