import { Facebook, Instagram, Mail, Phone, MessageCircle } from 'lucide-react';
import content from '../../data/content.json';

export const Footer = () => {
    return (
        <footer className="bg-dark-lighter py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gradient mb-2">Mohamed A.</h3>
                        <p className="text-gray-400">Building digital experiences that matter.</p>
                    </div>

                    <div className="flex space-x-6">
                        {content.contact.socials.facebook && (
                            <a
                                href={content.contact.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                        )}
                        {content.contact.socials.whatsapp && (
                            <a
                                href={`https://wa.me/${content.contact.socials.whatsapp.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <MessageCircle size={20} />
                            </a>
                        )}
                        {content.contact.socials.instagram && (
                            <a
                                href={content.contact.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                        )}
                        <a
                            href={`mailto:${content.contact.email}`}
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href={`tel:${content.contact.phone}`}
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <Phone size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Mohamed A. AbdElfattah. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
