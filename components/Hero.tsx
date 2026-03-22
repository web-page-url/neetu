"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Github, Linkedin, Mail, Rocket } from "lucide-react";

export const Hero = () => {
    return (
        <section id="about" className="container mx-auto px-6 py-24 md:px-12 md:py-40 lg:py-56 text-center lg:text-left relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse delay-1000" />

            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-10"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                            className="inline-flex items-center gap-2 px-6 py-2 bg-white/40 backdrop-blur-md text-neon-pink font-black text-xs uppercase tracking-[0.3em] rounded-full border-2 border-neon-pink/20 neon-glow-pink"
                        >
                            <Sparkles className="h-4 w-4" /> B.Ed. Candidate · UP
                        </motion.div>
                        <h1 className="font-serif text-6xl font-black leading-none md:text-8xl lg:text-9xl tracking-tighter">
                            <span className="text-berry">Aspiring</span> <br />
                            <span className="gradient-text neon-text-pink">Educator</span>
                        </h1>
                        <p className="font-serif text-3xl italic text-berry/70 md:text-4xl">
                            Empowering Students, Shaping Futures.
                        </p>
                    </div>
                    <p className="max-w-xl text-2xl leading-relaxed font-semibold text-berry/80">
                        I'm Neetu Kannaujiya, a passionate aspiring educator pursuing a Bachelor of Education (B.Ed.). I specialize in <span className="text-neon-pink underline decoration-wavy underline-offset-8">Geography</span> & History, committed to creating engaging, student-centered <span className="gradient-text font-black">learning environments</span> for holistic academic growth.
                    </p>
                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                        <motion.a
                            whileHover={{ scale: 1.1, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="bg-gradient-to-r from-neon-pink to-neon-purple text-white px-10 py-5 soft-rounded font-black text-lg neon-glow-pink transition-all flex items-center gap-3"
                        >
                            Connect! <Rocket className="h-6 w-6" />
                        </motion.a>
                        <div className="flex items-center gap-6">
                            <motion.a
                                whileHover={{ y: -5, color: "#FF1493" }}
                                href="mailto:nku6634@gmail.com"
                                className="p-3 bg-white/50 rounded-2xl border border-white/50 cute-shadow text-berry/60 transition-colors"
                            >
                                <Mail className="h-8 w-8" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative group mx-auto max-w-md w-full aspect-[4/5]"
                >
                    <div className="absolute -inset-6 bg-gradient-to-tr from-neon-pink via-peach-cream to-neon-purple rounded-[4rem] opacity-40 blur-3xl animate-pulse" />
                    <div className="relative h-full w-full overflow-hidden rounded-[3rem] bg-white/40 border-[8px] border-white/60 backdrop-blur-sm neon-glow-pink animate-float">
                        <div className="absolute inset-0">
                            <Image
                                src="/a-kriti-1.0.jpeg"
                                alt="Neetu Kannaujiya"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority
                            />
                            {/* Glass overlay for the text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-berry/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 glass-pink p-6 soft-rounded border border-white/60 text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="text-xs font-black uppercase tracking-widest text-neon-pink mb-2">Teaching Status</p>
                            <p className="font-bold flex items-center justify-center gap-2 text-berry">Lesson Planning 📚 + Mentoring 🎓</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
