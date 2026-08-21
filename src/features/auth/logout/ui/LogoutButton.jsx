import { useNavigate } from "react-router";
import { useLogout } from "../model/useLogout";
export function LogoutButton({ navigatePath = "/" }) {
  const { logoutUser } = useLogout();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logoutUser();
    navigate(navigatePath);
  };
  return (
    <button
      onClick={handleLogout}
      className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700
transition-colors hover:bg-gray-50"
    >
      Вийти
    </button>
  );
}
