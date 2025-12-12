import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShareWorld - Build AI Workflows That Work for You",
  description: "ShareWorld helps individuals and teams automate content creation, data processing, and daily operations with AI-powered workflows—no coding required.",
  keywords: ["AI workflows", "automation", "no-code", "AI agents", "workflow builder", "productivity"],
  authors: [{ name: "ShareWorld LLC" }],
  openGraph: {
    title: "ShareWorld - Build AI Workflows That Work for You",
    description: "Automate content creation, data processing, and daily operations with AI-powered workflows—no coding required.",
    type: "website",
    locale: "en_US",
    siteName: "ShareWorld",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShareWorld - Build AI Workflows That Work for You",
    description: "Automate content creation, data processing, and daily operations with AI-powered workflows—no coding required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
