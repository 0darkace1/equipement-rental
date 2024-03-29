"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const Page = () => {
  const { logOut } = useAuth();
  const router = useRouter();

  const onLogout = () => {
    logOut();

    router.replace("/");
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="bg-white p-12">
        <h1 className="">App Homepage</h1>

        <button
          onClick={onLogout}
          className="pt-2 pb-2 pr-4 pl-4 bg-red-500 text-white rounded-md mt-4 hover:bg-red-600 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Page;
