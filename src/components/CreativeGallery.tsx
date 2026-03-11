"use client";

import { motion } from "framer-motion";

interface ArtData {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  category: "art" | string;
}

interface CreativeGalleryProps {
  items: ArtData[];
}

export function CreativeGallery({ items }: CreativeGalleryProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">
          Creative Gallery
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-glow-purple to-glow-cyan mb-10 rounded-full" />
      </motion.div>

      {/* Masonry Layout using CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-black/50 border border-white/5 shadow-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-medium text-white tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2">{item.description}</p>
            </div>
            {/* Subtle glow border */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
