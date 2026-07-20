import type { Metadata, Viewport } from "next";
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
  title: "Tan Jia Chin | Software Engineer",
  description:
    "Singapore-based software engineer with 9 years of experience across enterprise applications, industrial systems, cloud delivery, security, and intelligent automation.",
  keywords: [
    "Software Engineer",
    "Singapore",
    ".NET",
    "C#",
    "Azure",
    "AWS",
    "Enterprise Software",
    "CI/CD",
    "Automation",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Tan Jia Chin" }],
  creator: "Tan Jia Chin",
  openGraph: {
    type: "website",
    locale: "en_SG",
    title: "Tan Jia Chin | Software Engineer",
    description:
      "Building reliable software for enterprise and industrial operations. 9 years across enterprise applications, cloud delivery, security, and automation.",
    siteName: "Tan Jia Chin Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Tan Jia Chin | Software Engineer",
    description:
      "Building reliable software for enterprise and industrial operations.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "facebook-domain-verification": "4qvvkw4zzlbs10jr3oazefvjbjsmwb",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f5f7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
