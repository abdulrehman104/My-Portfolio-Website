"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Circles } from "@/components/circles";
import { Avatar } from "@/components/avatar";
import { fadeIn } from "@/lib/variants";
import CountUp from "react-countup";
import { aboutData } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function About() {
  const [activeTab, setActiveTab] = useState("credentials");

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* =========== Avatar Image ===========  */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* =========== Text Section ===========  */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Transforming <span className="text-accent">Ideas </span> Into
            <span className="text-accent">Reality</span> Through Code.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I<span>&apos;</span>m a passionate Full Stack Developer with
            expertise in creating modern, user-friendly, and high-performing
            websites. I help businesses and startups turn their ideas into
            reality using the latest technologies.
          </motion.p>

          {/* =========== Counters ===========  */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* =========== Experience ===========  */}
              <div className="relative flex-1 w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              {/* =========== Clients ===========  */}
              <div className="relative flex-1 w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>

              {/* =========== Projects ===========  */}
              <div className="relative flex-1 w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========== Tabs Section ===========  */}
        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item.title}
                  className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                    activeTab === item.title
                      ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                      : ""
                  }`}
                >
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {aboutData.map((item, index) => (
              <TabsContent
                key={index}
                value={item.title}
                className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start"
              >
                {item.info.map((info, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    <div className="font-light mb-2 md:mb-0">{info.title}</div>
                    <div className="hidden md:flex">-</div>

                    <div>
                      {
                        // @ts-ignore
                        info.stage
                      }
                    </div>
                    {
                      // @ts-ignore
                      info.icons && (
                        <div className="flex gap-x-4">
                          {
                            // @ts-ignore
                            info.icons.map((icon, iconIndex) => (
                              <div
                                key={iconIndex}
                                className="text-2xl text-white"
                              >
                                {icon}
                              </div>
                            ))
                          }
                        </div>
                      )
                    }
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
