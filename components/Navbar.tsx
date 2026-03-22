"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Star } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#work-experience" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Achievement", href: "#achievement" },
        { name: "Hobbies", href: "#hobbies" },
        { name: "Connect", href: "#contact" },
    ];

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed top-0 z-[999] w-full glass-pink border-b border-white/20"
        >
            <nav className="container mx-auto flex h-20 items-center justify-between px-4 md:px-10">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="font-serif text-3xl font-black tracking-tighter text-berry flex items-center gap-3 cursor-pointer z-[60]"
                    role="button"
                    aria-label="Scroll to top"
                >
                    Neetu <span className="h-3 w-3 rounded-full bg-neon-pink animate-ping neon-glow-pink" />
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden items-center gap-10 text-base font-bold tracking-widest uppercase md:flex">
                    {navLinks.map((item) => (
                        <motion.a
                            key={item.name}
                            whileHover={{ scale: 1.1, color: "#E11D74" }}
                            href={item.href}
                            className="text-berry/70 transition-all relative group"
                            aria-label={`Navigate to ${item.name}`}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-pink transition-all group-hover:w-full" />
                        </motion.a>
                    ))}
                </div>

                {/* Desktop Resume Button */}
                {/* <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/ranjitha-resume.pdf"
                    download="Ranjitha_Resume.pdf"
                    className="hidden lg:flex group items-center gap-2 bg-gradient-to-r from-neon-pink to-sakura px-8 py-3 text-sm font-black text-white transition-all soft-rounded neon-glow-pink"
                    aria-label="Download Resume"
                >
                    Resume <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </motion.a> */}

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex md:hidden z-[10000] p-2 text-berry hover:text-neon-pink transition-colors"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[9999] bg-white/80 backdrop-blur-2xl flex flex-col items-center justify-start gap-12 p-10 pt-32 pb-40 md:hidden overflow-y-auto"
                    >
                        {/* Decorative background for mobile menu */}
                        <div className="absolute top-[-10%] right-[-10%] w-60 h-60 bg-sakura/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-60 h-60 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-700" />

                        <div className="flex flex-col items-center gap-6 w-full">
                            {navLinks.map((item, idx) => (
                                <motion.a
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * idx }}
                                    whileHover={{ scale: 1.2, color: "#E11D74" }}
                                    whileTap={{ scale: 0.9 }}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-serif text-3xl font-black text-berry tracking-tight relative group text-center"
                                >
                                    {item.name}
                                    <Star className="absolute -left-10 top-1/2 -translate-y-1/2 h-6 w-6 text-neon-pink opacity-0 group-hover:opacity-100 transition-all fill-neon-pink" />
                                </motion.a>
                            ))}
                        </div>

                        {/* <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            whileTap={{ scale: 0.95 }}
                            href="/ranjitha-resume.pdf"
                            download="Ranjitha_Resume.pdf"
                            className="group flex items-center gap-3 bg-gradient-to-r from-neon-pink to-sakura px-10 py-5 font-black text-white soft-rounded neon-glow-pink shadow-lg"
                        >
                            Download Resume <Download className="h-5 w-5" />
                        </motion.a> */}

                        <div className="mt-auto pt-10 flex flex-col items-center gap-2">
                            <p className="text-xs font-black uppercase tracking-[0.3em] text-berry/30">Made with Soul ✨</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
