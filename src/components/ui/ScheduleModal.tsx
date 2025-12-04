import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

interface ScheduleModalProps {
    isOpen: boolean
    onClose: () => void
}

const ScheduleModal = ({ isOpen, onClose }: ScheduleModalProps) => {
    const [selectedDate, setSelectedDate] = useState<number | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [step, setStep] = useState(1)

    const days = Array.from({ length: 30 }, (_, i) => i + 1)
    const timeSlots = ["10:00 AM", "11:00 AM", "02:00 PM", "03:30 PM", "05:00 PM"]

    const handleDateClick = (day: number) => {
        setSelectedDate(day)
        setSelectedTime(null)
    }

    const handleConfirm = () => {
        setStep(2)
        setTimeout(() => {
            setStep(1)
            setSelectedDate(null)
            setSelectedTime(null)
            onClose()
            alert("Meeting Scheduled Successfully! (Demo)")
        }, 2000)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-dark-lighter border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                            <div>
                                <h3 className="text-xl font-bold text-white">Schedule a Call</h3>
                                <p className="text-sm text-gray-400">Book a 30-min discovery session</p>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        <div className="p-6">
                            {step === 1 ? (
                                <>
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                <CalendarIcon className="w-4 h-4 text-primary" /> Select Date
                                            </h4>
                                            <div className="flex gap-2">
                                                <button className="p-1 hover:bg-white/10 rounded"><ChevronLeft className="w-4 h-4" /></button>
                                                <span className="text-sm">December 2025</span>
                                                <button className="p-1 hover:bg-white/10 rounded"><ChevronRight className="w-4 h-4" /></button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-2 text-center mb-2">
                                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                                                <span key={d} className="text-xs text-gray-500">{d}</span>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-7 gap-2">
                                            {days.map((day) => (
                                                <button
                                                    key={day}
                                                    onClick={() => handleDateClick(day)}
                                                    className={`aspect-square rounded-lg text-sm flex items-center justify-center transition-all ${selectedDate === day
                                                            ? "bg-primary text-white shadow-lg shadow-primary/25"
                                                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                                        }`}
                                                >
                                                    {day}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-secondary" /> Select Time
                                        </h4>
                                        <div className="grid grid-cols-3 gap-3">
                                            {timeSlots.map((time) => (
                                                <button
                                                    key={time}
                                                    onClick={() => setSelectedTime(time)}
                                                    disabled={!selectedDate}
                                                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all ${selectedTime === time
                                                            ? "bg-secondary text-black border-secondary"
                                                            : "border-white/10 text-gray-400 hover:border-white/30"
                                                        } ${!selectedDate && "opacity-50 cursor-not-allowed"}`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleConfirm}
                                        disabled={!selectedDate || !selectedTime}
                                        className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-primary/40 transition-all"
                                    >
                                        Confirm Booking
                                    </button>
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Booking Confirmed!</h3>
                                    <p className="text-gray-400 text-sm">We've sent a confirmation email with the details.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default ScheduleModal
