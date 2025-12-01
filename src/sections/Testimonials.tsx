import { useState, useEffect } from 'react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import content from '../data/content.json';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % content.testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <SectionWrapper id="testimonials" className="bg-dark-lighter/30">
            <h2 className="text-4xl font-bold text-center mb-16">
                Client <span className="text-gradient">Testimonials</span>
            </h2>

            <div className="max-w-4xl mx-auto relative h-64">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                    >
                        <Quote className="text-primary mb-6 opacity-50" size={48} />
                        <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
                            "{content.testimonials[currentIndex].feedback}"
                        </p>
                        <div>
                            <h4 className="text-lg font-bold text-white">
                                {content.testimonials[currentIndex].name}
                            </h4>
                            <div className="flex justify-center gap-1 mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-500">★</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {content.testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-white/20'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
