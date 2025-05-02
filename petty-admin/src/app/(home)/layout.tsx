"use client";
import { ToastContainer } from "react-toastify";
import AuthProvider from "../provider/AuthProvider";
import { Header } from "./_components/Header";
import { Navigation } from "./_components/Navigation";
import { PetCategoryProvider } from "../provider/PetCategoryProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ToastContainer position="top-right" autoClose={3000} />
        <AuthProvider>
          <>
            <PetCategoryProvider>
              <Header />
              <div className="flex">
                <Navigation />
                {children}
              </div>
            </PetCategoryProvider>
          </>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}
