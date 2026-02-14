import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/lib/animations";
import { siteConfig, heroImages } from "@/data/siteData";

export default function Hero() {
  const badges = [
    { label: "Location", value: siteConfig.location, icon: "📍" },
    { label: "Status", value: siteConfig.availability, icon: "✅" },
    { label: "Role", value: siteConfig.role, icon: "💼" },
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Massive GREYO Text */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.2}
        >
          <h1 className="hero-title text-[20rem] md:text-[24rem] lg:text-[25rem] text-white clamp(10rem,20vw,25rem)" 
              style={{ 
                fontFamily: '"Clash Display", system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 0.8,
                letterSpacing: '-3px',
                fontSize: 'clamp(10rem, 20vw, 25rem)'
              }}>
            GREYO
          </h1>
        </motion.div>

        {/* Info Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.4}
        >
          {badges.map((badge, index) => (
            <div key={badge.label} className="flex items-center space-x-3 bg-[#141414] px-6 py-3 rounded-full">
              <motion.div
                className="text-lg"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {badge.icon}
              </motion.div>
              <div>
                <div className="text-[#888888] uppercase tracking-wider" 
                     style={{ 
                       fontFamily: '"Inter Display", system-ui, sans-serif',
                       fontSize: '12px',
                       fontWeight: 400
                     }}>
                  {badge.label}
                </div>
                <div className="text-[#e8e8e8]" 
                     style={{ 
                       fontFamily: '"Inter Display", system-ui, sans-serif',
                       fontSize: '14px',
                       fontWeight: 500
                     }}>
                  {badge.value}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Portrait Image */}
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0.6}
        >
          <img
            src={heroImages.portrait}
            alt="Portfolio Portrait"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}