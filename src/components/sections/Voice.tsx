import { motion } from "framer-motion";
import { wordReveal, wordChild, fadeInUp, viewportOnce } from "@/lib/animations";
import { voiceImages } from "@/data/siteData";

export default function Voice() {
  const voiceText = "Design is more than aesthetics—it's about creating meaningful connections between people and products. Every pixel, every interaction, every moment should tell a story that resonates with the human experience. I believe in design that doesn't just look good, but feels right.".split(" ");

  return (
    <section className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <div className="text-[#888888] text-sm uppercase tracking-widest mb-8">
            //Voice Of Grey
          </div>
        </motion.div>

        {/* Large Text with Word Reveal */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={wordReveal}
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed">
            {voiceText.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-3"
                variants={wordChild}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* Image Grid Layout: 2 small + 1 tall + 2 small + 1 tall */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-6 gap-4 h-[400px] md:h-[500px]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {/* First small image */}
          <motion.div
            className="col-span-1 md:col-span-1"
            variants={fadeInUp}
            custom={0.1}
          >
            <img
              src={voiceImages[0]}
              alt="Voice gallery 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Second small image */}
          <motion.div
            className="col-span-1 md:col-span-1"
            variants={fadeInUp}
            custom={0.2}
          >
            <img
              src={voiceImages[1]}
              alt="Voice gallery 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* First tall image */}
          <motion.div
            className="col-span-2 md:col-span-1 row-span-1 md:row-span-1"
            variants={fadeInUp}
            custom={0.3}
          >
            <img
              src={voiceImages[2]}
              alt="Voice gallery 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Third small image */}
          <motion.div
            className="col-span-1 md:col-span-1"
            variants={fadeInUp}
            custom={0.4}
          >
            <img
              src={voiceImages[3]}
              alt="Voice gallery 4"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Fourth small image */}
          <motion.div
            className="col-span-1 md:col-span-1"
            variants={fadeInUp}
            custom={0.5}
          >
            <img
              src={voiceImages[4]}
              alt="Voice gallery 5"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Second tall image */}
          <motion.div
            className="col-span-2 md:col-span-1 row-span-1 md:row-span-1"
            variants={fadeInUp}
            custom={0.6}
          >
            <img
              src={voiceImages[5]}
              alt="Voice gallery 6"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}