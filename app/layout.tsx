import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import NavSideBar from "@/components/navi_side_bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Philippine Institute for Student Democracy (PISD) Inc.",
  openGraph: {
    title: "PISD Website",
    description: "Official website of PISD",
    url: "https://pisd.org.ph/",
    siteName: "PISD",
    images: [
      {
        url: "/img/placard_photo.jpg", // must be in /public
        width: 1200,
        height: 630,
        alt: "PISD Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
        
        {children}
        <Toaster />
        <Footer/>
      </body>
    </html>
  );
}
