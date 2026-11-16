import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boishakhi | Portfolio",
  description:
    "Personal portfolio of Boishakhi - Aspiring Web Developer & Diploma in Computer Science & Technology student.",
  keywords: [
    "Boishakhi",
    "Portfolio",
    "Web Developer",
    "Frontend",
    "Computer Science",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Boishakhi" }],
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#08090d] text-white min-h-screen antialiased selection:bg-purple-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
