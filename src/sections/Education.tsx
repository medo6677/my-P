
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import content from '../data/content.json';
import { GraduationCap, Award } from 'lucide-react';

export const Education = () => {
    return (
        <SectionWrapper id="education">
            <h2 className="text-4xl font-bold text-center mb-16">
                My <span className="text-gradient">Education</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {content.education.map((item, index) => (
                    <Card key={index} className="relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            {index === 0 ? <Award size={100} /> : <GraduationCap size={100} />}
                        </div>

                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                                {item.date}
                            </span>
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <h4 className="text-xl text-gray-400 mb-4">{item.institution}</h4>
                            <p className="text-gray-300 mb-2">{item.details}</p>
                            <p className="text-gray-500 text-sm">{item.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};
