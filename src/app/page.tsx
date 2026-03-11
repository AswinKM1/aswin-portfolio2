"use client";

import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import { VideoGrid } from "@/components/VideoGrid";
import { Footer } from "@/components/Footer";
import projectsData from "@/data/projects.json";

export default function Home() {
  const horizontalVideos = projectsData.filter((p) => p.category === "horizontal") as any;
  const verticalVideos = projectsData.filter((p) => p.category === "vertical") as any;
  const aiVideos = projectsData.filter((p) => p.category === "ai-video") as any;

  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Works Section Header */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 mt-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center space-y-4"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium">Selected Projects</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/40 pb-2">
            My Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-glow-cyan to-glow-purple rounded-full mt-6" />
        </motion.div>
      </div>

      {horizontalVideos.length > 0 && (
        <VideoGrid title="Podcasts" videos={horizontalVideos} />
      )}
      
      {verticalVideos.length > 0 && (
        <VideoGrid title="Shorts & Reels" videos={verticalVideos} isVertical={true} />
      )}

      {aiVideos.length > 0 && (
        <VideoGrid title="AI Videos" videos={aiVideos} isVertical={true} />
      )}

      <Footer />
    </main>
  );
}
