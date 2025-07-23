import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Peter Yelton - Design Engineer",
  description: "Design Engineer specializing in AI integration, full-stack development, and 3D design",
  keywords: ["design engineer", "AI integration", "full-stack development", "3D design", "portfolio"],
  authors: [{ name: "Peter Yelton" }],
  creator: "Peter Yelton",
  openGraph: {
    title: "Peter Yelton - Design Engineer",
    description: "Design Engineer specializing in AI integration, full-stack development, and 3D design",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Yelton - Design Engineer",
    description: "Design Engineer specializing in AI integration, full-stack development, and 3D design",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
