"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import EnvironmentalSection from "@/components/sections/EnvironmentalSection";
import SocialSection from "@/components/sections/SocialSection";
import EducationalSection from "@/components/sections/EducationalSection";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const mapRotate = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const mapScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.5]);
  const mapY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main ref={containerRef} className="relative bg-[#f8fafc] text-slate-900 selection:bg-[#8DC63F]/30 h-[100svh] overflow-y-auto snap-y snap-proximity scroll-smooth w-full overflow-x-hidden">
      
      <Navigation />

      {/* GLOBAL BACKGROUND: 3D MAP */}
      <motion.div 
        style={{ rotate: mapRotate, scale: mapScale, y: mapY, opacity: 0.25 }}
        className="fixed inset-0 z-0 origin-center pointer-events-none filter saturate-50 brightness-110"
      >
        <Image src="/images/vaca-muerta-super-3d.png" alt="Vaca Muerta 3D" fill className="object-cover object-center" priority quality={100} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent opacity-60" />
      </motion.div>

      <HeroSection />
      <EnvironmentalSection />
      <SocialSection />
      <EducationalSection />
      <Footer />

    </main>
  );
}
