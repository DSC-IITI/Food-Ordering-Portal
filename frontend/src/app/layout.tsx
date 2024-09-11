import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IITI Foodie",
  description:
    "Food delivery site made by group ( Prince Kumar, Sameer, Tripti, Tanvi, Anurag",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-orange-50">{children}</main>
      </body>
    </html>
  );
}
