"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

function Page() {
  const { isLoading, isLoggedIn, logOut } = useAuth();
  const router = useRouter();

  const onLogout = () => {
    logOut();

    router.push("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1>My Beautiful Landing Page</h1>

        {isLoading ? (
          <h1>Loading...</h1>
        ) : isLoggedIn ? (
          <div>
            <button
              onClick={() => router.push(`/app`)}
              className="pt-2 pb-2 pr-4 pl-4 bg-teal-500 text-white rounded-md mt-4 hover:bg-teal-600 "
            >
              Go to App
            </button>

            <button
              onClick={onLogout}
              className="pt-2 pb-2 pr-4 pl-4 bg-red-500 text-white rounded-md mt-4 hover:bg-red-600 "
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => router.push(`/login`)}
            className="pt-2 pb-2 pr-4 pl-4 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600"
          >
            Go to Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Page;
