
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -10, scale: 1.02 } : {}}
            className={clsx(
                'glass rounded-2xl p-6 transition-all duration-300',
                'hover:shadow-[0_0_30px_rgba(0,242,234,0.1)] hover:border-primary/30',
                className
            )}
        >
            {children}
        </motion.div>
    );
};
