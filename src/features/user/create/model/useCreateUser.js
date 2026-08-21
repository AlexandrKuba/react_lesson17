import { useCreateUserMutation } from "../api/createUserApi";
export function useCreateUser() {
  const [createUserMutation, { isLoading, error }] = useCreateUserMutation();
  async function createUser(data) {
    return createUserMutation(data).unwrap();
  }
  return { createUser, isLoading, error };
}
