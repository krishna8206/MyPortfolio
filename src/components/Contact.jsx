import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-cyan font-bold tracking-wider mb-4 uppercase">What's Next?</h2>
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Get In Touch</h2>
                    <p className="text-gray-300 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <a
                            href="mailto:krishnapanchal822006@gmail.com"
                            className="glass-card p-6 flex items-center gap-4 hover:scale-105 group min-w-[300px] justify-center"
                        >
                            <Mail className="text-accent group-hover:rotate-12 transition-transform" size={28} />
                            <span className="text-white font-medium text-lg">Email Me</span>
                        </a>

                        <a
                            href="tel:+918733999130"
                            className="glass-card p-6 flex items-center gap-4 hover:scale-105 group min-w-[300px] justify-center"
                        >
                            <Phone className="text-cyan group-hover:rotate-12 transition-transform" size={28} />
                            <span className="text-white font-medium text-lg">Call Me</span>
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
