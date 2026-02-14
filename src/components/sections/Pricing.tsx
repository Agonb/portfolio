import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";
import { pricing } from "@/data/siteData";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

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
            <div className="text-[#888888] text-sm uppercase tracking-widest mb-2">
              //Pricing
            </div>
            <div className="text-[#888888] text-lg">Best Plans</div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
          >
            PRICING
          </motion.h2>
        </div>

        {/* Monthly/Annual Toggle */}
        <motion.div
          className="flex justify-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-4 bg-[#141414] p-2 rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual
                  ? "bg-white text-black"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                isAnnual
                  ? "bg-white text-black"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              Annual
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-[#141414] rounded-lg p-8 ${
                plan.highlight
                  ? "border-2 border-white"
                  : "border border-[#222222]"
              } hover:bg-[#1a1a1a] transition-colors duration-300`}
              variants={fadeInUp}
              custom={index * 0.1}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-white text-2xl font-bold mb-4">{plan.name}</h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-black text-white">
                  ${plan.price}
                </span>
                <span className="text-[#888888] text-lg">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-[#888888] mb-8 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="text-green-400 mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-[#e8e8e8] text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-full font-semibold transition-colors duration-300 ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-[#e8e8e8]"
                    : "border border-[#222222] text-white hover:bg-white hover:text-black"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          custom={0.5}
        >
          <p className="text-[#888888] text-sm">
            All plans include 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}