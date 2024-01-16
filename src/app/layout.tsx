import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { css } from "@mui/zero-runtime";
import "@mui/zero-runtime/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={css({
        color: "red",
      })}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
