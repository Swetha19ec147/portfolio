import Section from '../components/ui/Section'

const About = () => {
    const skills = [
        "React & Next.js", "TypeScript", "Node.js", "Python",
        "AWS & Cloud", "Docker", "PostgreSQL", "MongoDB",
        "Tailwind CSS", "Framer Motion", "AI Integration", "System Design"
    ]

    return (
        <Section id="about" title="About Us" subtitle="Who We Are">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            <strong className="text-white">Visionary Byte Works</strong> is a next-gen technology partner specializing in <strong>AI-Driven Development</strong> and <strong>Cloud Innovation</strong>. We don't just build software; we engineer intelligent systems that drive growth.
                        </p>
                        <p>
                            Led by a team of experienced Engineers with deep expertise in <strong>Full Stack Development, Cloud Architecture, and QA Automation</strong>, we bring a rigorous engineering mindset to every project.
                        </p>
                        <p>
                            With a passion for solving complex problems, our team is dedicated to empowering startups with scalable, secure, and future-proof technology solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center hover:border-primary/50 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-1">2+</h3>
                            <p className="text-xs text-gray-400">Years Experience</p>
                        </div>
                        <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center hover:border-secondary/50 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-1">10+</h3>
                            <p className="text-xs text-gray-400">Happy Clients</p>
                        </div>
                        <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center hover:border-primary/50 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-1">15+</h3>
                            <p className="text-xs text-gray-400">Projects Done</p>
                        </div>
                        <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center hover:border-secondary/50 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-1">20+</h3>
                            <p className="text-xs text-gray-400">Technologies</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50" />
                    <div className="relative bg-dark-lighter p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-secondary rounded-full" />
                            Technical Expertise
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-lg text-sm text-gray-300 hover:text-white transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <div className="flex justify-between items-center text-sm text-gray-400">
                                <span>Experience</span>
                                <span className="text-white font-bold">2+ Years</span>
                            </div>
                            <div className="w-full h-2 bg-white/5 rounded-full mt-2 overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-primary to-secondary w-[40%]" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center text-sm text-gray-400">
                                <span>Projects Delivered</span>
                                <span className="text-white font-bold">15+</span>
                            </div>
                            <div className="w-full h-2 bg-white/5 rounded-full mt-2 overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-secondary to-primary w-[30%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About
