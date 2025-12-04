import Section from '../components/ui/Section'
import { motion } from 'framer-motion'
import { Code, Smartphone, Database, Zap, Shield, Users, Clock } from 'lucide-react'

const services = [
    {
        icon: <Code className="w-8 h-8" />,
        title: "AI-Infused Web Solutions",
        tag: "Innovation",
        description: "Building intelligent, scalable web platforms integrated with cutting-edge AI capabilities.",
        features: ["AI Integration", "Next.js & React", "Smart Automation", "Predictive Analytics"]
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Digital Transformation Strategy",
        tag: "Strategy",
        description: "Guiding businesses through digital evolution with actionable roadmaps and tech insights.",
        features: ["Tech Roadmap", "Digital Audit", "Process Automation", "Growth Strategy"]
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Legacy System Modernization",
        tag: "Evolution",
        description: "Transforming outdated software into modern, secure, and high-performance cloud solutions.",
        features: ["Cloud Migration", "Code Refactoring", "Security Hardening", "UI/UX Refresh"]
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Next-Gen Mobile Experiences",
        tag: "Mobile",
        description: "Crafting fluid, native-like mobile applications that engage users across all devices.",
        features: ["React Native", "Cross-Platform", "Offline First", "Biometric Security"]
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Enterprise Cloud Architecture",
        tag: "Infrastructure",
        description: "Designing robust, scalable cloud infrastructure that grows with your business needs.",
        features: ["AWS/Azure", "Microservices", "Serverless", "Auto-scaling"]
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "High-Performance Engineering",
        tag: "Performance",
        description: "Optimizing every layer of your application for maximum speed, reliability, and SEO.",
        features: ["Core Web Vitals", "Edge Caching", "Database Tuning", "Load Balancing"]
    }
]

const features = [
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Rapid Agile Delivery",
        description: "Iterative development cycles for faster time-to-market"
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Enterprise Security",
        description: "Bank-grade security standards and data protection"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Dedicated Partnership",
        description: "We act as your internal tech team, not just vendors"
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Future-Proof Tech",
        description: "Built on scalable stacks designed for long-term growth"
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
}

const Services = () => {
    return (
        <Section id="services" title="Our Expertise" subtitle="Visionary Solutions">
            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary/50 transition-all"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <span className="px-3 py-1 text-xs font-medium text-primary border border-primary/20 rounded-full bg-primary/5">
                                {service.tag}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            {service.description}
                        </p>

                        <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-sm text-gray-500">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>

            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Why Partner with Visionary Byte Works?</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We don't just write code; we engineer digital transformation. Here is how we drive value for your business.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center hover:bg-white/10 transition-colors"
                    >
                        <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4 text-secondary">
                            {feature.icon}
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}

export default Services
