import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#222222]"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Live Clock */}
          <div className="text-[#e8e8e8] font-mono tracking-wider"
               style={{ 
                 fontFamily: '"Inter Display", system-ui, sans-serif',
                 fontSize: '12px',
                 fontWeight: 400
               }}>
            {time}
          </div>

          {/* Center: 4 Dots Logo */}
          <div className="flex items-center space-x-1">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Right: Contact Button */}
          <Link
            to="/contact"
            className="px-4 py-2 border border-[#222222] rounded-full text-[#e8e8e8] hover:border-white hover:bg-white/5 transition-all duration-300"
            style={{ 
              fontFamily: '"Inter Display", system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 400
            }}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}