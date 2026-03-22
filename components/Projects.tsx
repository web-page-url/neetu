"use client";

import { motion } from "framer-motion";
import { Gamepad2, Sparkles, Activity, Globe, Cpu, Database, Stars, ExternalLink, ShieldCheck, Github } from "lucide-react";

const projects = [
    {
        title: "Telecom Automation Testing",
        desc: "Developed automated UI test scripts using Selenium and validated API services for T-Mobile. 📱",
        tag: "Automation",
        icon: <Cpu className="h-6 w-6" />,
        link: "#",
        color: "from-pink-100 to-rose-100",
        neon: "neon-glow-pink"
    },
    {
        title: "FinTech Enterprise Testing",
        desc: "Tested PayPal's asset management systems and automated ServiceNow CMDB workflows. 💳",
        tag: "Enterprise / QA",
        icon: <ShieldCheck className="h-6 w-6" />,
        link: "#",
        color: "from-purple-100 to-lavender-mist",
        neon: "shadow-[0_0_20px_rgba(191,0,255,0.2)]"
    },
    {
        title: "Magento Testing Repo",
        desc: "Automation testing scripts and Selenium-based framework for e-commerce validation. 🛒",
        tag: "Open Source / QA",
        icon: <Github className="h-6 w-6" />,
        link: "https://github.com/RanjithaDS2",
        color: "from-blue-50 to-indigo-50",
        neon: "shadow-[0_0_20px_rgba(34,197,254,0.2)]"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden bg-gradient-to-b from-white/0 to-neon-pink/5">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8"
                >
                    <div className="space-y-4">
                        <h2 className="font-serif text-5xl font-black text-berry text-center md:text-left">Selected<span className="gradient-text neon-text-pink">  Testing Projects</span></h2>
                        <p className="text-neon-pink font-black uppercase tracking-[0.2em] text-sm">Where quality meets automation</p>
                    </div>
                    <div className="hidden lg:block h-px flex-grow bg-neon-pink/20 mx-12 mb-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -15 }}
                            className={`bg-gradient-to-br ${p.color} p-10 rounded-[3.5rem] border border-white/60 ${p.neon} backdrop-blur-sm transition-all group relative overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 p-8 text-neon-pink/5 group-hover:text-neon-pink/10 transition-colors">
                                <Stars className="h-24 w-24" />
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-neon-pink shadow-sm"
                            >
                                {p.icon}
                            </motion.div>

                            <div className="inline-block px-4 py-1 rounded-full bg-white/60 text-berry text-[10px] font-black uppercase tracking-widest mb-6 border border-white">
                                {p.tag}
                            </div>

                            <h3 className="font-serif text-2xl font-black mb-4 text-berry group-hover:text-neon-pink transition-colors">{p.title}</h3>
                            <p className="font-medium text-berry/70 mb-10 leading-relaxed italic h-24 overflow-hidden">{p.desc}</p>

                            <a href={p.link} className="flex items-center gap-2 group/link font-black text-sm text-berry/40 hover:text-neon-pink transition-colors">
                                Explore Project <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
