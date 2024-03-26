import { Footer, Navbar } from "./components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel UX/UI Page",
  description: "Travel UX/UI Page for camping by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <main className="relative overflow-hidden">{children}</main>
      <Footer />
    </html>
  );
}
