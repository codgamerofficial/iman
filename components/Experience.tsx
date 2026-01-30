"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { experience, education } from "@/data/portfolio-data";

const timeline = [...experience, ...education];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-stone-950 text-white relative border-t border-white/10">

            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1a1a1a] skew-x-[-12deg] origin-top opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-start mb-16">
                    <span className="font-oswald text-[#CCFF00] text-lg tracking-[0.2em] uppercase mb-2">My Journey</span>
                    <h2 className="text-6xl md:text-8xl font-anton text-white uppercase leading-none">
                        Experience <br /> <span className="stroke-text text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700" style={{ WebkitTextStroke: "1px white" }}>Timeline</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-16">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#0f0f0f] border-2 border-[#333] hover:border-[#CCFF00] transition-colors p-8"
                        >
                            {/* Decoration */}
                            <div className="absolute top-[-10px] left-[-10px] w-6 h-6 bg-[#CCFF00] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-[-10px] right-[-10px] w-6 h-6 border-2 border-[#CCFF00] opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className={`p-3 rounded-none ${item.type === 'work' ? 'bg-[#CCFF00] text-black' : 'bg-white text-black'}`}>
                                        {item.type === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                                    </div>
                                    <div>
                                        <span className="font-oswald text-gray-500 text-sm uppercase tracking-wider block">{item.period}</span>
                                        <span className="font-bold text-white uppercase">{(item as any).company || (item as any).institution}</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-anton uppercase mb-4 group-hover:text-[#CCFF00] transition-colors">
                                {item.title}
                            </h3>

                            <p className="font-sans text-gray-400 leading-relaxed border-l-2 border-[#333] pl-4 group-hover:border-[#CCFF00] transition-colors">
                                {item.details}
                            </p>

                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 font-mono">
                                <MapPin size={14} /> {item.location}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
