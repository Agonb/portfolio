import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer, viewportOnce } from "@/lib/animations";
import { projects, faqs } from "@/data/siteData";
import Navbar from "@/components/Navbar";
import { ExternalLink, ChevronDown, ArrowUpRight } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-[#b3b3b3] mb-6">The project you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="px-6 py-3 border border-[#333] hover:bg-white hover:text-black transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Get other projects for related section (filter out current)
  const relatedProjects = projects.filter(p => p.slug !== slug).slice(0, 2);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p
              className="text-sm text-[#666] mb-4"
              variants={fadeInUp}
            >
              February 12, 2025
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={fadeInUp}
              custom={0.1}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-[#b3b3b3] mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
              custom={0.2}
            >
              {project.description}
            </motion.p>
            <motion.a
              href={project.liveUrl}
              className="inline-flex items-center space-x-2 px-6 py-3 border border-[#333] hover:bg-white hover:text-black transition-all duration-300"
              variants={fadeInUp}
              custom={0.3}
              whileHover={{ scale: 1.05 }}
            >
              <span>LIVE PREVIEW</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Project Info Grid */}
      <section className="py-16 border-t border-[#222222]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp}>
              <p className="text-sm text-[#666] mb-2">Year</p>
              <p className="font-bold text-xl">{project.year}</p>
            </motion.div>
            <motion.div variants={fadeInUp} custom={0.1}>
              <p className="text-sm text-[#666] mb-2">Client</p>
              <p className="font-bold text-xl">{project.client}</p>
            </motion.div>
            <motion.div variants={fadeInUp} custom={0.2}>
              <p className="text-sm text-[#666] mb-2">Type</p>
              <p className="font-bold text-xl">{project.type}</p>
            </motion.div>
            <motion.div variants={fadeInUp} custom={0.3}>
              <p className="text-sm text-[#666] mb-2">Duration</p>
              <p className="font-bold text-xl">{project.duration}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeInUp}
            >
              RESEARCH
            </motion.h2>
            <motion.p
              className="text-lg text-[#b3b3b3] leading-relaxed"
              variants={fadeInUp}
              custom={0.2}
            >
              {project.sections.research}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeInUp}
            >
              DESIGN
            </motion.h2>
            <motion.p
              className="text-lg text-[#b3b3b3] leading-relaxed"
              variants={fadeInUp}
              custom={0.2}
            >
              {project.sections.design}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16">
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover"
          />
        </motion.div>
      </section>

      {/* Development Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeInUp}
            >
              DEVELOPMENT
            </motion.h2>
            <motion.p
              className="text-lg text-[#b3b3b3] leading-relaxed"
              variants={fadeInUp}
              custom={0.2}
            >
              {project.sections.development}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeInUp}
            >
              CONCEPT
            </motion.h2>
            <motion.p
              className="text-lg text-[#b3b3b3] leading-relaxed"
              variants={fadeInUp}
              custom={0.2}
            >
              {project.sections.concept}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* More Works Marquee */}
      <section className="py-16 border-t border-[#222222] overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <Link
              key={i}
              to="/"
              className="inline-flex items-center space-x-4 px-8 text-6xl md:text-8xl font-bold hover:text-white/70 transition-colors"
            >
              <span>MORE WORKS</span>
              <ArrowUpRight className="w-12 h-12" />
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Related Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            RELATED PROJECTS
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {relatedProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                variants={fadeInUp}
                custom={index * 0.2}
                className="group cursor-pointer"
              >
                <Link to={`/project/${project.slug}`}>
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#666] text-sm">{project.category}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t border-[#222222]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index * 0.1}
                className="border-b border-[#222222] last:border-b-0"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-white transition-colors"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform flex-shrink-0 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pb-6"
                  >
                    <p className="text-[#b3b3b3] leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-[#222222]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8"
              variants={fadeInUp}
            >
              LET'S WORK TOGETHER
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              custom={0.2}
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 border border-[#333] text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                <span>CONTACT NOW</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4 md:mb-0"
              variants={fadeInUp}
            >
              GREYOLA
            </motion.h2>
            <motion.div
              className="text-center md:text-right text-[#666]"
              variants={fadeInUp}
              custom={0.2}
            >
              <p className="mb-2">© 2025 Greyola. All rights reserved.</p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-[#e8e8e8] hover:text-white transition-colors"
              >
                Back to top ↑
              </button>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}