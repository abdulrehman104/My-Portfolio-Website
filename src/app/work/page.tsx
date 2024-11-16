"use client";

import { Circles } from "@/components/circles";
import { Blub } from "@/components/blub";
import { WorkSlider } from "@/components/WorkSlider";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* =========== Text Section ===========  */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              adipisci dicta architecto nisi est explicabo non vero voluptate
              reiciendis? Debitis!
            </motion.p>
          </div>

          {/* =========== Service Slider ===========  */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Blub />
    </div>
  );
}
