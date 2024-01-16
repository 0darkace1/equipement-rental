"use client";

import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";
import LoadingPage from "./LoadingPage";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, isLoggedIn } = useAuth();

  if (!isLoading && !isLoggedIn) {
    redirect(`/login`);
  }

  return isLoading ? <LoadingPage /> : <div>{children}</div>;
}
