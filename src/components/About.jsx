import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="section-title">About Me</h2>
                        <div className="prose prose-invert text-gray-300 text-lg leading-relaxed mb-8">
                            <p className="mb-6">
                                I am a passionate <span className="text-accent font-semibold">Full Stack Developer</span> based in Ahmedabad, Gujarat.
                                I specialize in the MERN stack and have a knack for creating intuitive, dynamic user experiences.
                            </p>
                            <p>
                                I thrive in agile environments, love solving complex problems, and am always exploring new technologies
                                to push the boundaries of what's possible on the web.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="glass-card p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <MapPin className="text-accent shrink-0" size={24} />
                                <span className="text-gray-200">Ahmedabad, Gujarat</span>
                            </div>
                            <div className="glass-card p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <Mail className="text-cyan shrink-0" size={24} />
                                <span className="text-gray-200 break-all">krishnapanchal822006@gmail.com</span>
                            </div>
                            <div className="glass-card p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <Phone className="text-violet shrink-0" size={24} />
                                <span className="text-gray-200">+91 8733999130</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent to-cyan opacity-20 blur-3xl rounded-full" />

                        <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                            <GraduationCap className="text-accent" size={32} />
                            Education
                        </h3>

                        <div className="space-y-8 relative">
                            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent to-transparent" />

                            <div className="relative pl-10">
                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary border-4 border-accent" />
                                <h4 className="text-xl font-bold text-white mb-1">BTECH in Computer Engineering</h4>
                                <p className="text-cyan font-medium mb-2">Swarrnim Startup & Innovation University</p>
                                <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">2025 - Present</span>
                            </div>

                            <div className="relative pl-10">
                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary border-4 border-cyan" />
                                <h4 className="text-xl font-bold text-white mb-1">Diploma in Information Technology</h4>
                                <p className="text-cyan font-medium mb-2">Silver Oak University</p>
                                <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">2023 - 2025</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
