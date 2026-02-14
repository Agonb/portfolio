import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, slideInLeft, viewportOnce } from "@/lib/animations";
import { faqs } from "@/data/siteData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={slideInLeft}
        >
          <div className="text-[#888888] text-sm uppercase tracking-widest mb-4">
            //FAQ
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            QUESTIONS
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#141414] border border-[#222222] rounded-lg overflow-hidden"
              variants={fadeInUp}
              custom={index * 0.1}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-6 text-left hover:bg-[#1a1a1a] transition-colors duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#e8e8e8] transition-colors pr-4">
                    {faq.question}
                  </h3>
                  
                  <motion.div
                    className="flex-shrink-0"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#888888] group-hover:text-white transition-colors"
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-[#222222]">
                        <p className="text-[#e8e8e8] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          custom={0.8}
        >
          <p className="text-[#888888] text-lg mb-8">
            Still have questions? I'd love to help.
          </p>
          <button className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-[#e8e8e8] transition-colors duration-300 group">
            <span>Get in Touch</span>
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
          </button>
        </motion.div>
      </div>
    </section>
  );
}