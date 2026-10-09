import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Valley School | Learn. Lead. Thrive.",
  description: "School website and digital management demo for pitching.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}