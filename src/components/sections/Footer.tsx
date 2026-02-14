import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#0a0a0a] border-t border-[#222222] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {/* Large Brand Text */}
          <motion.h2
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-12 uppercase tracking-tight"
            variants={fadeInUp}
            custom={0.2}
          >
            GREYOLA
          </motion.h2>

          {/* Footer Bottom */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#222222]"
            variants={fadeInUp}
            custom={0.4}
          >
            {/* Copyright */}
            <div className="text-[#888888] text-sm mb-4 md:mb-0">
              ©2024 MANDRO DESIGN
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-[#888888] hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider group"
            >
              <span>Back To Top</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:-translate-y-1 transition-transform duration-300"
              >
                <path
                  d="M12 19V5M5 12l7-7 7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}