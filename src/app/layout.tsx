import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ThemeSwitch from "@/components/theme/ThemeSwitch";

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
        <Providers>
          <div className="bg-gray-800 text-white p-4 md:px-10 h-[60px]">
            <div className="flex items-center justify-between">
              <h1 className="text-xl md: text-2xl font-bold">LOGO</h1>
              <ThemeSwitch />
            </div>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
