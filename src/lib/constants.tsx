import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { FaHtml5, FaCss3, FaReact, FaFigma, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTypescript,
  SiJavascript,
  SiShadcnui,
  SiClerk,
  SiPrisma,
  SiBisecthosting,
} from "react-icons/si";
import { RxDesktop, RxPencil2, RxRocket } from "react-icons/rx";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

export const aboutData = [
  {
    title: "credentials",
    info: [
      {
        title: "Currently learning Cloud Native Gen AI - PIAIC, Karachi",
        stage: "2024 - 2025",
      },
      {
        title: "Learned Web Development - PIAIC, Karachi",
        stage: "2023",
      },
      {
        title: "Pre-Engineering - Forman College Nazimabad, Karachi",
        stage: "2023",
      },
      {
        title:
          "Matriculation in Computer Science  - New Heaven Academy, Karachi",
        stage: "2021",
      },
    ],
  },
  {
    title: "skills",
    info: [
      {
        title: "Front-End",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <SiJavascript key="js" />,
          <SiTypescript key="ts" />,
          <FaReact key="react" />,
          <SiFramer key="framer" />,
          <SiShadcnui key="shadcnui" />,
        ],
      },
      {
        title: "Back-End",
        icons: [
          <SiNextdotjs key="nextjs" />,
          <SiClerk key="clerk" />,
          <FaDatabase key="database" />,
          <SiPrisma key="prisma" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Web Developer - Freelance", stage: "2024 - Present" },
      { title: "Co Founder - TechVerse51", stage: "6-month - 2023" },
      { title: "Sales & Lead Generation", stage: "4-month - 2023" },
    ],
  },
];

export const serviceData = [
  {
    icon: <GoProjectRoadmap />,
    title: "Tech Stack Guidance",
    description: "Help you choose the right technologies for scalable apps.",
  },
  {
    icon: <RxPencil2 />,
    title: "Website Design",
    description: "Create visually appealing and user-friendly website designs.",
  },
  {
    icon: <RxDesktop />,
    title: "Website Development",
    description: "Develop responsive, modern, and feature-rich websites.",
  },
  {
    icon: <MdOutlineIntegrationInstructions />,
    title: "API Integration",
    description: "Integrate third-party APIs to enhance website functionality.",
  },
  {
    icon: <AiOutlineDeploymentUnit />,
    title: "Deployment & Hosting",
    description:
      "Deploy websites on reliable platforms for optimal performance.",
  },
  {
    icon: <RxRocket />,
    title: "Website SEO",
    description:
      "Optimize websites for better rankings and faster performance.",
  },
];

export const workSliderData = {
  slides: [
    {
      items: [
        {
          title: "Job-Portal",
          href: "https://github.com/abdulrehman104/My-Job-Portal",
          image: "/work/job-portal-web.jpg",
        },
        {
          title: "Ecommerse Client",
          href: "https://github.com/abdulrehman104/Ecommerce-Client",
          image: "/work/ecommerse-web.jpg",
        },
        {
          title: "Admin-Dashboard",
          href: "https://github.com/abdulrehman104/Ecommerce-Admin-Dashboard",
          image: "/work/admin-dashboard-web.jpg",
        },
        {
          title: "Aagency-Management-System",
          href: "https://github.com/abdulrehman104/Agency-Management-System",
          image: "/work/agency-management-system.jpg",
        },
      ],
    },
    {
      items: [
        {
          title: "Huzaifa-Website",
          href: "https://huzaifa-agency-website.vercel.app/",
          image: "/work/huzaifa-web.jpg",
        },
        {
          title: "Magical-AI",
          href: "https://magical-ai-nine.vercel.app",
          image: "/work/magical-ai-web.jpg",
        },
        {
          title: "Bank-Application",
          href: "https://bank-application-ochre.vercel.app",
          image: "/work/bank-web.jpg",
        },
        {
          title: "Data-Dashboard",
          href: "https://data-dashboard-pi.vercel.app/",
          image: "/work/data-dashboard-web.jpg",
        },
      ],
    },
    {
      items: [
        {
          title: "Portfolio",
          href: "https://blog-website-eta-nine.vercel.app",
          image: "/work/portfolio-web.png",
        },
        {
          title: "Blog-Website",
          href: "https://blog-website-eta-nine.vercel.app",
          image: "/work/blog-web.jpg",
        },
        {
          title: "UI-UX",
          href: "https://ui-ux-website-sooty.vercel.app/",
          image: "/work/uiux-web.jpg",
        },
        {
          title: "log-Website",
          href: "https://blog-website-eta-nine.vercel.app",
          image: "/thumb4.jpg",
        },
      ],
    },
  ],
};

export const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];
