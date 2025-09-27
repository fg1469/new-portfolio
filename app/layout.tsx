import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fritzgerald Gabriel - Engineering & Design Portfolio",
  description: "Portfolio of Fritzgerald Gabriel - Engineering, Design, and Problem-Solving",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-game-dark font-game text-game-light antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}