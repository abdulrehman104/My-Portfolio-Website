import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { RightSide } from "@/components/right-side";
import { LeftSide } from "@/components/left-side";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { Toaster } from "@/components/ui/toaster";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
      <body className={`${jakarta.className} bg-[#05051D] text-white`}>
        <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </div>
        <div className="container mx-auto p-4 md:px-12 md:py-6">
          <Navbar />
          {children}
          <Toaster />
          <FooterSection />
        </div>
        <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </div>
      </body>
    </html>
  );
}
