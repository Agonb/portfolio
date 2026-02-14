import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";
import { projects } from "@/data/siteData";

export default function Portfolio() {
  const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <section className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <motion.div
            className="mb-8 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
          >
            <div className="text-[#888888] text-sm uppercase tracking-widest mb-2">
              //Portfolio
            </div>
            <div className="text-white text-xl font-medium">2013-2025</div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
          >
            Latest Portfolio
          </motion.h2>
        </div>

        {/* Project Grid */}
        <div className="space-y-8">
          {/* Row 1: Two cards side by side */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </motion.div>

          {/* Row 2: One full-width card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            custom={0.2}
          >
            <ProjectCard project={projects[2]} index={2} fullWidth />
          </motion.div>

          {/* Row 3: Two cards side by side */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            custom={0.4}
          >
            {projects.slice(3, 5).map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index + 3} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, fullWidth = false }: { 
  project: typeof projects[0]; 
  index: number;
  fullWidth?: boolean;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-[#141414] border border-[#222222]"
      variants={fadeInUp}
      custom={index * 0.1}
    >
      <Link to={`/work/${project.slug}`} className="block">
        {/* Image with hover zoom */}
        <div className="relative overflow-hidden h-[400px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        </div>

        {/* Title + Category Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-[#888888] text-sm uppercase tracking-wider">
                {project.category}
              </p>
            </div>

            {/* Two arrow icons */}
            <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}