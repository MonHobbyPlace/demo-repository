import { ToastContainer } from "react-toastify";
import AuthProvider from "../provider/AuthProvider";
import { Header } from "./_components/Header";
import { Navigation } from "./_components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <AuthProvider>
        <>
          <Header />
          <div className="flex">
            <Navigation />
            {children}
          </div>
        </>
      </AuthProvider>
    </div>
  );
}
