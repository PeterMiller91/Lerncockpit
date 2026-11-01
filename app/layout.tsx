import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SC1 Lerncockpit",
  description: "Nova Reach Sales Playbook – interaktive Lernapp",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
