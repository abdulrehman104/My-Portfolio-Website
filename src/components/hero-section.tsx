import Link from "next/link";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <main className="relative flex items-center justify-center min-h-screen py-8">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

      {/* Content */}
      <div className="text-center space-y-10">
        {/* Heading */}

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 space-y-3 md:space-y-8">
          <span className="block">Your Vision, My Expertise –</span>
          <span className="block bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-transparent bg-clip-text">
            Let’s Build Something{" "}
            <span className="pt-2 md:pt-6 block">Extraordinary.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
          I combine design, development, and strategy to build fast, scalable,
          and visually stunning web applications that align with your goals.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Button className="bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF] text-white hover:opacity-80 md:w-[20%]">
            <Link
              href={"https://calendly.com/abdulreehman/free-consultation-call"}
            >
              Schedule a Meeting
            </Link>
          </Button>
          <Button className="bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF] text-white hover:opacity-80 md:w-[20%]">
            <Link href={"/contact-us"}>Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

// import Image from "next/image";
// import { Button } from "./ui/button";

// export const HeroSection = () => {
//   return (
//     <main className="py-12 pt-36 relative">
//       <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

//       <div className="flex flex-col items-center">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 space-y-2 md:space-y-6">
//           <span className="block">Your Vision, My Expertise –</span>
//           <span className="block bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-transparent bg-clip-text">
//             Let’s Build Something{" "}
//             <span className="pt-2 md:pt-6 block">Extraordinary.</span>
//           </span>
//         </h1>
//         <p className="text-sm md:text-base  lg:text-xl sm:px-4 text-white/80">
//           I combine design, development, and strategy to build fast, scalable,
//           and visually stunning <br className="hidden md:block" /> web
//           applications that align with your goals.
//         </p>
//         <div className="flex items-center gap-x-2">
//           <Button className="bg-purple-600 w-[20%]">Lets Shedule a Meeting</Button>
//           <Button className="bg-purple-600 w-[20%]">Contact US</Button>
//         </div>
//         {/* <div>
//           <Image
//             src="/web/hero.png"
//             alt="Hero Image"
//             width={1000}
//             height={1000}
//             className="pt-10"
//           />
//         </div> */}
//       </div>
//     </main>
//   );
// };
