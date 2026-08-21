import { UserForm } from "@/entities/user";
import { useCreateUser } from "../model/useCreateUser";
export function UserCreateForm({ onCreated, onCancel }) {
  const { createUser, isLoading } = useCreateUser();
  const handleSubmit = async (values) => {
    await createUser(values);
    onCreated?.();
  };
  return (
    <UserForm
      onSubmit={handleSubmit}
      onCancel={onCancel}
      isLoading={isLoading}
      submitLabel="Створити"
    />
  );
}
