import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Approach from "@/components/sections/Approach";
import ImageCarousel from "@/components/sections/ImageCarousel";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FullWidthImage from "@/components/sections/FullWidthImage";
import Voice from "@/components/sections/Voice";
import Stats from "@/components/sections/Stats";
import Experience from "@/components/sections/Experience";
import Awards from "@/components/sections/Awards";
import Pricing from "@/components/sections/Pricing";
import StackTools from "@/components/sections/StackTools";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Approach Section */}
      <Approach />
      
      {/* Image Carousel */}
      <ImageCarousel />
      
      {/* Portfolio Section */}
      <Portfolio />
      
      {/* About Section */}
      <About />
      
      {/* Services Section */}
      <Services />
      
      {/* Full-width Image Break */}
      <FullWidthImage imageIndex={0} />
      
      {/* Voice/Statement Section */}
      <Voice />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Second Image Carousel (using gallery images) */}
      <ImageCarousel />
      
      {/* Awards Section */}
      <Awards />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Second Full-width Image Break */}
      <FullWidthImage imageIndex={1} />
      
      {/* Stack & Tools Section */}
      <StackTools />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* CTA Section */}
      <CTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}