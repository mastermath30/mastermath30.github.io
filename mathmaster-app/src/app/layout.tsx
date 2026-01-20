import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "MathMaster - Master Mathematics Together",
  description: "An interactive learning platform created by students, for students. Unlock the beauty of numbers through peer tutoring and collaboration.",
  keywords: ["math", "tutoring", "learning", "education", "calculus", "algebra"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen bg-[#fafafa]`}>
        <Navbar />
        <main className="pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
