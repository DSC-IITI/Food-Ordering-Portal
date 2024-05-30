import "./globals.css";
import Header from "@/components/header/header";
import Head from "next/head";

export const metadata = {
  title: "Food Ordering Portal",
  description: "Done by Prince, Sameer, Tripti, Anurag, Tanvi",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="h-screen w-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
