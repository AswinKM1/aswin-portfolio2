"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }} 
              className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/[0.12] shadow-[0_0_100px_rgba(0,0,0,0.8),inset_0_1px_rgba(255,255,255,0.05)] rounded-[36px] pointer-events-auto overflow-hidden group"
            >
              
              {/* Premium Background Elements */}
              {/* Grain */}
              <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-grain mix-blend-overlay" />
              
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgxOHYxOEgxem0xIDFoMTZ2MTZIMnoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

              {/* Abstract blurred shapes */}
              <div className="absolute top-[-30%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-glow-purple/15 to-transparent blur-[140px] rounded-full pointer-events-none" />
              <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-glow-cyan/15 to-transparent blur-[140px] rounded-full pointer-events-none" />

              {/* Top Bar / Close Button */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 z-50">
                <button
                  onClick={onClose}
                  className="p-3 text-white/50 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] rounded-full transition-all duration-300 backdrop-blur-md border border-white/[0.05]"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 stroke-[2]" />
                </button>
              </div>

              {/* Main Content Area */}
              <div className="relative z-10 p-8 pt-16 md:p-16 md:pt-20 lg:p-24 overflow-y-auto max-h-[85vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                
                <div className="space-y-14 md:space-y-16 max-w-4xl mx-auto">
                  {/* Header */}
                  <div>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5 text-white flex items-baseline">
                      Hi, I'm Aswin<span className="text-glow-cyan">.</span>
                    </h2>
                    <div className="flex gap-2 items-center">
                        <div className="h-[3px] w-12 bg-glow-cyan/70 rounded-full" />
                        <div className="h-[3px] w-6 bg-glow-purple/70 rounded-full" />
                        <div className="h-[3px] w-3 bg-white/20 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Bio Content - Made larger and wider */}
                  <div className="space-y-8 text-lg md:text-xl text-white/60 leading-[1.8] font-light tracking-wide">
                    <p className="text-white/90 font-medium text-2xl md:text-3xl leading-snug">
                      An artist and video editor turning complex ideas into cinematic visuals.
                    </p>
                    <p>
                      I work on <span className="text-white/80">reels, podcasts, motion graphics, and social content</span>, usually handling 
                      the whole process from the first rough cut to the final polish.
                    </p>
                    <p>
                      My background in art, design, and UI strongly influences how I approach composition, 
                      storytelling, and motion. I like thinking about how visuals <em className="not-italic text-white">feel</em>, not just how they look.
                    </p>
                    <p>
                      Outside of editing, I spend a lot of time experimenting with AI tools and creative tech 
                      workflows. I like building small utilities and exploring new ways to make creative work 
                      faster, smoother, and a bit more <span className="text-glow-purple bg-glow-purple/10 px-3 py-1 rounded inline-block">fun</span>.
                    </p>
                    <p className="pt-4 border-t border-white/5">
                       At the end of the day, I see myself as an artist first. Illustration, character design, 
                      and digital art shape the way I think and create.
                    </p>
                  </div>
                  
                  {/* Tools List */}
                  <div className="pt-4 flex flex-col gap-5">
                     <p className="text-sm font-bold tracking-[0.25em] text-white/40 uppercase">Toolkit</p>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        {['Premiere Pro', 'After Effects', 'Photoshop', 'Figma', 'DaVinci', 'Procreate', 'Cursor', 'Antigravity', 'Higgsfield'].map((skill) => (
                        <span 
                            key={skill} 
                            className="text-sm md:text-sm font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full border border-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] cursor-default bg-transparent text-white/60 hover:text-white/90"
                        >
                            {skill}
                        </span>
                        ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Top/Bottom Lines */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
