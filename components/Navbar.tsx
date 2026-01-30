"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import dynamic from 'next/dynamic';
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

// Inner component for downloading
const DownloadButtonInner = ({ mobile }: { mobile?: boolean }) => (
    <PDFDownloadLink
        document={<ResumeDocument />}
        fileName="Iman_Khanra_Resume.pdf"
        className={cn(
            mobile
                ? "font-anton text-4xl text-white hover:text-[#CCFF00] transition-colors uppercase tracking-widest italic"
                : "px-6 py-2 bg-white text-black font-anton uppercase tracking-wider hover:bg-[#CCFF00] transition-colors skew-x-[-10deg]"
        )}
    >
        {({ loading }) => (
            <span className={mobile ? "" : "skew-x-[10deg] inline-block"}>
                {loading ? "Loading..." : "Resume"}
            </span>
        )}
    </PDFDownloadLink>
);

// Dynamic import with proper type casting to avoid TS errors with components
const PDFDownloadButton = dynamic(() => Promise.resolve(DownloadButtonInner), {
    ssr: false,
    loading: () => (
        <div className="px-6 py-2 bg-white text-black font-anton uppercase tracking-wider skew-x-[-10deg] opacity-50 cursor-not-allowed">
            <span className="skew-x-[10deg] inline-block">Loading...</span>
        </div>
    ),
});

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2",
                    scrolled
                        ? "bg-black border-[#CCFF00] py-4"
                        : "bg-transparent border-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="text-3xl font-anton tracking-wider text-white uppercase italic">
                        IMAN <span className="text-[#CCFF00] not-italic">.</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-oswald text-lg font-bold text-gray-400 hover:text-[#CCFF00] transition-colors uppercase tracking-widest relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[4px] bg-[#CCFF00] transition-all group-hover:w-full skew-x-12" />
                            </Link>
                        ))}
                        {/* Client-side only PDF Download */}
                        <PDFDownloadButton />
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white hover:text-[#CCFF00] transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 20 }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 md:hidden border-l-4 border-[#CCFF00]"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-anton text-4xl text-white hover:text-[#CCFF00] transition-colors uppercase tracking-widest italic"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <PDFDownloadButton mobile />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
