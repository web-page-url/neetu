"use client";

import { motion } from "framer-motion";
import { Activity, Sparkles, Star } from "lucide-react";

export const Internships = () => {
    return (
        <section id="internships" className="py-32 relative overflow-hidden bg-white/20">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row-reverse gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 space-y-8 lg:text-right flex flex-col items-center lg:items-end"
                    >
                        <h2 className="font-serif text-5xl font-black text-berry leading-tight">
                            The <br /> <span className="gradient-text neon-text-pink italic">Internships</span>
                        </h2>
                        <div className="h-2 w-24 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full animate-pulse neon-glow-pink" />
                        <p className="text-xl font-bold text-berry/60 italic leading-relaxed font-serif">"Early bloomer in the testing garden."</p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/80 p-6 rounded-3xl border border-neon-pink/10 cute-shadow inline-flex items-center gap-4"
                        >
                            <div className="h-10 w-10 bg-neon-pink/10 rounded-xl flex items-center justify-center">
                                <Star className="h-5 w-5 text-neon-pink fill-neon-pink" />
                            </div>
                            <span className="font-black text-xs uppercase tracking-widest text-berry/40">Highly Rated</span>
                        </motion.div>
                    </motion.div>

                    <div className="lg:w-2/3 space-y-20">
                        {/* Frontrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] border border-white/60 cute-shadow hover:scale-[1.02] transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Sparkles className="h-40 w-40 text-neon-pink" />
                                </div>

                                <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                                    <div>
                                        <h3 className="font-serif text-3xl font-bold text-berry">Frontrow</h3>
                                        <p className="gradient-text font-black tracking-widest uppercase text-sm">Data Science & Ops Intern</p>
                                    </div>
                                    <div className="px-6 py-2 bg-neon-pink/10 rounded-full border border-neon-pink/20 text-xs font-black text-neon-pink flex items-center gap-2">
                                        <Star className="h-3 w-3 fill-neon-pink" /> Nov 2022 - Jan 2023
                                    </div>
                                </div>

                                <ul className="space-y-6">
                                    {[
                                        "Automated user attendance for multiple daily events (Bye bye manual work! 👋)",
                                        "Identified top winning & losing communities using 30-90 day data slices.",
                                        "Bridged back-end queries with UI visuals for seamless data flow.",
                                        "Mastered Python, Google APIs, and the legendary Pandas/NumPy duo."
                                    ].map((task, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start gap-4 text-lg font-medium text-berry/80 group/item"
                                        >
                                            <div className="h-6 w-6 rounded-full bg-neon-pink/10 flex items-center justify-center shrink-0 mt-1 group-hover/item:bg-neon-pink transition-colors">
                                                <Star className="h-3 w-3 text-neon-pink group-hover/item:text-white transition-colors" />
                                            </div>
                                            <span>{task}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
