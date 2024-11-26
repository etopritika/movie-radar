import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "@/components/ui/toaster";

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
        <ModalProvider>
          <div className="container px-5 pt-5 sm:px-8 sm:pt-8">
            <Header />
            <main className="pb-10 pt-5 sm:pb-[60px] sm:pt-8">{children}</main>
          </div>
        </ModalProvider>
        <Toaster />
      </body>
    </html>
  );
}
