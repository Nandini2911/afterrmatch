import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aftermatch",
  description: "Luxury Creative Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body 
        className="antialiased"
        suppressHydrationWarning={true}     // ← Yeh line add kar do
      >
        {children}
      </body>
    </html>
  );
}