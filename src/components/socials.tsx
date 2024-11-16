import Link from "next/link";
import {
  RiYoutubeLine,
  RiFacebookLine,
  RiTwitterLine,
  RiInstagramLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiLinkedinLine,
  RiGithubLine,
  RiThreadsLine,
  RiTwitterXLine,
} from "react-icons/ri";

export const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="#"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href="#"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href="#"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterXLine />
      </Link>
      <Link
        href="#"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href="#"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>

      <Link
        href="#"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiThreadsLine />
      </Link>
    </div>
  );
};
