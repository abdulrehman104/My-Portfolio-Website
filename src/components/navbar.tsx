import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-[#8A7FF8] text-2xl font-bold flex items-center gap-x-2"
        >
          <Image src="/web/logo.svg" alt="Portfolio LOGO" width={50} height={50} />
          <span>A.Rehman</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((item) => (
            <Link
              href={item.link}
              className={"text-white hover:text-[#8A7FF8] text-lg space-x-2"}
              key={item.number}
            >
              <span className="text-[#8A7FF8] font-semibold">
                {item.number}
              </span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link href="/contact-us">
            <Button className="bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF] text-white hover:opacity-80">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-[#0f0f2d]"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.number}
                    href={item.link}
                    className="text-white hover:text-[#8A7FF8] text-lg flex items-center space-x-2 p-2"
                  >
                    <span className="text-[#8A7FF8] font-semibold">
                      {item.number}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                ))}
                <Link href="/contact-us" className="mt-4">
                  <Button className="w-full bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF] text-white hover:opacity-80">
                    Contact Us
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
