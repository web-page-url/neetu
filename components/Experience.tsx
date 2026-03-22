"use client";

import { motion } from "framer-motion";
import { Activity, Star, Sparkles } from "lucide-react";

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 -left-20 w-80 h-80 bg-neon-purple/5 rounded-full blur-[100px]" />
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 space-y-8"
                    >
                        <h2 className="font-serif text-5xl font-black text-berry leading-tight">
                            My Professional <br /> <span className="gradient-text neon-text-pink italic">Fairy Tale</span>
                        </h2>
                        <div className="h-2 w-24 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full animate-pulse neon-glow-pink" />
                        <p className="text-xl font-bold text-berry/60">From IIT Mandi classrooms to data-driven operations.</p>

                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-neon-pink/10 cute-shadow"
                            >
                                <p className="text-4xl font-serif gradient-text font-black">7.41</p>
                                <p className="text-xs font-black uppercase tracking-widest text-berry/40">B.Tech CGPA</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-neon-purple/10 cute-shadow"
                            >
                                <p className="text-4xl font-serif text-neon-purple font-black">30+ Days</p>
                                <p className="text-xs font-black uppercase tracking-widest text-berry/40">Deep Analysis</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="lg:w-2/3 space-y-20">
                        {/* SBT Biz Growth Partnership */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-pink via-neon-purple to-transparent hidden md:block" />
                            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] border border-white/60 cute-shadow hover:scale-[1.02] transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Activity className="h-40 w-40 text-neon-pink" />
                                </div>
                                <div className="absolute -left-[54px] top-10 h-8 w-8 rounded-full bg-white border-4 border-neon-pink hidden md:flex items-center justify-center neon-glow-pink">
                                    <Sparkles className="h-4 w-4 text-neon-pink" />
                                </div>
                                <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                                    <div>
                                        <h3 className="font-serif text-3xl font-bold text-berry">SBT Biz Growth Partnership</h3>
                                        <p className="gradient-text font-black tracking-widest uppercase text-sm">Lead Analyst (EY24)</p>
                                    </div>
                                    <div className="px-6 py-2 bg-neon-pink/10 rounded-full border border-neon-pink/20 text-xs font-black text-neon-pink flex items-center gap-2">
                                        <Star className="h-3 w-3 fill-neon-pink" /> EY 2024
                                    </div>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Led analysis of seasonal impacts on sales with high precision.",
                                        "Automated data updates using shell/batch scripts for efficiency.",
                                        "Mentored junior team members and bridged cross-functional gaps.",
                                        "Supported backend operations with optimized SQL & AWS Athena workflows."
                                    ].map((task, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg font-medium text-berry/80">
                                            <div className="h-2 w-2 rounded-full bg-neon-pink mt-2.5 shrink-0" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Seven & i Holdings */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-purple via-neon-pink to-transparent hidden md:block" />
                            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] border border-white/60 cute-shadow hover:scale-[1.02] transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Sparkles className="h-40 w-40 text-neon-purple" />
                                </div>
                                <div className="absolute -left-[54px] top-10 h-8 w-8 rounded-full bg-white border-4 border-neon-purple hidden md:flex items-center justify-center shadow-[0_0_10px_rgba(191,0,255,0.3)]">
                                    <Activity className="h-4 w-4 text-neon-purple" />
                                </div>
                                <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                                    <div>
                                        <h3 className="font-serif text-3xl font-bold text-berry">Seven & i Holdings IT Transformation</h3>
                                        <p className="text-neon-purple font-black tracking-widest uppercase text-sm">Generative AI Researcher</p>
                                    </div>
                                    <div className="px-6 py-2 bg-neon-purple/10 rounded-full border border-neon-purple/20 text-xs font-black text-neon-purple flex items-center gap-2">
                                        <Activity className="h-3 w-3" /> Strategic Research
                                    </div>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Delivered cutting-edge research on generative AI applications.",
                                        "Conducted risk assessments for future AI adoption strategies.",
                                        "Provided strategic recommendations for IT transformation roadmaps.",
                                        "Evaluated AI alignment with industry standards and internal goals."
                                    ].map((task, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg font-medium text-berry/80">
                                            <div className="h-2 w-2 rounded-full bg-neon-purple mt-2.5 shrink-0" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-pink via-neon-purple to-transparent hidden md:block" />
                            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] border border-white/60 cute-shadow hover:scale-[1.02] transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Sparkles className="h-40 w-40 text-neon-pink" />
                                </div>

                                <div className="absolute -left-[54px] top-10 h-8 w-8 rounded-full bg-white border-4 border-neon-pink hidden md:flex items-center justify-center neon-glow-pink">
                                    <Activity className="h-4 w-4 text-neon-pink" />
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
