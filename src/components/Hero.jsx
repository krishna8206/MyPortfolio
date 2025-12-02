import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

// Simulating TypeAnimation since we can't install packages easily without user confirmation
// We'll use a simple CSS/Framer motion alternative for now to avoid dependency issues

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Aurora Background Layer */}
            <div className="aurora-bg" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="inline-block mb-6 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan font-semibold tracking-wide">
                            FULL STACK DEVELOPER
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight text-white leading-tight">
                        Building <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan to-violet animate-pulse">
                            Digital Magic
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-gray-300 text-xl mb-12 leading-relaxed">
                        I craft immersive web experiences that merge creativity with engineering.
                        Specializing in the MERN stack and modern UI design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center justify-center gap-2"
                        >
                            View My Work
                            <ArrowRight size={24} />
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-8 py-4 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                        >
                            Download Resume
                            <Download size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
