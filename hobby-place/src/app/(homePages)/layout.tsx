"use client";
import { PetPostProvider } from "../provider/PetPostProvider";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <div
      className={`relative h-screen overflow-hidden  bg-[#e1f7f5] ${
        pathName.includes("hospital/") || pathName.includes("homePage/")
          ? "p-0"
          : "p-5"
      }`}
    >
      {!pathName.includes("hospital/") && !pathName.includes("homePage/") && (
        <Header />
      )}

      <PetPostProvider>
        <div
          className={`${
            pathName.includes("hospital/") && pathName.includes("homePage/")
              ? "h-screen"
              : "h-[90%]"
          } `}
        >
          {children}
        </div>
      </PetPostProvider>
      <div className="sticky bottom-0">
        {!pathName.includes("hospital/") && !pathName.includes("homePage/") && (
          <Footer />
        )}
      </div>
    </div>
  );
}
