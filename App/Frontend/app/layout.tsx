import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "One Window | Study Abroad Guidance",
  description:
    "Expert study abroad guidance, destination discovery and personalised counselling from One Window.",
  icons: {
    icon: "/one-window-orbital-logo.png",
    shortcut: "/one-window-orbital-logo.png",
    apple: "/one-window-orbital-logo.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{const t=localStorage.getItem('ow-theme');document.documentElement.dataset.theme=location.pathname.startsWith('/landingpage/')?'light':t==='dark'?'dark':'light'}catch{document.documentElement.dataset.theme='light'}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
