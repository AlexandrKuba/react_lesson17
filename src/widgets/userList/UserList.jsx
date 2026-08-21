import { useState } from "react";
import { useGetUsersQuery, UserItem } from "@/entities/user";
import { UserCreateForm } from "@/features/user/create";
import { useDeleteUser } from "@/features/user/delete";
import { useRestoreUser } from "@/features/user/restore";
import { UserEditForm } from "@/features/user/update";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/entities/session";
export function UserList() {
  const currentUser = useSelector(selectAuthUser);
  const [isCreating, setIsCreating] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const { deleteUser } = useDeleteUser();
  const { restoreUser } = useRestoreUser();
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
  const onDelete = async (id) => {
    await deleteUser(id);
  };
  const onRestore = async (id) => {
    await restoreUser(id);
  };
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {!isCreating && (
        <button
          onClick={() => setIsCreating(true)}
          className="mb-4 inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5
text-sm font-medium text-white transition-colors hover:bg-indigo-500"
        >
          Додати користувача
        </button>
      )}
      {isCreating && (
        <UserCreateForm
          onCreated={() => setIsCreating(false)}
          onCancel={() => setIsCreating(false)}
        />
      )}
      {users.map((user) =>
        editingUserId === user.id ? (
          <UserEditForm
            key={user.id}
            user={user}
            onUpdated={() => setEditingUserId(null)}
            onCancel={() => setEditingUserId(null)}
          />
        ) : (
          <UserItem
            key={user.id}
            user={user}
            onDelete={onDelete}
            onRestore={onRestore}
            canDelete={user.id !== currentUser.id}
            onEdit={() => setEditingUserId(user.id)}
          />
        ),
      )}
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
