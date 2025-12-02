import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'Grownited Pvt. Ltd.',
            role: 'MERN Stack Developer Intern',
            period: 'Jan 2025 - April 2025',
            description: [
                'Designed and developed full-stack applications using MongoDB, Express.js, React.js, and Node.js.',
                'Built RESTful APIs and integrated them with React frontend for smooth data flow.',
                'Implemented authentication & authorization using JWT, bcrypt, and role-based access control.'
            ]
        },
        {
            company: 'SUDARSANA ENTREPRENEURS UNITS Pvt Ltd',
            role: 'Full Stack Developer',
            period: 'May 2025 - Present',
            description: [
                'Developed and deployed scalable web applications using React, Node.js, Express, and MongoDB.',
                'Built responsive, cross-browser compatible UIs with HTML, CSS, Tailwind, and Bootstrap.',
                'Implemented secure authentication & authorization with JWT, bcrypt, and role-based access control.',
                'Integrated payment gateways (Razorpay/Stripe) and wallet systems.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="section-title">Experience</h2>
                    <p className="text-gray-300 text-lg">My professional journey in tech.</p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-8 md:p-10"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-accent text-lg">
                                        <Briefcase size={20} />
                                        <span className="font-medium">{exp.company}</span>
                                    </div>
                                </div>
                                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="space-y-4">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-300 leading-relaxed">
                                        <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-accent to-cyan shrink-0" />
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
};

export default Experience;
