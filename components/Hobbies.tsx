"use client";

import { motion } from "framer-motion";
import { Pencil, Palette, Film, Camera, Mountain, Gem, TrendingUp, Scissors, CupSoda, Gamepad2, Compass, Plane, Star, Lightbulb, Globe, Activity, Award } from "lucide-react";

export const Hobbies = () => {
    const hobbies = [
        { name: "Classroom Innovation", icon: <Lightbulb />, desc: "Embracing new teaching methodologies to keep students engaged. 💡" },
        { name: "Content Development", icon: <Compass />, desc: "Designing study plans and map-based learning modules. 🗺️" },
        { name: "Social Work", icon: <Globe />, desc: "Participating in educational awareness initiatives. 🤝" },
        { name: "Community Education", icon: <Activity />, desc: "Building programs to uplift local students. 🏫" },
        { name: "Continuous Learning", icon: <TrendingUp />, desc: "Exploring history and the world's geography. 🌍" },
        { name: "Student Mentorship", icon: <Award />, desc: "Guiding young minds to achieve academic excellence. 🎓" }
    ];

    return (
        <section id="hobbies" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 space-y-4"
                >
                    <h2 className="font-serif text-5xl font-black text-berry uppercase tracking-tighter">Beyond The <span className="gradient-text neon-text-pink italic">Screen</span></h2>
                    <p className="text-neon-pink font-black uppercase tracking-[0.4em] text-sm italic">What keeps my soul spinning ✨</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8">
                    {hobbies.map((hobby, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 3 : -3 }}
                            className="bg-white/60 backdrop-blur-xl p-8 rounded-[3rem] border border-white/60 cute-shadow w-full md:w-80 space-y-6 group"
                        >
                            <div className="h-16 w-16 bg-neon-pink/10 rounded-2xl flex items-center justify-center text-neon-pink transition-all group-hover:bg-neon-pink group-hover:text-white group-hover:neon-glow-pink">
                                {hobby.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-serif text-2xl font-bold text-berry">{hobby.name}</h3>
                                <p className="text-berry/60 font-medium italic leading-relaxed">{hobby.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/40 rounded-full border border-neon-pink/20">
                        <Star className="h-5 w-5 text-neon-pink fill-neon-pink animate-ping" />
                        <span className="font-black text-xs uppercase tracking-[0.3em] text-berry/40">Life is a beautiful gradient</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
