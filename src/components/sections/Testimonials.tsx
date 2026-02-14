import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, viewportOnce } from "@/lib/animations";
import { testimonials } from "@/data/siteData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={slideInLeft}
        >
          <div className="text-[#888888] text-sm uppercase tracking-widest mb-2">
            //Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight">
            CLIENT LOVE
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full">
                  <div className="max-w-4xl mx-auto text-center px-8">
                    {/* Quote */}
                    <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-12">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <div className="text-white font-semibold text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-[#888888] text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#141414] border border-[#222222] text-white p-3 rounded-full hover:bg-[#1a1a1a] hover:border-[#444444] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#141414] border border-[#222222] text-white p-3 rounded-full hover:bg-[#1a1a1a] hover:border-[#444444] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>

        {/* Dot Pagination */}
        <motion.div
          className="flex justify-center mt-12 space-x-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          custom={0.3}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white w-8"
                  : "bg-[#444444] hover:bg-[#666666]"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}