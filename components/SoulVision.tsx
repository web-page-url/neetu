"use client";

import { motion } from "framer-motion";
import { Target, Star, Eye, Rocket, Briefcase, TrendingUp } from "lucide-react";

export const SoulVision = () => {
    const goals = [
        {
            type: "अल्पकालिक लक्ष्य (Short-Term)",
            icon: <Target className="h-6 w-6 text-neon-pink" />,
            desc: "शिक्षण कौशल में महारत हासिल करना और माध्यमिक विद्यालयों के लिए प्रभावी शैक्षिक सामग्री बनाना।"
        },
        {
            type: "दीर्घकालिक लक्ष्य (Long-Term)",
            icon: <TrendingUp className="h-6 w-6 text-neon-purple" />,
            desc: "Building an impactful career as a teacher. एक ऐसा शिक्षा मॉडल विकसित करना जो समावेशन और समग्र विकास पर केंद्रित हो।"
        }
    ];

    const interests = [
        "Human Geography",
        "Indian History",
        "Social Sciences",
        "Inquiry-Based Learning",
        "Map-Based Instruction",
        "Student Mentorship"
    ];

    return (
        <section id="vision" className="py-32 relative overflow-hidden bg-white/30 backdrop-blur-md">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <h2 className="font-serif text-5xl font-black text-berry">Soul <span className="gradient-text neon-text-pink italic">Vision</span></h2>
                            <p className="text-neon-pink font-black uppercase tracking-[0.3em] text-sm italic">Where I'm headed & what moves me</p>
                        </div>

                        <div className="space-y-8">
                            {goals.map((goal, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex items-start gap-6 bg-white/60 p-8 rounded-[2.5rem] border border-white/60 cute-shadow"
                                >
                                    <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                                        {goal.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-black text-xs uppercase tracking-widest text-berry/40">{goal.type}</p>
                                        <p className="text-lg font-bold text-berry/80 leading-relaxed">{goal.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12 bg-gradient-to-br from-neon-pink/5 to-neon-purple/5 p-12 rounded-[4rem] border border-white"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Star className="h-8 w-8 text-neon-pink animate-pulse" />
                                <h3 className="font-serif text-3xl font-bold text-berry">Pedagogical Interests</h3>
                            </div>
                            <p className="text-berry/60 font-medium">Subjects and domains that set my heart racing.</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {interests.map((interest, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
                                    className="px-8 py-4 bg-white/40 backdrop-blur-md rounded-2xl border border-neon-pink/10 text-sm font-black text-berry/70 transition-all cursor-default shadow-sm"
                                >
                                    {interest}
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/40">
                            <div className="flex items-center gap-6">
                                <div className="h-16 w-16 rounded-full bg-neon-pink/10 flex items-center justify-center">
                                    <Eye className="h-8 w-8 text-neon-pink" />
                                </div>
                                <div>
                                    <p className="font-black text-berry text-lg">Inclusion First.</p>
                                    <p className="text-berry/50 font-bold uppercase text-xs tracking-widest">Ensuring student-centered growth.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
