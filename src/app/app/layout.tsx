import AuthProvider from "@/components/AuthProvider";
import AppLayout from "@/components/app/Layout/AppLayout";

export default function AppRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <AppLayout>{children}</AppLayout>
    </AuthProvider>
  );
}
