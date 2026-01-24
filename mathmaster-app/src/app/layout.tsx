import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "MathMaster - Master Mathematics Together",
  description: "An interactive learning platform created by students, for students. Unlock the beauty of numbers through peer tutoring and collaboration.",
  keywords: ["math", "tutoring", "learning", "education", "calculus", "algebra"],
};

// Script to apply theme before React hydrates (prevents flash)
const themeInitScript = `
  (function() {
    try {
      const savedTheme = localStorage.getItem('mm_theme') || 'light';
      const savedColor = localStorage.getItem('mm_color_theme') || 'violet';
      
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.style.background = '#0f172a';
        document.body.style.color = '#f8fafc';
      }
      
      document.documentElement.classList.add('theme-' + savedColor);
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen`}>
        <TopBar />
        <main className="pb-24 md:pb-0">
          {children}
        </main>
        <Navbar />
      </body>
    </html>
  );
}
