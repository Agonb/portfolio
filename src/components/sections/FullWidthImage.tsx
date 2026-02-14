import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { galleryImages } from "@/data/siteData";

interface FullWidthImageProps {
  imageIndex?: number;
}

export default function FullWidthImage({ imageIndex = 0 }: FullWidthImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative h-[80vh] overflow-hidden bg-[#0a0a0a]">
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <img
          src={galleryImages[imageIndex] || galleryImages[0]}
          alt="Full width showcase"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Optional content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* You can add content here if needed */}
        </motion.div>
      </div>
    </section>
  );
}