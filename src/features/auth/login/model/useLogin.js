import { useDispatch } from "react-redux";
import { useLoginMutation } from "../api/loginApi";
import { setCredentials } from "@/entities/session";
export function useLogin() {
  const [loginMutation, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  async function login(credentials) {
    const result = await loginMutation(credentials).unwrap();
    dispatch(setCredentials(result));
    return result;
  }
  return { login, isLoading, error };
}
