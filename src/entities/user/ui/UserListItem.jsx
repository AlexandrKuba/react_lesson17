export function UserListItem({ user }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 py-3 last:border-b-0">
      <div>
        <span className="font-medium text-gray-900">{user.name}</span>
        <span className="ml-2 text-sm text-gray-500">{user.email}</span>
      </div>
      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
        {user.role}
      </span>
    </div>
  );
}
