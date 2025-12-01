
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import content from '../data/content.json';
import { Layout, Smartphone, RefreshCw } from 'lucide-react';

const iconMap: Record<string, any> = {
    "Web Design": Layout,
    "Fully responsive": Smartphone,
    "Website updates & refresh services": RefreshCw
};

export const Services = () => {
    return (
        <SectionWrapper id="services">
            <h2 className="text-4xl font-bold text-center mb-16">
                My <span className="text-gradient">Services</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {content.services.map((service, index) => {
                    const Icon = iconMap[service.title] || Layout;
                    return (
                        <Card key={index} className="text-center p-8">
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <Icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </Card>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};
