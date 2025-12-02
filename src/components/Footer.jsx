import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-black/40 backdrop-blur-md border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        Designed & Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan font-bold">Krishna Panchal</span>
                    </p>

                    <div className="flex gap-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors group">
                            <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors group">
                            <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a href="mailto:krishnapanchal822006@gmail.com" className="p-2 rounded-full hover:bg-white/10 transition-colors group">
                            <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
