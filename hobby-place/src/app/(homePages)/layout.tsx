"use client";
import { PetPostProvider } from "../provider/PetPostProvider";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { usePathname } from "next/navigation";
import { ProfileProvider } from "../provider/ProfileProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const pathName = usePathname();
  return (
    <div
      className={`relative h-screen overflow-hidden  bg-[#e1f7f5] ${
        pathName.includes("profile") ||
        pathName.includes("hospital/") ||
        pathName.includes("homePage/")
          ? "p-0"
          : "p-5"
      } `}
    >
      <QueryClientProvider client={queryClient}>
        <ProfileProvider>
          <PetPostProvider>
            {!pathName.includes("profile") &&
              !pathName.includes("service") &&
              !pathName.includes("hospital/") &&
              !pathName.includes("homePage/") && <Header />}

            <div className={`h-full`}>{children}</div>
            <div
              className={`sticky w-full bottom-0 ${
                pathName.includes("profile") && "p-5"
              }`}
            >
              {!pathName.includes("hospital/") &&
                !pathName.includes("homePage/") && <Footer />}
            </div>
          </PetPostProvider>
        </ProfileProvider>
      </QueryClientProvider>
    </div>
  );
}
