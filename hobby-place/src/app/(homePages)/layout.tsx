import { PetPostProvider } from "../provider/PetPostProvider";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-screen overflow-hidden p-5 bg-[#e1f7f5]">
      <Header />
      <PetPostProvider>
        <div className="h-[90%]">{children}</div>
      </PetPostProvider>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
}
