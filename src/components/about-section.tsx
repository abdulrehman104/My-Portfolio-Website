"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { experiences, skillGroups } from "@/lib/constants";

export const AboutSection = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="py-12">
      {/* About Section */}
      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start mb-12">
        <h2 className="text-white text-lg font-semibold uppercase tracking-wider mb-4 text-center md:text-start">
          02. <span className="text-[#8A7FF8]">Get To Know About Me</span>
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-x-6">
          <Image
            src="/web/personal.jpg"
            alt="Personal Picture"
            width={600}
            height={600}
            className="object-contain rounded-lg"
          />
          <div className="text-gray-300 space-y-4 text-base md:text-lg lg:w-[1000px]">
            <p className="bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-transparent bg-clip-text">
              ━━━━━━━━━━━━━━━━
            </p>
            <p className="space-y-4">
              <span className="block">
                Hi, my name is Abdul Rehman, and I’m a 19-year-old Full Stack
                Developer passionate about building dynamic, responsive,
                scalable web applications. My journey in software development
                started with a curiosity about how modern apps are built, and
                over the years, I’ve honed my skills to create efficient,
                user-centric solutions.
              </span>
              <span className="block">
                I specialize in working with cutting-edge technologies like
                Next.js, React.js, TypeScript, and Node.js, crafting seamless
                front-end interfaces and robust back-end systems. Whether it’s
                developing new features, integrating APIs, or optimizing
                performance, I thrive on solving challenges and delivering
                quality results.
              </span>
              <span className="block">
                In addition to developing traditional applications, I’ve been
                exploring AI integration in full-stack apps, leveraging
                automation and data-driven solutions to enhance functionality
                and user experiences.
              </span>
              <span className="block">
                Here are a few technologies and tools I’ve been working with
                recently:
              </span>
            </p>
            <div>
              <li>JavaScript & TypeScript (ES6+)</li>
              <li>React.js / Next.js</li>
              <li>PostgreSQL & Prisma</li>
              <li>Backend with Next.js</li>
              <li>Fast API and SQL Model</li>
            </div>
            <p>
              I’m dedicated to continuous learning and always strive to stay
              ahead of the curve in the ever-evolving world of web development.
              My goal is to build solutions that work efficiently and leave a
              lasting impact on users.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full py-12 md:w-[1000px]">
        <h2 className="text-[#8A7FF8] text-lg font-semibold tracking-wider mb-4 text-center md:text-start">
          Where I&apos;ve Worked
        </h2>

        <div className="flex flex-col md:flex-row gap-8 min-h-[450px]">
          {/* Tab list */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-[#1c1544]">
            {experiences.map((experience, i) => (
              <button
                key={i}
                onClick={() => setSelectedTab(i)}
                className={`px-4 py-3 text-lg font-bold font-mono text-left whitespace-nowrap transition-colors hover:bg-[#1c1544] hover:text-[#8A7FF8] relative
                  ${selectedTab === i ? "text-[#8A7FF8]" : "text-gray-400"}`}
              >
                {experience.name}
                {selectedTab === i && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute md:left-0 bottom-0 md:bottom-auto md:h-full w-full md:w-[2px] h-[2px] bg-[#8A7FF8] md:-ml-[1px]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 min-w-0">
            {experiences.map((experience, i) => (
              <div
                key={i}
                className={`${selectedTab === i ? "block" : "hidden"}`}
              >
                <h3 className="text-gray-200 font-mono text-2xl mb-1 font-semibold">
                  {experience.role}{" "}
                  <span className="text-[#8A7FF8]">@ {experience.name}</span>
                </h3>
                <p className="text-gray-400 font-mono mb-6 font-bold">
                  {experience.start} - {experience.end}
                </p>
                <ul className="space-y-4 text-[18px]">
                  {experience.shortDescription.map((description, index) => (
                    <li key={index} className="flex gap-3 text-gray-300 group">
                      <span className="text-[#8A7FF8] mt-1.5 font-mono">▹</span>
                      <span className="text-gray-400 font-mono leading-relaxed">
                        {description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-12">
        <h2 className="text-[#8A7FF8] text-lg font-semibold tracking-wider mb-4 text-center md:text-start">
          What are my Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="relative group rounded-2xl bg-gradient-to-b from-[#1A123E] to-[#0A051E] p-8 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {group.skills.map((skill, idx) => (
                  <Button
                    key={idx}
                    variant="ghost"
                    className="flex items-center p-4 rounded-lg border border-muted-foreground text-gray-400 text-base font-semibold "
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
