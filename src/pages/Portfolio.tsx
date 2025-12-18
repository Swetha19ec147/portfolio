import { useState } from 'react'
import Section from '../components/ui/Section'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
    {
        title: "Shannu Masala",
        category: "Website",
        image: "/shannu_masala_dashboard_1764806144200.png",
        description: "Premium spice brand e-commerce platform with inventory management.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
        title: "Navaveetha Wellness",
        category: "Website",
        image: "/navaveetha_wellness_dashboard_1764806162504.png",
        description: "Holistic healthcare platform for patient appointments and wellness tracking.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"]
    },
    {
        title: "Raindrops Garden Store",
        category: "Website",
        image: "/raindrops_garden_dashboard_1764806181351.png",
        description: "E-commerce store for gardening enthusiasts with plant care guides.",
        tech: ["React", "Redux", "Firebase", "Stripe"]
    },
    {
        title: "Booking Agency App",
        category: "Mobile",
        image: "/booking_agency_app_1764806197967.png",
        description: "Mobile application for booking travel and accommodation services.",
        tech: ["React Native", "Expo", "Node.js", "GraphQL"]
    },
    {
        title: "Delivery Management",
        category: "Mobile",
        image: "/delivery_management_app_1764806214865.png",
        description: "Real-time delivery tracking and fleet management solution.",
        tech: ["Flutter", "Dart", "Firebase", "Google Maps API"]
    },
    {
        title: "Medical AI Assistant",
        category: "AI Chatbot",
        image: "/medical_chatbot_1764806233928.png",
        description: "AI-powered assistant for preliminary medical diagnosis and scheduling.",
        tech: ["Python", "TensorFlow", "FastAPI", "React"]
    },
    {
        title: "DevSupport AI",
        category: "AI Chatbot",
        image: "/software_chatbot_1764806255207.png",
        description: "Intelligent chatbot for developer support and documentation search.",
        tech: ["OpenAI API", "LangChain", "Next.js", "Pinecone"]
    },
    {
        title: "Cloud Infrastructure",
        category: "Software",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        description: "Scalable cloud architecture setup and automated deployment pipelines.",
        tech: ["AWS", "Docker", "Kubernetes", "Terraform"]
    }
]

const categories = ["All", "Website", "Mobile", "AI Chatbot", "Software"]

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All")
    const [currentIndex, setCurrentIndex] = useState(0)

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % filteredProjects.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
    }

    // Reset index when category changes
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category)
        setCurrentIndex(0)
    }

    return (
        <Section id="portfolio" title="Featured Projects" subtitle="Our Work">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                            ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* 3D Carousel Container */}
            <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000 overflow-hidden">
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project, index) => {
                        // Calculate position relative to current index
                        let position = (index - currentIndex)

                        // Handle infinite loop logic visually
                        if (filteredProjects.length > 2) {
                            if (position < -Math.floor(filteredProjects.length / 2)) position += filteredProjects.length
                            if (position > Math.floor(filteredProjects.length / 2)) position -= filteredProjects.length
                        }

                        // Only render items within a certain range to avoid clutter
                        if (Math.abs(position) > 2) return null

                        const isActive = position === 0

                        return (
                            <motion.div
                                key={project.title}
                                initial={false}
                                animate={{
                                    x: position * 260, // Spacing between cards
                                    scale: isActive ? 1 : 0.8,
                                    zIndex: isActive ? 10 : 10 - Math.abs(position),
                                    rotateY: position * -25, // Rotate cards for 3D effect
                                    opacity: Math.abs(position) > 1.5 ? 0 : 1
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20
                                }}
                                className="absolute w-[300px] md:w-[400px] bg-dark-lighter rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                                style={{
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                <div className="relative h-48 overflow-hidden group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 bg-dark-lighter">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-md">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((t, i) => (
                                            <span key={i} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 md:left-20 z-20 p-3 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 text-white transition-all backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 md:right-20 z-20 p-3 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 text-white transition-all backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Swipe Indicator for Mobile */}
            <div className="text-center mt-8 text-gray-500 text-sm animate-pulse md:hidden">
                Swipe to explore
            </div>
        </Section>
    )
}

export default Portfolio
