"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";

export const Education = () => {
    const education = [
        {
            degree: "शिक्षा स्नातक (B.Ed.)",
            school: "भूगोल और इतिहास (Geography & History)",
            duration: "2024 - वर्तमान",
            details: "Pursuing professional teaching qualification with focus on secondary classroom instruction.",
            icon: <GraduationCap className="h-6 w-6 text-neon-pink" />,
            color: "from-neon-pink/10 to-sakura/10"
        },
        {
            degree: "कला स्नातक (B.A.)",
            school: "सर्वजीत कौशल पब्लिक महाविद्यालय",
            duration: "2021 - 2024",
            details: "CGPA: 7.63/10. Core Subjects: Geography, History, Sociology, Hindi.",
            icon: <BookOpen className="h-6 w-6 text-neon-purple" />,
            color: "from-neon-purple/10 to-lavender-mist/10"
        },
        {
            degree: "उच्च माध्यमिक (कक्षा 12)",
            school: "नेताजी सुभाष चंद्र बोस इंटर कॉलेज",
            duration: "पूर्ण 2020",
            details: "Arts Stream - Sant Kabir Nagar, UP Board.",
            icon: <Award className="h-6 w-6 text-sakura" />,
            color: "from-peach-cream/10 to-neon-pink/10"
        },
        {
            degree: "हाई स्कूल (कक्षा 10)",
            school: "सर्वजीत कौशल पब्लिक महाविद्यालय",
            duration: "पूर्ण 2018",
            details: "Pendari Buzurg, Bansi Dhani Marg, Siddharth Nagar, UP Board.",
            icon: <BookOpen className="h-6 w-6 text-neon-pink" />,
            color: "from-neon-pink/10 to-sakura/10"
        }
    ];

    return (
        <section id="education" className="py-32 relative overflow-hidden bg-white/20">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 space-y-4"
                >
                    <h2 className="font-serif text-5xl font-black text-berry uppercase tracking-tighter">मेरी <span className="gradient-text neon-text-pink italic">शिक्षा (Education)</span></h2>
                    <p className="text-neon-pink font-black uppercase tracking-[0.4em] text-sm">Where My Learning Journey Started!</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`bg-gradient-to-br ${edu.color} p-10 rounded-[3.5rem] border border-white relative overflow-hidden group shadow-lg`}
                        >
                            <div className="absolute -top-10 -right-10 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                <GraduationCap className="h-40 w-40" />
                            </div>

                            <div className="h-16 w-16 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:neon-glow-pink transition-all">
                                {edu.icon}
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-neon-pink mb-1">{edu.duration}</p>
                                    <h3 className="font-serif text-2xl font-black text-berry leading-tight">{edu.degree}</h3>
                                    <p className="font-bold text-berry/60 italic">{edu.school}</p>
                                </div>
                                { /* <div className="px-4 py-1.5 bg-white/60 rounded-full inline-block text-xs font-black text-neon-pink border border-neon-pink/10">
                                    {edu.grade}
                                </div> */ }
                                <p className="text-sm font-medium text-berry/70 leading-relaxed font-sans">{edu.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
