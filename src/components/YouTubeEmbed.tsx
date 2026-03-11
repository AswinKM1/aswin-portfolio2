"use client";

import { motion } from "framer-motion";

interface YouTubeEmbedProps {
  url: string;
  title: string;
  category: "horizontal" | "vertical";
}

// Helper to extract YouTube video ID from various URL formats
function getYouTubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\/shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export function YouTubeEmbed({ url, title, category }: YouTubeEmbedProps) {
  const videoId = getYouTubeId(url);
  
  if (!videoId) return <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl text-red-400">Invalid Video URL</div>;

  const isVertical = category === "vertical";
  
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative w-full rounded-2xl overflow-hidden bg-black/50 border border-white/5 shadow-[0_0_15px_rgba(0,240,255,0.05)] hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-shadow duration-500`}
    >
      <div className={`relative w-full ${isVertical ? "aspect-[9/16]" : "aspect-video"}`}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Subtle overlay glow border on the inner edge */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
    </motion.div>
  );
}
