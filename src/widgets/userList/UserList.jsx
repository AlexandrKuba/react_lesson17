import { useState } from "react";
import { useGetUsersQuery, UserListItem } from "@/entities/user";
export function UserList() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isLoading, error } = useGetUsersQuery({ page, limit });
  if (isLoading)
    return <div className="text-sm text-gray-500">Завантаження...</div>;
  if (error)
    return (
      <div className="text-sm text-red-600">Помилка: {error.toString()}</div>
    );
  const users = data?.items || [];
  const totalPages = data?.totalPages || 1;
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transitioncolors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Назад
        </button>
        <span className="text-sm text-gray-600">
          Сторінка {page} з {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transitioncolors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Вперед
        </button>
      </div>
    </div>
  );
}
