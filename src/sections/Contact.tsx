import { useState, useRef } from 'react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import content from '../data/content.json';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        // 1. Create a Service (e.g., Gmail) -> Get Service ID
        // 2. Create a Template -> Get Template ID
        // 3. Account -> API Keys -> Get Public Key

        const SERVICE_ID = 'service_9gjtrrf';
        const TEMPLATE_ID = 'template_eifz7fb';
        const PUBLIC_KEY = 'Q11ep9euKKGxriK51';

        if (formRef.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
                .then(() => {
                    setLoading(false);
                    setSuccess(true);
                    if (formRef.current) formRef.current.reset();
                    setTimeout(() => setSuccess(false), 5000);
                }, (error) => {
                    console.error('FAILED...', error);
                    setLoading(false);
                    setError(true);
                });
        }
    };

    return (
        <SectionWrapper id="contact">
            <h2 className="text-4xl font-bold text-center mb-16">
                Contact <span className="text-gradient">Me</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div>
                    <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
                    <p className="text-gray-400 mb-8">
                        Have a project in mind? Let's discuss how we can work together to create something amazing.
                    </p>

                    <div className="space-y-6">
                        <motion.a
                            href={`tel:${content.contact.phone}`}
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                <Phone size={20} />
                            </div>
                            <span>{content.contact.phone}</span>
                        </motion.a>

                        <motion.a
                            href={`mailto:${content.contact.email}`}
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                <Mail size={20} />
                            </div>
                            <span>{content.contact.email}</span>
                        </motion.a>

                        <motion.div
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-4 text-gray-300"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                <MapPin size={20} />
                            </div>
                            <span>{content.contact.location}</span>
                        </motion.div>
                    </div>
                </div>

                {/* Contact Form */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                                placeholder="Your Email"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                            placeholder="Project Inquiry"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Message</label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-dark font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>Sending... <Loader2 className="animate-spin" size={18} /></>
                        ) : success ? (
                            <>Message Sent! <CheckCircle size={18} /></>
                        ) : (
                            <>Send Message <Send size={18} /></>
                        )}
                    </button>

                    {error && (
                        <p className="text-red-500 text-sm text-center mt-2">
                            Something went wrong. Please try again or email me directly.
                        </p>
                    )}
                </form>
            </div>
        </SectionWrapper>
    );
};
