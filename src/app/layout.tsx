import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esto es: Challenge",
  description: "Challenge solution by @LeooR22",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-800 text-white p-4 md:px-10 h-[60px]">
          <h1 className="text-xl md: text-2xl font-bold">LOGO</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
