import { createBrowserRouter } from "react-router";
import { Mutex } from "async-mutex";
import { appRouterRoutes } from "./appRouterRoutes";
import { authCheckLoader } from "./authCheckLoader";
import { MainLayout } from "@/widgets/layouts";
import GlobalErrorPage from "@/pages/GlobalErrorPage";
// Глобальний м'ютекс для запобігання конкурентним запитам оновлення токена
const refreshMutex = new Mutex();
// Лоадер для перевірки автентифікації та ролей користувача
const authLoader = authCheckLoader({ refreshMutex });
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <GlobalErrorPage />,
    children: appRouterRoutes.map((route) => ({
      ...route,
      loader: () => authLoader(route),
    })),
  },
]);
