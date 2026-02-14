import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, wordReveal, wordChild, viewportOnce } from "@/lib/animations";
import { approaches } from "@/data/siteData";

export default function Approach() {
  const introText = "I believe in creating designs that are not only visually stunning but also functionally effective. My approach is centered around understanding user needs and business objectives to deliver solutions that drive results.".split(" ");

  return (
    <section className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Layout: Label | Text | Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left: Section Label */}
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
          >
            <div className="text-[#888888] text-sm uppercase tracking-widest mb-2">
              //Approach
            </div>
            <h2 className="text-white text-2xl font-bold">Three Phases</h2>
          </motion.div>

          {/* Center: Intro Text with word reveal */}
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={wordReveal}
          >
            <p className="text-[#e8e8e8] text-lg leading-relaxed">
              {introText.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2"
                  variants={wordChild}
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>

          {/* Right: Numbered Cards */}
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
          >
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.number}
                className="bg-[#141414] border border-[#222222] p-4 rounded-lg hover:bg-[#1a1a1a] transition-colors"
                variants={fadeInUp}
                custom={index * 0.1}
              >
                <div className="text-[#888888] text-sm font-mono mb-1">
                  {approach.number}
                </div>
                <h3 className="text-white font-semibold text-sm">
                  {approach.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom: Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.number}
              className="bg-[#141414] border border-[#222222] p-8 rounded-lg hover:bg-[#1a1a1a] transition-colors group"
              variants={fadeInUp}
              custom={index * 0.2}
            >
              <div className="text-[#888888] text-lg font-mono mb-4">
                {approach.number}
              </div>
              <h3 className="text-white text-xl font-bold mb-4 group-hover:text-white transition-colors">
                {approach.title}
              </h3>
              <p className="text-[#888888] leading-relaxed">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}