
import { SectionWrapper } from '../components/ui/SectionWrapper';
import content from '../data/content.json';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <SectionWrapper id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-dark-lighter border border-white/10">
                        {content.about.image ? (
                            <img
                                src={content.about.image}
                                alt={content.about.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-dark to-dark-lighter flex items-center justify-center text-gray-600">
                                <span className="text-6xl">MA</span>
                            </div>
                        )}
                    </div>
                </motion.div>

                <div>
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="text-gradient">{content.about.title}</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {content.about.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <h3 className="text-3xl font-bold text-primary mb-1">2+</h3>
                            <p className="text-gray-400 text-sm">Years Experience</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <h3 className="text-3xl font-bold text-secondary mb-1">10+</h3>
                            <p className="text-gray-400 text-sm">Projects Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
