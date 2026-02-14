import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";
import { services } from "@/data/siteData";

export default function Services() {
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
            <div className="text-[#888888] uppercase tracking-widest mb-2"
                 style={{ 
                   fontFamily: '"Inter Display", system-ui, sans-serif',
                   fontSize: '12px',
                   fontWeight: 400
                 }}>
              //Services
            </div>
            <div className="text-[#888888]"
                 style={{ 
                   fontFamily: '"Inter Display", system-ui, sans-serif',
                   fontSize: '16px',
                   fontWeight: 500
                 }}>Fast Delivery</div>
          </motion.div>

          <motion.h2
            className="text-white uppercase"
            style={{ 
              fontFamily: '"Clash Display", system-ui, sans-serif',
              fontSize: '40px',
              fontWeight: 600,
              lineHeight: '30px',
              letterSpacing: '-1.3px'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
          >
            Pro Services
          </motion.h2>
        </div>

        {/* Services List */}
        <motion.div
          className="space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group border-b border-[#222222] py-8 hover:border-[#444444] transition-colors duration-300 cursor-pointer"
              variants={fadeInUp}
              custom={index * 0.1}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                <h3 className="text-white group-hover:text-[#e8e8e8] transition-colors duration-300"
                    style={{ 
                      fontFamily: '"Clash Display", system-ui, sans-serif',
                      fontSize: '32px',
                      fontWeight: 600,
                      lineHeight: '30px',
                      letterSpacing: '-1.3px'
                    }}>
                  {service.title}
                </h3>
                <p className="text-[#888888] group-hover:text-[#aaaaaa] transition-colors duration-300 md:text-right"
                   style={{ 
                     fontFamily: '"Inter Display", system-ui, sans-serif',
                     fontSize: '18px',
                     fontWeight: 500,
                     lineHeight: '22px'
                   }}>
                  {service.subtitle}
                </p>
              </div>
              
              {/* Hover indicator */}
              <div className="w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500 ease-out mt-2" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          custom={0.8}
        >
          <p className="text-[#888888] mb-8"
             style={{ 
               fontFamily: '"Inter Display", system-ui, sans-serif',
               fontSize: '18px',
               fontWeight: 500,
               lineHeight: '22px'
             }}>
            Ready to bring your vision to life? Let's discuss your project.
          </p>
          <button className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full hover:bg-[#e8e8e8] transition-colors duration-300 group"
                  style={{ 
                    fontFamily: '"Inter Display", system-ui, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500
                  }}>
            <span>Get Started</span>
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