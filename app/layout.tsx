import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Window | Study Abroad Guidance",
  description: "Expert study abroad guidance, destination discovery and personalised counselling from One Window.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
