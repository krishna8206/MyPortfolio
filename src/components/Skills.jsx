import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Wrench } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Layout className="text-accent" />,
            skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"]
        },
        {
            title: "Backend",
            icon: <Server className="text-cyan" />,
            skills: ["Node.js", "Express.js", "MongoDB"]
        },
        {
            title: "Tools",
            icon: <Wrench className="text-violet" />,
            skills: ["Git", "GitHub", "VS Code", "Postman"]
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="section-title">Technical Arsenal</h2>
                    <p className="text-gray-300 text-lg">The tools I use to build the future.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-8 group hover:scale-105"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="p-4 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:bg-white/10 transition-colors shadow-lg">
                                    {React.cloneElement(category.icon, { size: 32 })}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>

                                <div className="flex flex-wrap justify-center gap-3">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 text-sm font-medium text-gray-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/20 hover:border-white/30 transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
