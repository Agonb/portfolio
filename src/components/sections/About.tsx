import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";
import { siteConfig, heroImages } from "@/data/siteData";

export default function About() {
  const aboutText = "With over a decade of experience in digital design, I specialize in creating compelling visual narratives that bridge the gap between creativity and functionality. My passion lies in crafting user experiences that not only look stunning but also drive meaningful engagement and business results.";

  return (
    <section className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
          >
            {/* Section Label */}
            <div className="mb-8">
              <div className="text-[#888888] text-sm uppercase tracking-widest mb-2">
                //Who Am I
              </div>
              <div className="text-[#888888] text-lg">Since 2000</div>
            </div>

            {/* Main Heading */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tight leading-tight"
              variants={fadeInUp}
              custom={0.2}
            >
              More About greyola©
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-[#e8e8e8] text-lg leading-relaxed mb-12"
              variants={fadeInUp}
              custom={0.4}
            >
              {aboutText}
            </motion.p>

            {/* Download Resume Button */}
            <motion.a
              href={siteConfig.resumeUrl}
              className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-[#e8e8e8] transition-colors duration-300 group"
              variants={fadeInUp}
              custom={0.6}
            >
              <span>Download Resume</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right: Portrait Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
          >
            <div className="relative">
              <img
                src={heroImages.portrait}
                alt="About Portrait"
                className="w-full h-[600px] object-cover rounded-lg"
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg" />
              
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#222222] rounded-lg -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}