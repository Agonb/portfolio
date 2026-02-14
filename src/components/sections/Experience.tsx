import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";
import { experience } from "@/data/siteData";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0); // First item expanded by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <motion.div
            className="mb-8 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
          >
            <div className="text-[#888888] text-sm uppercase tracking-widest mb-2">
              //Experience
            </div>
            <div className="text-[#888888] text-lg">2013 - Present</div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
          >
            EXPERIENCE
          </motion.h2>
        </div>

        {/* Accordion List */}
        <motion.div
          className="space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="border-b border-[#222222]"
              variants={fadeInUp}
              custom={index * 0.1}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-8 px-0 text-left hover:bg-[#141414] transition-colors duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#e8e8e8] transition-colors">
                      {exp.company}
                    </h3>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-[#888888] text-sm hidden md:block">
                      {exp.period}
                    </span>
                    <motion.svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#888888]"
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </div>
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 px-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="text-[#888888] text-sm uppercase tracking-wider mb-1">
                            Role
                          </div>
                          <div className="text-white font-medium">
                            {exp.role}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-[#888888] text-sm uppercase tracking-wider mb-1">
                            Period
                          </div>
                          <div className="text-white font-medium">
                            {exp.period}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-[#888888] text-sm uppercase tracking-wider mb-1">
                            Description
                          </div>
                          <div className="text-[#e8e8e8] leading-relaxed">
                            {exp.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}