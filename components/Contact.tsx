"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-black relative text-white">

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div>
                        <h2 className="text-7xl md:text-8xl font-anton uppercase leading-none mb-8">
                            Let's <br /> <span className="text-[#CCFF00]">Build</span>
                        </h2>
                        <p className="font-sans text-xl text-gray-400 max-w-md mb-12">
                            Available for entry-level Civil Engineering roles, freelance projects, and collaborations.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:imankhanra17@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-[#CCFF00] flex items-center justify-center text-black font-bold group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <span className="font-oswald text-2xl uppercase tracking-wider group-hover:text-[#CCFF00] transition-colors">
                                    imankhanra17@gmail.com
                                </span>
                            </a>

                            <a href="tel:+916296603868" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white flex items-center justify-center text-black font-bold group-hover:scale-110 transition-transform">
                                    <Phone size={20} />
                                </div>
                                <span className="font-oswald text-2xl uppercase tracking-wider group-hover:text-white transition-colors">
                                    +91-6296603868
                                </span>
                            </a>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center text-white font-bold">
                                    <MapPin size={20} />
                                </div>
                                <span className="font-oswald text-xl uppercase tracking-wider text-gray-500">
                                    Contai, West Bengal - 721442
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#CCFF00] p-10 flex flex-col justify-between min-h-[400px]">
                        <div>
                            <h3 className="text-black font-anton text-4xl uppercase mb-4">Quick Form</h3>
                            <input type="text" placeholder="NAME" className="w-full bg-black/10 border-b-2 border-black placeholder-black/50 p-4 mb-4 font-oswald text-black focus:outline-none focus:bg-black/20" />
                            <input type="email" placeholder="EMAIL" className="w-full bg-black/10 border-b-2 border-black placeholder-black/50 p-4 mb-4 font-oswald text-black focus:outline-none focus:bg-black/20" />
                            <textarea placeholder="MESSAGE" rows={3} className="w-full bg-black/10 border-b-2 border-black placeholder-black/50 p-4 mb-4 font-oswald text-black focus:outline-none focus:bg-black/20"></textarea>
                        </div>

                        <button className="bg-black text-white font-anton uppercase text-xl py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                            Send Message <ArrowRight />
                        </button>
                    </div>

                </div>

                <footer className="mt-20 pt-10 border-t border-zinc-900 flex justify-between items-center text-zinc-600 font-mono text-sm uppercase">
                    <span>&copy; 2026 Iman Khanra</span>
                    <span>Designed with Next.js & R3F</span>
                </footer>
            </div>
        </section>
    );
}
