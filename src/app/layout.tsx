import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import SEO from "@/components/SEO";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const seo = SEO({
    title: "Killing Twins",
    description:
      "Experience the raw energy of Killing Twins, a death thrash metal band from Metro Vancouver.",
    imageRef: "/homepage-banner.jpg",
    tags: "killingtwins, killingtwinsband, band, metal, music",
  });

  return seo;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-dvh bg-neutral-950 text-white">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
