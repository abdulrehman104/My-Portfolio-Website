import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiVisualstudiocode,
  SiWordpress,
  SiFigma,
  SiCanva,
  SiShadcnui,
  SiFastapi,
  SiSupabase,
  SiClerk,
  SiStripe,
  SiSanity,
  SiFramer,
  SiAuth0,
  SiContentful,
} from "react-icons/si";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { BiLogoFirebase } from "react-icons/bi";
import { Globe, Layout, Database, Server, Eye, Boxes } from "lucide-react";
import Image from "next/image";

export const navLinks = [
  {
    number: "01.",
    name: "Home",
    link: `/`,
  },
  {
    number: "02.",
    name: "About",
    link: `/`,
  },
  {
    number: "03.",
    name: "Services",
    link: `/services`,
  },
  {
    number: "04.",
    name: "Work",
    link: `/my-work`,
  },
  {
    number: "05.",
    name: "Testimonials",
    link: `/`,
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-600 w-8 h-8" /> }, // Corrected to official orange
      { name: "CSS", icon: <SiCss3 className="text-blue-600 w-8 h-8" /> }, // Corrected to official blue
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-500 w-8 h-8" />, // Corrected to official yellow
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-700 w-8 h-8" />, // Corrected to official TypeScript blue
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-teal-500 w-8 h-8" />, // Corrected to official teal
      },
      {
        name: "React Js",
        icon: <SiReact className="text-cyan-500 w-8 h-8" />, // Corrected to official cyan
      },
      {
        name: "Next Js",
        icon: <SiNextdotjs className="text-black w-8 h-8" />, // Corrected to official black
      },
      {
        name: "Zustand",
        icon: (
          <Image src="/icon/zustand.png" alt="Zustand" width={20} height={20} />
        ),
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-600 w-8 h-8" />, // Corrected to official purple
      },
      {
        name: "Shadcn UI",
        icon: <SiShadcnui className="text-gray-500 w-8 h-8" />, // Adjusted for a consistent UI
      },
      {
        name: "Material UI",
        icon: (
          <Image
            src="/icon/materialui.svg"
            alt="Material UI"
            width={20}
            height={20}
          />
        ),
      },
      {
        name: "Motion",
        icon: <SiFramer className="text-black w-8 h-8" />, // Corrected to official black
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Python",
        icon: <SiPython className="text-blue-500 w-8 h-8" />, // Corrected to official Python blue
      },
      {
        name: "Fast API",
        icon: <SiFastapi className="text-teal-600 w-8 h-8" />, // Corrected to official FastAPI teal
      },
      {
        name: "Next.Js API",
        icon: <SiNextdotjs className="text-black w-8 h-8" />, // Matches official black
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500 w-8 h-8" />, // Corrected to official MongoDB green
      },
      {
        name: "Firebase",
        icon: <BiLogoFirebase className="text-yellow-500 w-8 h-8" />, // Corrected to official Firebase yellow
      },
      {
        name: "Supabase",
        icon: <SiSupabase className="text-green-500 w-8 h-8" />, // Corrected to official Supabase green
      },
      {
        name: "Neon",
        icon: (
          <Image src="/icon/neon.svg" alt="Neon DB" width={20} height={20} />
        ),
      },
      {
        name: "Stripe",
        icon: <SiStripe className="text-indigo-500 w-8 h-8" />, // Corrected to official Stripe indigo
      },
      {
        name: "Clerk",
        icon: <SiClerk className="text-blue-600 w-8 h-8" />, // Adjusted for consistency
      },
      {
        name: "Next Auth",
        icon: <SiAuth0 className="text-orange-600 w-8 h-8" />, // Adjusted for official Auth0 orange
      },
      {
        name: "SQL Model",
        icon: (
          <Image
            src="/icon/sqlmodel.png"
            alt="SQL Model"
            width={20}
            height={20}
          />
        ),
      },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-600 w-8 h-8" /> }, // Corrected to official Git orange
      {
        name: "GitHub",
        icon: <SiGithub className="text-black w-8 h-8" />, // Matches official black
      },
      { name: "Vercel", icon: <SiVercel className="text-black w-8 h-8" /> }, // Matches official black
      {
        name: "Netlify",
        icon: <SiNetlify className="text-teal-500 w-8 h-8" />, // Corrected to official teal
      },
      {
        name: "VS Code",
        icon: <SiVisualstudiocode className="text-blue-500 w-8 h-8" />, // Corrected to official VS Code blue
      },
      {
        name: "WordPress",
        icon: <SiWordpress className="text-blue-700 w-8 h-8" />, // Corrected to official WordPress blue
      },
      {
        name: "Sanity",
        icon: <SiSanity className="text-red-500 w-8 h-8" />, // Corrected to official Sanity red
      },
      {
        name: "Contentful",
        icon: <SiContentful className="text-red-500 w-8 h-8" />, // Corrected to official Sanity red
      },
      { name: "Figma", icon: <SiFigma className="text-pink-600 w-8 h-8" /> }, // Corrected to official Figma pink
      { name: "Canva", icon: <SiCanva className="text-blue-500 w-8 h-8" /> }, // Corrected to official Canva blue
    ],
  },
];

