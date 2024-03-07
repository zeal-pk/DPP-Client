import { Inter } from "next/font/google";
import { StrictMode, Suspense } from "react";
import Loading from "./loading";
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
        <body className={inter.className}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </body>
      </html>
    </StrictMode>
  );
}
