"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio-data";

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-stone-900 text-white relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-0 opacity-5 pointer-events-none whitespace-nowrap">
                <span className="text-[20rem] font-anton text-transparent stroke-text" style={{ WebkitTextStroke: "2px white" }}>SKILLS</span>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
                    <h2 className="text-6xl font-anton uppercase text-[#CCFF00]">Arsenal</h2>
                    <span className="font-oswald text-gray-400 uppercase tracking-widest text-lg">Tools & Technologies</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-black border border-zinc-800 p-6 hover:shadow-[8px_8px_0px_#CCFF00] transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-anton uppercase mb-6 text-white border-b-2 border-[#CCFF00] inline-block pb-1">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="font-oswald tracking-wide text-gray-300 text-lg hover:text-[#CCFF00] cursor-default bg-zinc-900/50 px-2 py-1">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
