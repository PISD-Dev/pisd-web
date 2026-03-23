
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/navi_bar";
import NavSideBar from "@/components/navi_side_bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavSideBar />
        <NavBar/>
        {children}

      </div>

  );
}
