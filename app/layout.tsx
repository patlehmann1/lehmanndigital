import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lehmann Digital | Full-Stack Software Development",
  description: "Senior full-stack developer with 7+ years experience specializing in ASP.NET, .NET, and TypeScript development. Building internal tools and maintaining systems for small to mid-sized businesses.",
  keywords: ["ASP.NET developer", ".NET development", "full-stack TypeScript", "React developer", "Angular developer", "software consultant"],
  authors: [{ name: "Lehmann Digital" }],
  openGraph: {
    title: "Lehmann Digital | Full-Stack Software Development",
    description: "Senior full-stack developer specializing in ASP.NET, .NET, and TypeScript development for small to mid-sized businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
