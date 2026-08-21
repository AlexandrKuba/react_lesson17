import { UserForm } from "@/entities/user";
import { useUpdateUser } from "../model/useUpdateUser";
export function UserEditForm({ user, onUpdated, onCancel }) {
  const { updateUser, isLoading } = useUpdateUser();
  const handleSubmit = async (values) => {
    await updateUser(user.id, values);
    onUpdated?.();
  };
  return (
    <UserForm
      initialValues={{
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
      }}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      isLoading={isLoading}
      submitLabel="Зберегти"
      isEdit={true}
    />
  );
}
