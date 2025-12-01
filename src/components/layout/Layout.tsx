import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-primary/30 selection:text-primary">
            <Navbar />
            <main className="relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};
