import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/client/Header";
import Footer from "@/components/client/Footer";

export const metadata: Metadata = {
  title: "Property Listing Platform",
  description: "Property Listing Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
