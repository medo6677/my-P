import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HeroBackground } from '../components/canvas/HeroBackground';
import content from '../data/content.json';

export const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            <HeroBackground />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-xl md:text-2xl text-primary font-medium mb-4 tracking-wide"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Hello, I'm
                    </motion.h2>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                        <TypeAnimation
                            sequence={[
                                '',
                                500,
                                content.hero.name,
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={0}
                            cursor={true}
                            style={{ display: 'inline-block' }}
                        />
                    </h1>

                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        <TypeAnimation
                            sequence={[
                                '',
                                1500,
                                content.hero.title,
                                2000,
                                'Creative Designer',
                                2000,
                                content.hero.title,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-gradient"
                            style={{ display: 'inline-block' }}
                        />
                    </h2>

                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary text-dark font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};
