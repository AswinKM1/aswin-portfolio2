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
            className="group flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.1)] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 text-[#25D366]">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            <span className="text-sm font-medium tracking-wide text-[#25D366]">Work with me</span>
            <ArrowRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex items-center justify-between w-full px-2 text-gray-400 mt-2">
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
