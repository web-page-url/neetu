"use client";

import { motion } from "framer-motion";
import { Activity, Star, Sparkles, Briefcase } from "lucide-react";

export const WorkExperience = () => {
    return (
        <section id="work-experience" className="py-32 relative overflow-hidden bg-gradient-to-br from-white to-neon-pink/5">
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
                            Work <br /> <span className="gradient-text neon-text-pink italic">Experience</span>
                        </h2>
                        <div className="h-2 w-24 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full animate-pulse neon-glow-pink" />
                        <p className="text-xl font-bold text-berry/60 italic leading-relaxed font-serif">"Precision meets professional soul."</p>

                        <div className="grid grid-cols-1 gap-4">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-neon-pink/10 cute-shadow flex items-center gap-6"
                            >
                                <div className="h-12 w-12 bg-neon-pink/10 rounded-2xl flex items-center justify-center">
                                    <Briefcase className="h-6 w-6 text-neon-pink" />
                                </div>
                                <div className="">
                                    <p className="text-3xl font-serif gradient-text font-black leading-none">2+</p>
                                    <p className="text-xs font-black uppercase tracking-widest text-berry/40">Years Exp</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="lg:w-2/3 space-y-20">
                        {/* PayPal */}
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
                                        <h3 className="font-serif text-3xl font-bold text-berry">Government / Affiliated School</h3>
                                        <p className="gradient-text font-black tracking-widest uppercase text-sm">Student Teacher – B.Ed. Internship</p>
                                    </div>
                                    <div className="px-6 py-2 bg-neon-pink/10 rounded-full border border-neon-pink/20 text-xs font-black text-neon-pink flex items-center gap-2">
                                        <Star className="h-3 w-3 fill-neon-pink" /> 2024 - Present
                                    </div>
                                </div>
                                <p className="font-black text-xs uppercase tracking-widest text-berry/40 mb-4">Focus: Geography & History for secondary-level students</p>
                                <ul className="space-y-4">
                                    {[
                                        "Conducting live classroom teaching sessions in Geography and History for secondary-level students.",
                                        "Developing structured lesson plans, teaching aids, and activity-based learning modules.",
                                        "Managing classroom discipline and student engagement effectively in diverse classroom settings.",
                                        "Assisting students in concept clarity, exam preparation strategies, and map-based Geography exercises.",
                                        "Collaborating with mentor teachers to evaluate student performance and implement feedback-driven improvements."
                                    ].map((task, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg font-medium text-berry/80">
                                            <div className="h-2 w-2 rounded-full bg-neon-pink mt-2.5 shrink-0" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* T-Mobile */}
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
                                        <h3 className="font-serif text-3xl font-bold text-berry">Home Tuition — Self-Employed</h3>
                                        <p className="text-neon-purple font-black tracking-widest uppercase text-sm">Private Tutor</p>
                                    </div>
                                    <div className="px-6 py-2 bg-neon-purple/10 rounded-full border border-neon-purple/20 text-xs font-black text-neon-purple flex items-center gap-2">
                                        <Activity className="h-3 w-3" /> 2023 - Present
                                    </div>
                                </div>
                                <p className="font-black text-xs uppercase tracking-widest text-berry/40 mb-4">Focus: Personalized tutoring for Class 8 to 12</p>
                                <ul className="space-y-4">
                                    {[
                                        "Providing personalized one-on-one and small group tutoring for students from Class 8 to Class 12.",
                                        "Designed customized study plans to address individual student learning gaps and improve academic outcomes.",
                                        "Demonstrated measurable improvement in students’ board exam scores through targeted preparation.",
                                        "Focused on simplifying complex geographical and historical concepts using real-world examples and visual aids."
                                    ].map((task, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg font-medium text-berry/80">
                                            <div className="h-2 w-2 rounded-full bg-neon-purple mt-2.5 shrink-0" />
                                            <span>{task}</span>
                                        </li>
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
