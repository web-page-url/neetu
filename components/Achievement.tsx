"use client";

import { motion } from "framer-motion";
import { Award, Code2, Lightbulb, Stars, Star, Sparkles, Activity, ShieldCheck } from "lucide-react";

const mainAchievements = [
    { title: "Independent Teaching", desc: "Given full responsibility for independent classroom teaching during practicum. 🤝", icon: <Award className="text-neon-pink" />, color: "bg-neon-pink/5" },
    { title: "Successful Mentoring", desc: "Mentored multiple students, achieving significant improvement in Geography & History. 🌟", icon: <Stars className="text-neon-purple" />, color: "bg-neon-purple/5" },
    { title: "Academic Excellence", desc: "Secured CGPA 7.63/10 in B.A. from Siddharth University. 🏆", icon: <Star className="text-sakura" />, color: "bg-sakura/5" },
    { title: "Community Engagement", icon: <Activity className="text-sakura" />, desc: "Actively participated in social and educational awareness initiatives. 🏔️", color: "bg-sakura/5" },
    { title: "Student Leadership", icon: <Stars className="text-sparkle-gold" />, desc: "Demonstrated ability to lead student groups during school activities. 👑", color: "bg-sparkle-gold/5" },
    { title: "Education Reform Vision", icon: <ShieldCheck className="text-neon-pink" />, desc: "Committed to contributing to education reform programs like Teach For India. ✨", color: "bg-neon-pink/5" }
];

export const Achievement = () => {
    return (
        <section id="achievement" className="py-32 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="font-serif text-5xl font-black leading-tight text-berry">मेरी <br /> <span className="gradient-text neon-text-pink italic">उपलब्धियां (Achievements)</span></h2>
                        <p className="text-xl font-bold text-berry/70 leading-relaxed italic">"शिक्षा के क्षेत्र में मेरी यात्रा के मुख्य पड़ाव।"</p>
                        <div className="h-1 w-20 bg-neon-pink rounded-full shadow-lg neon-glow-pink" />

                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="p-10 bg-gradient-to-tr from-neon-pink to-neon-purple rounded-[3rem] text-white neon-glow-pink relative overflow-hidden group"
                        >
                            <Sparkles className="absolute top-0 right-0 p-4 h-24 w-24 opacity-20 group-hover:scale-150 transition-transform" />
                            <p className="text-7xl font-serif font-black mb-2">5+</p>
                            <p className="font-black uppercase tracking-tighter text-sm leading-tight opacity-90">Major Awards <br /> Received for Performance Excellence 👸</p>
                        </motion.div>
                    </motion.div>

                    <div className="lg:col-span-2 space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {mainAchievements.map((award, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                                    className={`${award.color} p-8 rounded-[2.5rem] border border-white/60 hover:cute-shadow transition-all backdrop-blur-md flex items-start gap-6 group`}
                                >
                                    <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-6">
                                        {award.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-serif text-xl font-bold text-berry ">{award.title}</h4>
                                        <p className="text-sm font-medium text-berry/60 leading-relaxed italic">{award.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/40 backdrop-blur-xl p-12 rounded-[4rem] border-4 border-white/60 cute-shadow relative overflow-hidden"
                        >
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-pink/5 rounded-full blur-3xl" />
                            <p className="font-black text-xs uppercase tracking-[0.4em] text-neon-pink mb-10">Other Notable Feats ✨</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "AWS Athena Query Optimization Specialist",
                                    "GenAI Strategy Framework Lead",
                                    "Completed Mountain Landslide Monitoring for HP 🏔️",
                                    "Finalist @ Myntra HackerRamp: WeForShe 🚀",
                                    "Selected for TechGig Grand Finale 2021!"
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-4 text-berry/80 font-bold group px-4 py-2"
                                    >
                                        <div className="h-2 w-2 rounded-full bg-neon-pink group-hover:scale-150 transition-transform" />
                                        <span className="text-lg leading-tight">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};
