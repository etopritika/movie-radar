import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "400 500",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "400 500",
});

export const metadata: Metadata = {
  title: "Movie-Radar",
  description: "Find your movie easy!",
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
        <div className="container px-5 pt-5 sm:px-8 sm:pt-8">
          <Header />
          <main className="pt-5 pb-10 sm:pt-8 sm:pb-[60px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
