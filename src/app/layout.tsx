import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/nav";
import { SITE_DATA } from "./internal/core/domain/static-data/site-data";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: SITE_DATA.title,
  description: "A simple video downloader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav></Nav>

        {children}
      </body>
    </html>
  );
}
