import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SafeVision AI - AI-Powered Workplace Safety Monitoring",
  description: "Detect PPE violations in real-time using Edge AI, Computer Vision and YOLOv8. Transform workplace safety with AI-powered monitoring.",
  keywords: "Industrial Safety AI, PPE Detection, Worker Safety, Computer Vision, YOLOv8, Edge AI",
  openGraph: {
    title: "SafeVision AI - AI-Powered Workplace Safety Monitoring",
    description: "Detect PPE violations in real-time using Edge AI, Computer Vision and YOLOv8.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
