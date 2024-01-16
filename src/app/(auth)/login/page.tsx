"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {
  const { signIn } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState({ message: "" });

  const handleLogin = async () => {
    if (!username || !password) {
      return setError({
        message: "Nom d'utilisateur ou mot de passe non renseignée",
      });
    }

    console.log(username, password);

    const user = await signIn(username, password);

    if (!user) {
      return setError({
        message: "Nom d'utilisateur ou mot de passe incorrecte",
      });
    }

    router.push("/app");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="flex flex-col items-center">
        <div className="mb-2 p-8 rounded-md bg-white w-80">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-lg font-bold">Se connecter</h1>
          </div>

          <div className="mb-2">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nom d'utilisateur
            </label>
            <input
              id="username"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="mt-2 text-sm text-center text-red-600">
              {error && error.message}
            </p>

            <button
              onClick={handleLogin}
              className="pt-2 pb-2 pr-4 pl-4 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600"
            >
              Connexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
