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
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-3">
            {title}
            <div className="h-2 w-2 rounded-full bg-glow-cyan" />
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
              className={`snap-start shrink-0 flex flex-col gap-4 ${
                isVertical 
                  ? "w-[75vw] sm:w-[300px] md:w-[320px]" 
                  : "w-[85vw] sm:w-[450px] md:w-[500px]"
              }`}
            >
              <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl group-hover/card:border-white/20 transition-colors duration-500">
                <YouTubeEmbed
                  url={video.youtubeUrl}
                  title={video.title}
                  category={isVertical ? "vertical" : "horizontal"}
                />
              </div>
              <div className="px-2">
                <h3 className="text-xl font-semibold tracking-tight text-white/90">
                  {video.title}
                </h3>
                <p className="text-sm text-white/50 mt-1 line-clamp-2 leading-relaxed">
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
