"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Coffee, Send, Globe, Phone, Star } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-40 relative overflow-hidden bg-gradient-to-b from-white to-petal-pink">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-neon-pink/5 rounded-full blur-[150px] animate-pulse" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6 mb-20"
                >
                    <h2 className="font-serif text-6xl md:text-8xl font-black text-berry leading-tight">
                        Educational <br /> <span className="gradient-text neon-text-pink italic">Collaboration?</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-2xl font-bold text-berry/70 leading-relaxed italic">
                        "If you value student-centered learning, engaging teaching methods, and holistic education, let's connect and build something meaningful."
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-10">
                    <motion.a
                        whileHover={{ scale: 1.1, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:nku6634@gmail.com"
                        className="bg-gradient-to-r from-neon-pink to-neon-purple text-white px-12 py-6 soft-rounded font-black text-xl neon-glow-pink flex items-center gap-4 group relative overflow-hidden"
                    >
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transition-all group-hover:h-full group-hover:bg-white/10" />
                        <Mail className="h-7 w-7 transition-transform group-hover:scale-125" />
                        Send Mail
                        <Send className="h-5 w-5 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </motion.a>

                    <div className="flex gap-6">
                        {[
                            { icon: <Linkedin className="h-8 w-8" />, href: "https://www.linkedin.com" },
                            { icon: <Phone className="h-8 w-8" />, href: "tel:+910000000000" }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                whileHover={{ scale: 1.2, backgroundColor: "#fff", borderColor: "#E11D74" }}
                                href={social.href}
                                target="_blank"
                                className="h-20 w-20 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-berry border border-white/60 transition-all cute-shadow"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-32 p-12 bg-white/60 backdrop-blur-xl rounded-[4rem] border-4 border-white/60 inline-block cute-shadow animate-float relative"
                >
                    <Star className="absolute -top-6 -left-6 h-12 w-12 text-neon-pink fill-neon-pink animate-pulse" />
                    <div className="space-y-2">
                        <p className="font-bold text-berry leading-tight">
                             <span className="text-sm uppercase tracking-[0.3em] text-berry/50 ml-2">Probability of Finding me in</span>
                        </p>
                        <p className="flex flex-wrap items-center justify-center gap-4">
                            <span className="gradient-text neon-text-pink font-black text-6xl italic leading-none">Nautanwa is 1</span>
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
