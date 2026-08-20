import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../api/logoutApi";
import { logout } from "@/entities/session";
export function useLogout() {
  const [logoutMutation] = useLogoutMutation();
  const dispatch = useDispatch();
  const logoutUser = async () => {
    try {
      await logoutMutation().unwrap();
    } finally {
      dispatch(logout());
    }
  };
  return { logoutUser };
}
