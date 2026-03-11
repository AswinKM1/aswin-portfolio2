"use client";

import { motion } from "framer-motion";
import { YouTubeEmbed } from "./YouTubeEmbed";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface VideoData {
  id: string;
  title: string;
  youtubeUrl: string;
  description: string;
  category: "horizontal" | "vertical" | string;
}

interface VideoGridProps {
  videos: VideoData[];
  title: string;
  isVertical?: boolean;
}

export function VideoGrid({ videos, title, isVertical = false }: VideoGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to enable/disable arrows
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [videos]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scroll by approximately one card width plus gap
      const scrollAmount = isVertical ? 320 : 420; 
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      // slight delay to let smooth scroll finish before checking
      setTimeout(checkScroll, 350); 
    }
  };

  if (!videos || videos.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10 md:py-14 relative z-20">
      <div className="mb-6 md:mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-3">
            {title}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-glow-cyan shadow-[0_0_15px_rgba(0,255,255,0.6)]" 
            />
          </h2>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative group/carousel">
        
        {/* Left Navigation Arrow */}
        {videos.length > 2 && (
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -local-translate-y-1/2 -translate-x-1/2 md:-translate-x-1/3 z-20 hidden md:flex items-center justify-center p-3 sm:p-4 rounded-full border shadow-xl transition-all duration-300 ${
              canScrollLeft 
                ? "bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border-white/20 hover:border-white/50 hover:scale-105 cursor-pointer" 
                : "bg-black/30 backdrop-blur-sm text-white/20 border-white/5 cursor-not-allowed opacity-0" // Hide when at start
            }`}
            style={{ transform: 'translate(-50%, -100%)' }} // slightly higher to align with video thumbnails
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-6 h-6 stroke-[2]" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 custom-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "100px" }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 20,
                delay: index * 0.05 
              }}
              className={`snap-start shrink-0 flex flex-col gap-4 group/card cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                isVertical 
                  ? "w-[75vw] sm:w-[300px] md:w-[320px]" 
                  : "w-[85vw] sm:w-[450px] md:w-[500px]"
              }`}
            >
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/10 to-transparent overflow-visible transition-all duration-500 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-glow-purple/20 before:to-transparent before:opacity-0 group-hover/card:before:opacity-100 group-hover/card:shadow-[0_10px_40px_rgba(176,38,255,0.15)]">
                <div className="relative z-10 rounded-xl overflow-hidden bg-black/50 border border-white/5 group-hover/card:border-white/20 transition-colors duration-500">
                  <YouTubeEmbed
                    url={video.youtubeUrl}
                    title={video.title}
                    category={isVertical ? "vertical" : "horizontal"}
                  />
                </div>
              </div>
              <div className="px-3 pt-2 pb-4 transition-transform duration-500 group-hover/card:translate-x-1">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/90 group-hover/card:text-white transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm md:text-base text-white/50 mt-2 line-clamp-2 leading-relaxed group-hover/card:text-white/70 transition-colors">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        {videos.length > 2 && (
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -local-translate-y-1/2 translate-x-1/2 md:translate-x-1/3 z-20 hidden md:flex items-center justify-center p-3 sm:p-4 rounded-full border shadow-xl transition-all duration-300 ${
              canScrollRight 
                ? "bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border-white/20 hover:border-white/50 hover:scale-105 cursor-pointer" 
                : "bg-black/30 backdrop-blur-sm text-white/20 border-white/5 cursor-not-allowed opacity-0 group-hover/carousel:opacity-100" // Subtle when at end
            }`}
            style={{ transform: 'translate(50%, -100%)' }} // slightly higher to align with video thumbnails
            aria-label="Scroll right"
          >
            <ArrowRight className="w-6 h-6 stroke-[2]" />
          </button>
        )}
        
        {/* Mobile fade edges for scroll indication */}
        <div className="absolute top-0 right-0 bottom-8 w-12 bg-gradient-to-l from-black/80 to-transparent pointer-events-none md:hidden" />
      </div>
    </section>
  );
}
