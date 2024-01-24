import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ThemeCustomization from "@themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personnel Library",
  description: "Generated By Orcalo Holdings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeCustomization>{children}</ThemeCustomization>
      </body>
    </html>
  );
}
