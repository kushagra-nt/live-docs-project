import { useAppSelector } from "@/app/hooks";
import { Button } from "./ui/button";

export default function Navbar() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="w-full sm:w-[90%] mx-auto mb-10 sm:my-7 sm:rounded-xl py-3 px-8 text-white bg-blue-500 shadow-lg flex justify-between">
      <h1 className="text-lg font-bold flex items-center">AppAvengers</h1>
      <Button variant="secondary">{user != null ? "Logout" : "Login"}</Button>
    </div>
  );
}
