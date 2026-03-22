"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Sparkles } from "lucide-react";

export const GlobalJourney = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/5 via-white/0 to-neon-purple/5" />

            <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="font-serif text-5xl font-black mb-24 text-berry"
                >
                    Crossing <span className="gradient-text neon-text-pink">Borders</span>
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-40 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1/2 h-px border-t-4 border-dashed border-neon-pink/20 hidden md:block" />

                    {[
                        { name: "India", desc: "The Sanctuary of Learning", icon: <MapPin className="h-16 w-16 text-neon-pink" />, color: "neon-glow-pink" },
                        { name: "Japan", desc: "The Frontier of Innovation", icon: <Globe className="h-16 w-16 text-neon-purple" />, color: "shadow-[0_0_20px_rgba(191,0,255,0.3)]" }
                    ].map((place, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.3 }}
                            className="space-y-8 group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className={`h-48 w-48 rounded-full bg-white border-8 border-white/60 flex items-center justify-center p-8 ${place.color} backdrop-blur-md relative`}
                            >
                                <div className="absolute inset-0 bg-sakura/5 rounded-full animate-ping opacity-20" />
                                <div className="relative z-10 transition-transform group-hover:scale-125">
                                    {place.icon}
                                </div>
                                <Sparkles className="absolute top-4 right-4 h-6 w-6 text-sparkle-gold animate-twinkle" />
                            </motion.div>
                            <div>
                                <p className="font-serif text-4xl font-black text-berry">{place.name}</p>
                                <p className="text-xs font-black uppercase tracking-[0.2em] text-neon-pink italic mt-2">{place.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
