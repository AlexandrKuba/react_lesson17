import { UserList } from "@/widgets/userList";
export default function UsersPage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-gray-900">Користувачі</h1>
      <UserList />
    </div>
  );
}
