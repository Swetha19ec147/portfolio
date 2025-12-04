import React from 'react';

// Actually, let's stick to standard className prop for simplicity unless I create a utils file.
// I'll create a simple version first.

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    title?: string;
    subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id = "", title, subtitle }) => {
    return (
        <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
            {(title || subtitle) && (
                <div className="mb-16 text-center">
                    {subtitle && (
                        <span className="block text-secondary text-sm font-medium tracking-widest uppercase mb-2">
                            {subtitle}
                        </span>
                    )}
                    {title && (
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                            {title}
                        </h2>
                    )}
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
                </div>
            )}
            {children}
        </section>
    );
};

export default Section;
