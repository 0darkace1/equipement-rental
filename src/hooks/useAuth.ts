import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const mockUser = {
  id: 233,
  username: "admin",
  email: "admin@example.com",
  password: "admin",
};

const useAuth = () => {
  const { getItem, setItem, removeItem } = useLocalStorage();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    getItem("user").then((storeUser) => {
      if (storeUser) {
        setUser(storeUser);
        setIsLoggedIn(true);
      } else {
        setUser({});
        setIsLoggedIn(false);
      }

      setIsLoading(false);
    });
  }, []);

  const signIn = async (username: string, password: string) => {
    if (!username || !password) {
      return null;
    }

    if (username !== mockUser.username || password !== mockUser.password) {
      return null;
    }

    await setItem("user", mockUser);
    return mockUser;
  };

  const logOut = async () => {
    removeItem("user");
  };

  return { user, isLoggedIn, isLoading, signIn, logOut };
};

export default useAuth;
