import type { Metadata } from "next";
import "../sass/_global.scss";
import Navbar from "@/ui/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Studio Colore",
  description: "GRAPHIC & PRINT SOLUTIONS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
