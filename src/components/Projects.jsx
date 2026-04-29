import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'IdharUdhar',
            description: 'A platform for local services and connections.',
            tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
            link: 'https://idharudhar.co/'
        },
        {
            title: 'Circle',
            description: 'Social networking application for communities.',
            tags: ['MERN Stack', 'Socket.io', 'Redux'],
            link: 'https://circle-main-two.vercel.app'
        },
        {
            title: 'Gomel Cars',
            description: 'Car rental and booking platform.',
            tags: ['React', 'Express', 'Stripe', 'Google Maps API'],
            link: 'https://gomel-frontend.vercel.app/'
        },
        {
            title: 'SEUnits',
            description: 'Enterprise resource planning for manufacturing units.',
            tags: ['Full Stack', 'Dashboard', 'Analytics'],
            link: 'https://seu-nine.vercel.app/'
        },
        {
            title: 'A One Profile',
            description: 'A professional business website for CNC plasma and laser cutting services, showcasing offerings, gallery, and contact features.',
            tags: ['React', 'Tailwind CSS'],
            link: 'https://a-one-profile.vercel.app/'
        },
        {
            title: 'Radhe Krupa Gold',
            description: 'Designed and developed a responsive gold coin e-commerce platform featuring elegant product displays, bulk order functionality, and user-friendly navigation.',
            tags: ['React', 'Tailwind CSS'],
            link: 'https://radha-krupa-gold-6cjk.vercel.app/'
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="text-gray-300 text-lg">Showcasing my journey through code.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 group flex flex-col h-full relative overflow-hidden"
                        >
                            {/* Gradient Blob on Hover */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/40 transition-all duration-500" />

                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    <Folder size={32} className="text-accent" />
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                                    <ExternalLink size={24} className="text-gray-400 group-hover:text-white" />
                                </a>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-cyan transition-all">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-sm font-medium text-cyan/90 bg-cyan/10 px-3 py-1.5 rounded-lg border border-cyan/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
