import { socialLinks } from "@/lib/constants";
import Link from "next/link";

export const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-[#8A7FF8]">
      <div className="flex flex-col gap-6 items-center">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            className="relative group"
          >
            <span
              className="w-10 h-10 text-lg bg-[#0f0f2d] rounded-full inline-flex items-center justify-center 
              hover:text-white cursor-pointer transition-all duration-300 relative z-10
              before:content-[''] before:absolute before:w-full before:h-full before:rounded-full
              before:bg-gradient-to-br before:from-[#8A7FF8] before:to-[#FF3BFF] before:opacity-0
              before:transition-opacity before:duration-300 group-hover:before:opacity-100 before:-z-10"
            >
              <social.icon />
            </span>
            {/* Glow effect */}
            <div className="absolute -inset-2 rounded-full bg-[#8A7FF8] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
          </Link>
        ))}
      </div>
      {/* Vertical line */}
      <div className="w-[2px] h-32 bg-gradient-to-b from-[#8A7FF8] to-transparent" />
    </div>
  );
};
