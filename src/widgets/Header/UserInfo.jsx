import { useSelector } from "react-redux";
import { selectAuthUser } from "@/entities/session";
import { LoginButton, LogoutButton } from "@/features/auth";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";
export function UserInfo() {
  const user = useSelector(selectAuthUser);
  if (!user) {
    return <LoginButton to={frontRoutes.pages.LoginPage.navigationPath} />;
  }
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600">
        {user.name} <span className="text-gray-400">({user.role})</span>
      </span>
      <LogoutButton navigatePath={frontRoutes.pages.LoginPage.navigationPath} />
    </div>
  );
}
