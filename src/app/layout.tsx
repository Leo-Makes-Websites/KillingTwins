import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar"; // Import directly without dynamic import
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="http://localhost:8097"></Script>
      </head>
      <body className={inter.className}>
        <main className="min-h-dvh bg-neutral-950 text-white">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
