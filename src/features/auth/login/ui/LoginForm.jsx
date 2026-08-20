import { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../model/useLogin";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";
export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login({ email, password });
      if (result.user) navigate(frontRoutes.pages.HomePage.navigationPath);
    } catch {
      // Помилку вже показано нижче через стан `error`
    }
  };
  return (
    <form onSubmit={onSubmit} className="flex max-w-sm flex-col gap-3">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500
focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500
focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm
font-medium text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed
disabled:opacity-50"
      >
        Увійти
      </button>
      {error && (
        <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
          {error.data?.message || "Помилка входу"}
        </div>
      )}
    </form>
  );
}
