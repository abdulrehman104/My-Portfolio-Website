"use client";

import { motion } from "framer-motion";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import { fadeIn } from "@/lib/variants";

export default function Testimonials() {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* =========== Title ===========  */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What Clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* =========== Slider ===========  */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialsSlider />
        </motion.div>
      </div>
    </div>
  );
}
