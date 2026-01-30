"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ThreeScene from "./ThreeScene";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">

            <div className="absolute inset-0 z-0">
                <ThreeScene />
            </div>

            <div className="container relative z-10 px-6 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="flex flex-col items-center md:items-start"
                >
                    {/* Streetwear "Sticker" */}
                    <motion.div
                        initial={{ rotate: -10, scale: 0 }}
                        animate={{ rotate: -5, scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="mb-4 bg-[#CCFF00] text-black font-bold uppercase tracking-widest px-4 py-1 text-sm md:text-base border-2 border-black shadow-[4px_4px_0px_rgba(255,255,255,0.8)]"
                    >
                        Portfolio V.2026
                    </motion.div>

                    <h1 className="text-7xl md:text-[10rem] leading-[0.8] font-anton text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tighter uppercase mb-4 mix-blend-difference drop-shadow-2xl">
                        IMAN <br /> KHANRA
                    </h1>

                    <div className="w-full h-2 bg-white mb-6 md:w-[60vw]" />

                    <p className="font-oswald text-xl md:text-3xl text-gray-300 uppercase tracking-wide max-w-2xl bg-black/40 backdrop-blur-sm p-4 border-l-4 border-[#CCFF00]">
                        Civil Engineer <span className="text-[#CCFF00]">×</span> Structural Designer
                    </p>

                </motion.div>
            </div>

            {/* Marquee Bottom */}
            <div className="absolute bottom-0 left-0 w-full bg-[#CCFF00] overflow-hidden py-2 whitespace-nowrap z-20 border-t-4 border-black">
                <div className="animate-marquee inline-block font-anton text-black text-2xl uppercase tracking-widest">
                    Civil Engineering • Structural Design • AutoCAD • Site Supervision • Cost Estimation • Sustainable Construction • &nbsp;
                </div>
                <div className="animate-marquee inline-block font-anton text-black text-2xl uppercase tracking-widest" aria-hidden="true">
                    Civil Engineering • Structural Design • AutoCAD • Site Supervision • Cost Estimation • Sustainable Construction • &nbsp;
                </div>
            </div>
        </section>
    );
}
