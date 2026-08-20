import { LoginForm } from "@/features/auth";
export default function LoginPage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-gray-900">
        Вхід у систему
      </h1>
      <LoginForm />
    </div>
  );
}
