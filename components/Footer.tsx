"use client";

import { motion } from "framer-motion";
import { Star, ChevronUp, Sparkles } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-24 border-t-4 border-white bg-gradient-to-t from-neon-pink/10 to-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent" />

            <div className="container mx-auto px-6 md:px-12 text-center space-y-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6"
                >
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="h-20 w-20 bg-white rounded-full flex items-center justify-center cute-shadow relative group"
                    >
                        <Star className="h-10 w-10 text-neon-pink fill-neon-pink animate-pulse" />
                        <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-sparkle-gold animate-twinkle" />
                    </motion.div>
                    <p className="font-serif text-4xl text-berry italic tracking-tight italic max-w-2xl leading-tight">
                        "Designed with precision, <span className="gradient-text font-black">soul</span>, and a lot of <span className="text-neon-pink">dreams</span>."
                    </p>
                </motion.div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-pink/10 to-transparent" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <p className="text-sm font-black text-berry/30 uppercase tracking-[0.5em]">
                        © 2026 Neetu Kannaujiya. Built with <span className="text-neon-pink">♥</span>
                    </p>
                    <motion.button
                        whileHover={{ y: -10 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="group flex flex-col items-center gap-3 text-xs font-black text-neon-pink uppercase tracking-[0.3em] transition-all"
                    >
                        <span className="group-hover:neon-text-pink transition-all">Top Side</span>
                        <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center cute-shadow border border-neon-pink/10 transition-all group-hover:bg-neon-pink group-hover:text-white group-hover:neon-glow-pink">
                            <ChevronUp className="h-6 w-6" />
                        </div>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};
