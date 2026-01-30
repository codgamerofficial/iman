"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio-data";

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-[#CCFF00] text-black relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b-4 border-black pb-8">
                    <h2 className="text-7xl md:text-9xl font-anton uppercase leading-[0.8]">
                        Selected <br /> Works
                    </h2>
                    <p className="font-oswald text-xl md:text-2xl font-bold uppercase tracking-wide md:text-right mt-6 md:mt-0">
                        Engineering <br /> Excellence
                    </p>
                </div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative border-b-2 border-black pb-12 hover:pl-8 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">

                                <div className="md:w-1/3">
                                    <div className="flex items-center gap-4 mb-2">

                                        <span className="font-oswald uppercase tracking-widest text-sm">{project.category}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-anton uppercase group-hover:text-white transition-colors text-shadow-sm">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="md:w-1/3">
                                    <p className="font-medium text-lg leading-relaxed max-w-md">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-2 mt-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-bold uppercase bg-black text-[#CCFF00] px-3 py-1">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:w-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-20 h-20 bg-black text-[#CCFF00] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform"
                                    >
                                        <ArrowUpRight size={32} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
