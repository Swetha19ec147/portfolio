import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-heading">
                            Visionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient bg-300%">Byte Works</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
                            Transforming ideas into powerful <span className="text-white font-medium">web applications</span>.
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-2xl leading-relaxed">
                            Specialized in Full Stack Development, Cloud Innovation, and AI Solutions. We engineer intelligent systems that drive business growth.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-sm text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Available for new projects
                            </div>
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-sm text-gray-300">
                                <span className="text-secondary">★</span>
                                2+ Years Experience
                            </div>
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-sm text-gray-300">
                                <span className="text-primary">⚡</span>
                                Fast Delivery
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-6">
                            <motion.a
                                href="#contact"
                                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center gap-2 group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            <motion.a
                                href="#portfolio"
                                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Our Work
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
