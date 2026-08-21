import { MainMenu } from "./MainMenu";
import { UserInfo } from "./UserInfo";
export function Header() {
  return (
    <header
      className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200
bg-white px-6 py-3 shadow-sm"
    >
      <MainMenu />
      <UserInfo />
    </header>
  );
}
