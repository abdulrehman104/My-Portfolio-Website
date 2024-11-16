import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { TopLeftImage } from "@/components/top-left-image";
import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";
import { TransitionWrap } from "@/components/transition-wrap";

const inter = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "My Portfolio Website",
  description: "Full Stack Developer, AbdulRehman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`page bg-site text-white bg-cover bg-no-repeat ${inter.className} font-sora relative`}
      >
        <TransitionWrap>
          <TopLeftImage />
          <Navbar />
          <Header />
          {children}
        </TransitionWrap>
      </body>
    </html>
  );
}
