import { Link } from "react-router";
export function LoginButton({ to }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm
font-medium text-white transition-colors hover:bg-indigo-500"
    >
      Увійти
    </Link>
  );
}
