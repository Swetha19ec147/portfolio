import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = "", onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`bg-dark-lighter p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors duration-300 ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

export default Card;
