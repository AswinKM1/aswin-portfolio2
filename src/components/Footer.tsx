"use client";

import { Mail, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="w-full border-t border-white/10 bg-black/50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Aswin
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xs">
            Bringing cinematic stories to life through editing and design.
          </p>
        </div>

        {/* Call to action & Socials */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <a
            href="https://wa.me/917034798234?text=Hi%20Aswin,%20I'd%20like%20to%20work%20with%20you!"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(176,38,255,0.05)] hover:shadow-[0_0_20px_rgba(176,38,255,0.2)]"
          >
            <span className="text-sm font-medium tracking-wide">Work with me</span>
            <ArrowRight className="w-4 h-4 text-glow-cyan group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex items-center gap-5 text-gray-400">
            <a href="mailto:aswinkm468@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/aswinkm___/" target="_blank" rel="noopener noreferrer" className="hover:text-glow-purple transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/aswin-km-12a8421ba/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.behance.net/aswinkm468" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" aria-label="Behance">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
                <path d="M186.13 259.61c40.36-12.83 55.43-39.26 55.43-69.87 0-41.22-29.35-71.3-80.46-71.3H16v258.91h148.65c52.12 0 85.16-33.37 85.16-77 0-29.74-17-53.74-63.68-40.74zM85.3 162.72h58c19.64 0 35.53 9.44 35.53 29 0 21.14-15.08 29.83-36.27 29.83H85.3V162.72v0zm61 169.5H85.3v-65.05h62.15c25.3 0 41.22 10.95 41.22 33.2 0 25.68-15.86 31.85-42.37 31.85zM388 234.33c-39.25 0-61.9 23.4-66.42 55.44h133.58c-4.16-32.04-26.79-55.44-67.16-55.44zm-64.91 84.15h111l20.4-36.56H310.8c.38 29.84 22.28 44.57 41.54 44.57 15.1 0 28.31-7.18 31.33-22.28h38.15c-3.41 33.59-32.1 53.2-69.48 53.2-57.14 0-82-44.57-79.16-118-2.65-72.29 20.35-121.2 80.29-121.2 60.1 0 77.08 47.93 72.93 124.64h-172zM324.78 178.52h125.66v27.93H324.78v-27.93z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center py-4 border-t border-white/5 text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Aswin. All rights reserved.
      </div>
    </motion.footer>
  );
}
