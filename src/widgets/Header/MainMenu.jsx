import { useSelector } from "react-redux";
import { Link } from "react-router";
import { selectAuthUser } from "@/entities/session";
import { getPagesObjectList } from "@/shared/config/routes/frontRoutes";
export function MainMenu() {
  const user = useSelector(selectAuthUser);
  // Фільтруємо маршрути, які потрібно показати в меню (ті, що мають title)
  // І враховуємо requireAuth і ролі
  const allowedRoutes = getPagesObjectList().filter(({ meta }) => {
    if (!meta.isInMenu) return false;
    if (!meta.requireAuth) return true;
    if (!user) return false;
    if (!meta.roles) return true;
    return meta?.roles.includes(user?.role);
  });
  return (
    <nav className="flex items-center gap-6">
      <div className="flex items-center gap-4">
        {allowedRoutes.map(({ path, meta }) => (
          <Link
            key={path}
            to={path}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600"
          >
            {meta.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
