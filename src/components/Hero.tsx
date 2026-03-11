"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { AboutModal } from "./AboutModal";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (!isHovered) setIsHovered(true);
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <>
      <section 
        className="relative w-full min-h-[95vh] flex flex-col justify-center items-center overflow-hidden bg-grain group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Spotlight Background Image */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none opacity-60 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.6 : 0,
            WebkitMaskImage: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
            maskImage: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
          }}
        >
          <Image 
            src="/hero-bg.jpg" 
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-cyan/20 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple/20 blur-[120px] rounded-full pointer-events-none z-0" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 text-center px-6 pointer-events-none flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-2xl">
            Aswin
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide drop-shadow-lg mb-10">
            Video Editor, Artist, & Designer
          </p>

          <button
            onClick={() => setIsAboutOpen(true)}
            className="pointer-events-auto group flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(176,38,255,0.05)] hover:shadow-[0_0_20px_rgba(176,38,255,0.2)] backdrop-blur-sm"
          >
            <span className="text-sm font-semibold tracking-widest uppercase">About Me</span>
            <ArrowRight className="w-4 h-4 text-glow-cyan group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* The About Modal */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  );
}
