import { SectionWrapper } from '../components/ui/SectionWrapper';
import content from '../data/content.json';
import { motion } from 'framer-motion';
import { Code, Palette, Video, BookOpen, Users, Clock, Layout, Smartphone, PenTool, Atom, Database, Sparkles } from 'lucide-react';

const iconMap: Record<string, any> = {
    "Web Design": Layout,
    "Video editing": Video,
    "E-book design": BookOpen,
    "Team Work": Users,
    "Time management": Clock,
    "HTML": Code,
    "CSS": Palette,
    "Media Query": Smartphone,
    "Bootstrap": Layout,
    "Tailwind": Palette,
    "Canva": PenTool,
    "React": Atom,
    "Supabase": Database,
    "AI Tools": Sparkles,
    "Photoshop": Palette
};

export const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <h2 className="text-4xl font-bold text-center mb-16">
                Skills & <span className="text-gradient">Tools</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Skills */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                        Professional Skills
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {content.skills.map((skill, index) => {
                            const Icon = iconMap[skill] || Code;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                    className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3 transition-colors"
                                >
                                    <Icon className="text-primary" size={24} />
                                    <span className="font-medium">{skill}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Tools */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="w-8 h-1 bg-secondary rounded-full"></span>
                        Technical Tools
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {content.tools.map((tool, index) => {
                            const Icon = iconMap[tool] || Code;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                    className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3 transition-colors"
                                >
                                    <Icon className="text-secondary" size={24} />
                                    <span className="font-medium">{tool}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
