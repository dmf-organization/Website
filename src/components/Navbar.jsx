import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;

    const getLinkClass = (targetPath) => {
        const isActive = path === targetPath;
        return `font-headline tracking-tight leading-relaxed uppercase font-semibold text-sm transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ${
            isActive 
                ? 'text-white border-b-2 border-[#fe9832] pb-1' 
                : 'text-white/80 hover:text-white'
        }`;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
                <div className="text-lg font-extrabold tracking-tighter text-white font-headline uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Dr. Dnyaneshwar Mulay Foundation
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <Link className={getLinkClass('/')} to="/">Home</Link>
                    <Link className={getLinkClass('/about')} to="/about">About</Link>
                    <Link className={getLinkClass('/projects')} to="/projects">Projects</Link>
                    <Link className={getLinkClass('/events')} to="/events">Events</Link>
                </div>
                <Link to="/donate" className="bg-[#fe9832] text-white px-6 py-2.5 rounded-md font-headline text-xs font-bold tracking-widest hover:bg-[#000080] transition-all duration-300 active:scale-95 inline-block text-center">
                    DONATE NOW
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