export const experiences = [
  {
    name: "Seven Solution",
    role: "CEO & Founder",
    url: "https://www.linkedin.com/in/abdulrehman104/",
    start: "December 2024",
    end: "Present",
    shortDescription: [
      "Established and grew a company providing innovative full-stack development and AI solutions.",
      "Led a team of developers and designers to deliver high-quality software for clients worldwide.",
      "Focused on incorporating the latest technologies like AI and cloud computing into solutions.",
      "Spearheaded strategic partnerships and collaborations to drive business growth.",
    ],
  },
  {
    name: "Upwork",
    role: "Full Stack Developer",
    url: "https://www.upwork.com/freelancers/~01366e75e7b399839f",
    start: "July 2024",
    end: "Present",
    shortDescription: [
      "Delivered customized full-stack applications using modern technologies like React, Node.js, and TypeScript.",
      "Optimized and maintained large codebases, enhancing functionality and performance.",
      "Collaborated with global clients to develop scalable and efficient software solutions.",
      "Provided technical guidance to team members and ensured project deadlines were met.",
    ],
  },
  {
    name: "Techverse51",
    role: "Co-Founder",
    url: "https://www.linkedin.com/company/techverse51/",
    start: "March 2024",
    end: "August 2024",
    shortDescription: [
      "Co-founded a tech startup focused on delivering cutting-edge web and mobile applications.",
      "Oversaw product development and deployment processes to meet client expectations.",
      "Led a cross-functional team to ensure smooth operations and high-quality deliverables.",
      "Played a key role in securing investments and building client relationships.",
    ],
  },
  {
    name: "Icon Design",
    role: "Front-end Development",
    url: "",
    start: "November 2023",
    end: "July 2024",
    shortDescription: [
      "Developed responsive and dynamic user interfaces for web applications using React and TypeScript.",
      "Collaborated with designers to create visually appealing and user-friendly websites.",
      "Ensured code quality and best practices by writing maintainable and scalable code.",
      "Implemented SEO-friendly features and optimized website performance.",
    ],
  },
  {
    name: "Icon Designs",
    role: "Sales & Lead Generation",
    url: "",
    start: "July 2022",
    end: "February 2022",
    shortDescription: [
      "Identified and pursued new sales opportunities, driving revenue growth.",
      "Built relationships with potential clients and converted leads into long-term partnerships.",
      "Developed and implemented strategies to achieve monthly sales targets.",
      "Conducted market research to identify trends and opportunities for business expansion.",
    ],
  },
];

export const servicesIcon = [
  {
    slug: "tech_stack",
    icon: Globe,
  },
  {
    slug: "frontend_development",
    icon: Layout,
  },
  {
    slug: "back_end",
    icon: Database,
  },
  {
    icon: Eye,
    slug: "api_integration",
  },
  {
    icon: Boxes,
    slug: "seo_web_performance",
  },
  {
    icon: Server,
    slug: "deployment_hosting",
  },
];
interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Working with [Developer's Name] was a fantastic experience. They delivered a complete web application that exceeded our expectations in both functionality and design. Their expertise in both front-end and back-end development ensured a seamless user experience. Highly recommend!",
    author: "Jackie Williams",
    role: "Founder & CEO",
    company: "Dualix",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    text: "Working with [Developer's Name] was a fantastic experience. They delivered a complete web application that exceeded our expectations in both functionality and design. Their expertise in both front-end and back-end development ensured a seamless user experience. Highly recommend!",
    author: "Steve Jonas",
    role: "Founder & CEO",
    company: "Dualix",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    text: "Working with [Developer's Name] was a fantastic experience. They delivered a complete web application that exceeded our expectations in both functionality and design. Their expertise in both front-end and back-end development ensured a seamless user experience. Highly recommend!",
    author: "Sarah Parker",
    role: "Founder & CEO",
    company: "Dualix",
    image: "/placeholder.svg",
  },
];

export const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/abdulrehman104/",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/abdulrehman104",
    label: "LinkedIn",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/abdulrehman1104/",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/abdul_rehman_104/",
    label: "Instagram",
  },
  { icon: FaTwitter, href: "https://x.com/AbdulReehman104", label: "Twitter" },
  {
    icon: FaThreads,
    href: "https://threads.net/@abdul_rehman_104",
    label: "Threads",
  },
];