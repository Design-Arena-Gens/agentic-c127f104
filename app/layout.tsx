import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imran AI Seven - Surat Drive Challenge",
  description: "Join Imran on an exciting drive through Surat's iconic locations",
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
