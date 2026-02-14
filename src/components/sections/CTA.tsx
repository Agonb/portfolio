import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";
import { siteConfig, heroImages } from "@/data/siteData";

export default function CTA() {
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
            {/* Main Heading */}
            <motion.h2
              className="text-white mb-12 uppercase"
              style={{ 
                fontFamily: '"Clash Display", system-ui, sans-serif',
                fontSize: '40px',
                fontWeight: 600,
                lineHeight: '30px',
                letterSpacing: '-1.3px'
              }}
              variants={fadeInUp}
              custom={0.2}
            >
              LET'S WORK<br />TOGETHER
            </motion.h2>

            {/* CTA Button */}
            <motion.div
              className="mb-12"
              variants={fadeInUp}
              custom={0.4}
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-4 bg-white text-black px-8 py-6 rounded-full hover:bg-[#e8e8e8] transition-colors duration-300 group"
                style={{ 
                  fontFamily: '"Inter Display", system-ui, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500
                }}
              >
                <span>CONTACT NOW</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-hover:translate-x-2 transition-transform duration-300"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-[#e8e8e8] text-lg leading-relaxed mb-8"
              variants={fadeInUp}
              custom={0.6}
            >
              Ready to bring your vision to life? I'm here to help you create something extraordinary. 
              Let's discuss your project and explore how we can work together to achieve your goals.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-4"
              variants={fadeInUp}
              custom={0.8}
            >
              <div>
                <span className="text-[#888888] text-sm uppercase tracking-wider">Email</span>
                <div className="text-white text-lg font-medium">{siteConfig.email}</div>
              </div>
              
              <div>
                <span className="text-[#888888] text-sm uppercase tracking-wider">Location</span>
                <div className="text-white text-lg font-medium">{siteConfig.location}</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6 mt-8"
              variants={fadeInUp}
              custom={1.0}
            >
              {siteConfig.socials.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
                >
                  {social.name}
                </a>
              ))}
            </motion.div>
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
                alt="Contact Portrait"
                className="w-full h-[600px] object-cover rounded-lg"
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg" />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-[#222222] rounded-lg" />
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-lg opacity-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}