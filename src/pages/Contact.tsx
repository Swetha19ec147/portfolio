import { useState } from 'react'
import Section from '../components/ui/Section'
import { Mail, Phone, MapPin, Send, Linkedin, Calendar } from 'lucide-react'
import ScheduleModal from '../components/ui/ScheduleModal'

const Contact = () => {
    const [isScheduleOpen, setIsScheduleOpen] = useState(false)

    return (
        <Section id="contact" title="Get In Touch" subtitle="Contact Us">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Let's Build Something Amazing</h3>
                    <p className="text-gray-400 mb-8 text-lg">
                        Have an idea? Need a technical partner? Reach out to us and let's discuss how we can help your business grow.
                    </p>

                    <button
                        onClick={() => setIsScheduleOpen(true)}
                        className="mb-10 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-2"
                    >
                        <Calendar className="w-5 h-5" />
                        Schedule a Discovery Call
                    </button>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email Us</p>
                                <a href="mailto:visionarybyteworks@gmail.com" className="text-white font-medium hover:text-secondary transition-colors">
                                    visionarybyteworks@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Call Us</p>
                                <div className="flex flex-col">
                                    <a href="tel:+919789024336" className="text-white font-medium hover:text-secondary transition-colors">
                                        +91 97890 24336
                                    </a>
                                    <a href="tel:+916369099823" className="text-white font-medium hover:text-secondary transition-colors">
                                        +91 63690 99823
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="text-white font-medium">Chennai, India</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">LinkedIn</p>
                                <div className="flex flex-col">
                                    <a
                                        href="https://www.linkedin.com/company/visionbyteworks/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white font-medium hover:text-secondary transition-colors text-sm"
                                    >
                                        Visionary Byte Works
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="Project Inquiry"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="Tell us about your project..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                        Send Message
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
            <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
        </Section>
    )
}

export default Contact
