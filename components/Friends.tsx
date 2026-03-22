"use client";

import { motion } from "framer-motion";
import { Users, MessagesSquare, Star, Sparkles, Globe } from "lucide-react";

export const Friends = () => {
    return (
        <section id="friends" className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-neon-pink/5">
            <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-10"
                >
                    <div className="space-y-4">
                        <h2 className="font-serif text-5xl font-black text-berry uppercase tracking-tighter italic">Soul <span className="gradient-text neon-text-pink">Circle?</span></h2>
                        <p className="text-neon-pink font-black uppercase tracking-[0.4em] text-sm">Building more than just code</p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-3xl p-12 rounded-[4rem] border-4 border-white/60 cute-shadow relative group">
                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Users className="h-40 w-40 text-neon-pink" />
                        </div>

                        <div className="space-y-8 relative z-10">
                            <div className="h-20 w-20 bg-neon-pink/10 rounded-full flex items-center justify-center mx-auto">
                                <MessagesSquare className="h-10 w-10 text-neon-pink animate-bounce" />
                            </div>

                            <h3 className="font-serif text-3xl font-bold text-berry">Wait, are we friends yet? 💎</h3>
                            <p className="text-xl font-medium text-berry/70 leading-relaxed italic">
                                "I strongly believe that the best digital artifacts are born from deep collaborations and soulful connections. Whether you're a fellow coder, a design dreamer, or just someone who loves math and magic—my circle is always open!"
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 pt-6">
                                <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 px-6 py-2 bg-white rounded-full border border-neon-pink/20 text-xs font-bold text-berry/50">
                                    <Globe className="h-4 w-4" /> Global Community
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 px-6 py-2 bg-white rounded-full border border-neon-pink/20 text-xs font-bold text-berry/50">
                                    <Sparkles className="h-4 w-4" /> Creative Peers
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 px-6 py-2 bg-white rounded-full border border-neon-pink/20 text-xs font-bold text-berry/50">
                                    <Star className="h-4 w-4 fill-neon-pink text-neon-pink" /> Mentors & Mentees
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-berry/40 font-black text-xs uppercase tracking-[0.5em]"
                    >
                        Let's connect dots and create magic 🚀
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};
