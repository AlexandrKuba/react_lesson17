import { useState } from "react";

export function UserForm({
  initialValues = { name: "", email: "", password: "", role: "user" },
  onSubmit,
  onCancel,
  isLoading,
  submitLabel,
  isEdit,
}) {
  const [name, setName] = useState(initialValues.name);
  const [email, setEmail] = useState(initialValues.email);
  const [password, setPassword] = useState(initialValues.password);
  const [role, setRole] = useState(initialValues.role);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password, role });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Логін"
        required
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500
focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Пошта"
        required
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500
focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {!isEdit && (
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500
focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      )}
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="manager">Manager</option>
        <option value="admin">Admin</option>
      </select>
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5
text-sm font-medium text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed
disabled:opacity-50"
        >
          {submitLabel}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transitioncolors hover:bg-gray-50"
          >
            Скасувати
          </button>
        )}
      </div>
    </form>
  );
}
