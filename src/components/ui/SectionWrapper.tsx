
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionWrapperProps {
    children: React.ReactNode;
    id: string;
    className?: string;
    delay?: number;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className, delay = 0 }) => {
    return (
        <section id={id} className={clsx('py-20 relative overflow-hidden', className)}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
                className="container mx-auto px-6 relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};
