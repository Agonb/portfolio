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
          <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black tracking-[-0.08em] text-white leading-none">
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
                <div className="text-[#888888] text-xs uppercase tracking-wider">
                  {badge.label}
                </div>
                <div className="text-[#e8e8e8] text-sm font-medium">
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