import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trade for Europe - Shop European Alternatives",
  description:
    "Discover and support European companies. Find quality alternatives across technology, fashion, automotive, food, home, beauty, and travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
