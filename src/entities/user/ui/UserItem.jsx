export function UserItem({ user, onEdit, onDelete, onRestore, canDelete }) {
  return (
    <div
      className={
        "flex gap-5 items-center justify-between border-b border-gray-100 py-3 last:border-b-0" +
        (user.isFired ? " bg-red-50" : "")
      }
    >
      <div className="flex-1 text-left">
        <span className="font-medium text-gray-900">{user.name}</span>
        <span className="ml-2 text-sm text-gray-500">{user.email}</span>
      </div>
      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
        {user.isFired ? "Звільнено" : user.role}
      </span>
      {user.isFired ? (
        <div className="min-w-[220px] justify-around">
          <button
            onClick={() => onRestore(user.id)}
            className="rounded-md bg-green-50 px-3 py-1.5 text-sm font-medium text-green-600 transitioncolors hover:bg-green-100 "
          >
            Відновити
          </button>
        </div>
      ) : (
        <div className="mt-3 flex gap-2 min-w-[220px] justify-around">
          <button
            onClick={() => onEdit(user)}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transitioncolors hover:bg-gray-50"
          >
            Редагувати
          </button>
          {canDelete && (
            <button
              onClick={() => onDelete(user.id)}
              className="rounded-md bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transitioncolors hover:bg-red-100"
            >
              Видалити
            </button>
          )}
        </div>
      )}
    </div>
  );
}
