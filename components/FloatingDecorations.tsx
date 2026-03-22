"use client";

import { motion } from "framer-motion";
import { Star, Sparkles, Stars, Zap, Circle } from "lucide-react";

const decorationItems = [
    { Icon: Star, size: 60, top: "10%", left: "5%", color: "text-neon-pink/15", rotate: 10, delay: 0 },
    { Icon: Sparkles, size: 40, top: "20%", right: "8%", color: "text-sparkle-gold/20", rotate: -5, delay: 1 },
    { Icon: Star, size: 90, bottom: "15%", left: "10%", color: "text-neon-pink/10", rotate: -12, delay: 0.5 },
    { Icon: Stars, size: 70, bottom: "30%", right: "5%", color: "text-neon-purple/15", rotate: 15, delay: 1.5 },
    { Icon: Zap, size: 30, top: "45%", left: "50%", color: "text-neon-pink/10", rotate: 0, delay: 2 },
    { Icon: Circle, size: 20, top: "60%", right: "30%", color: "text-neon-purple/20", rotate: 0, delay: 2.5 },
    { Icon: Star, size: 40, top: "5%", right: "40%", color: "text-sakura/20", rotate: 20, delay: 3 }
];

export const FloatingDecorations = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {decorationItems.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        y: [0, -20, 0],
                        rotate: [item.rotate, item.rotate + 10, item.rotate]
                    }}
                    transition={{
                        opacity: { duration: 2 },
                        y: { repeat: Infinity, duration: 5 + idx, ease: "easeInOut", delay: item.delay },
                        rotate: { repeat: Infinity, duration: 7 + idx, ease: "easeInOut", delay: item.delay }
                    }}
                    style={{
                        position: "absolute",
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        bottom: item.bottom,
                        width: item.size,
                        height: item.size
                    }}
                    className={item.color}
                >
                    <item.Icon size={item.size} />
                </motion.div>
            ))}

            {/* Bokeh effects */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-neon-pink/5 rounded-full blur-[100px] animate-float" />
            <div className="absolute bottom-1/3 -left-20 w-[30rem] h-[30rem] bg-neon-purple/5 rounded-full blur-[120px] animate-float delay-1000" />
        </div>
    );
};
