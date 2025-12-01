import { SectionWrapper } from '../components/ui/SectionWrapper';
import content from '../data/content.json';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }: { project: any }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-96 w-full rounded-xl bg-dark-lighter border border-white/10 group"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-dark shadow-lg overflow-hidden"
            >
                {/* Project image background */}
                {project.image && (
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                        style={{ backgroundImage: `url(${project.image})` }}
                    />
                )}
                {/* Darker overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark/80 to-dark-lighter/90 rounded-xl" />

                <div className="relative z-10 p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2 translate-z-10 drop-shadow-lg">{project.title}</h3>
                    <p className="text-gray-200 mb-6 text-sm drop-shadow-md leading-relaxed">{project.description}</p>

                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-white text-dark font-bold rounded-full flex items-center gap-2 mx-auto hover:bg-primary transition-colors w-fit"
                        >
                            View Project <ExternalLink size={16} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <h2 className="text-4xl font-bold text-center mb-16">
                My <span className="text-gradient">Work</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 perspective-1000">
                {content.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </SectionWrapper>
    );
};
