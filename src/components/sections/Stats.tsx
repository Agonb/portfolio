import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeInUp, slideInLeft, viewportOnce } from "@/lib/animations";
import { stats } from "@/data/siteData";

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  index: number;
}

function Counter({ end, suffix, label, index }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      // Start counting animation
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = end / steps;
      const stepDuration = duration / steps;
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, end, controls]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      custom={index * 0.1}
    >
      <motion.div
        className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-[#888888] text-sm uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={slideInLeft}
        >
          <div className="mb-8 lg:mb-0">
            <div className="text-[#888888] text-sm uppercase tracking-widest mb-2">
              //Stats
            </div>
            <div className="text-[#888888] text-lg">Fun Facts</div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Counter
              key={stat.label}
              end={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </div>

        {/* Decorative Line */}
        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[#222222] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  );
}