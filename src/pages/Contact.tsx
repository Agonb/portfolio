import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer, viewportOnce } from "@/lib/animations";
import { siteConfig, heroImages } from "@/data/siteData";
import Navbar from "@/components/Navbar";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
              variants={fadeInUp}
            >
              RING A BELL!
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-[#b3b3b3] max-w-2xl mx-auto"
              variants={fadeInUp}
              custom={0.2}
            >
              Reach out and let's create something amazing together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              variants={fadeInUp}
            >
              FILL THIS FORM OUT
            </motion.h2>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-8"
              variants={fadeInUp}
              custom={0.2}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b border-[#333] pb-3 text-[#e8e8e8] placeholder-[#666] focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b border-[#333] pb-3 text-[#e8e8e8] placeholder-[#666] focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message*"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-[#333] pb-3 text-[#e8e8e8] placeholder-[#666] focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isFormSubmitted}
                className="w-full py-4 bg-transparent border border-[#333] text-[#e8e8e8] font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isFormSubmitted ? "Thank you! Message sent successfully." : "Submit Now"}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Portrait Image */}
      <section className="py-16">
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <img
            src={heroImages.portrait}
            alt="Portrait"
            className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover"
          />
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Follow Me */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <h3 className="text-xl font-bold mb-6">FOLLOW ME</h3>
              <div className="space-y-4">
                {siteConfig.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                  >
                    <span className="font-bold uppercase">{social.name}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Current Location */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={0.1}
            >
              <h3 className="text-xl font-bold mb-6">CURRENT LOCATION</h3>
              <div className="space-y-2 text-[#b3b3b3]">
                <p>{siteConfig.address.street}</p>
                <p>{siteConfig.address.city}</p>
                <p>{siteConfig.address.country}</p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={0.2}
            >
              <h3 className="text-xl font-bold mb-6">PHONE</h3>
              <div className="space-y-4">
                {siteConfig.phone.map((phone, index) => (
                  <div key={index}>
                    <p className="text-sm text-[#666] mb-1">{phone.country}</p>
                    <p className="font-mono">{phone.number}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Email Me */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={0.3}
            >
              <h3 className="text-xl font-bold mb-6">EMAIL ME</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={`mailto:${siteConfig.email2}`}
                  className="block hover:text-white transition-colors"
                >
                  {siteConfig.email2}
                </a>
              </div>
            </motion.div>
          </div>
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