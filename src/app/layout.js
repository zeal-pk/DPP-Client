import { Inter } from "next/font/google";
import { StrictMode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZEAIT",
  description: "Created by ZealIT Digital Solutions",
};

export default function RootLayout({ children }) {
  return (
    <StrictMode>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StrictMode>
  );
}
