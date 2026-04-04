import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>

                        <main>
                {/* Hero Section */}
                <section className="relative h-[921px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img alt="Empowering Communities" className="w-full h-full object-cover" src="/Images/1.png" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-primary/20 to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                        <div className="max-w-3xl">
                            <span className="inline-block px-4 py-1 mb-6 bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase rounded-full">
                                Foundation for Change
                            </span>
                            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter">
                                ENABLING COMMUNITIES, <span className="text-secondary-container">PROMOTING <br /> JUSTICE</span>.
                            </h1>
                            <p className="text-xl text-white/80 mb-10 leading-relaxed font-bold max-w-xl">
                                A diplomatic legacy dedicated to grassroots transformation, social liberty, and sustainable equality across the nation.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/donate" className="px-8 py-4 bg-gradient-to-r from-[#2e7d32] to-secondary-container text-white font-headline font-bold rounded-md tracking-widest shadow-2xl hover:scale-105 transition-transform active:scale-95 uppercase text-sm inline-block text-center">
                                    DONATE NOW
                                </Link>
                                <Link to="/missions" className="px-8 py-4 border border-white/30 text-white font-headline font-bold rounded-md tracking-widest hover:bg-white/10 transition-colors uppercase text-sm inline-block text-center">
                                    Our Mission
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Service Columns (Tonal Vertical Spines) */}
                <section className="py-24 bg-surface px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Justice Column */}
                            <div className="relative bg-secondary-container p-12 rounded-xl group hover:-translate-y-2 transition-all duration-500 shadow-xl overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 scale-150">
                                    <span className="material-symbols-outlined text-8xl" data-icon="gavel">gavel</span>
                                </div>
                                <div className="relative z-10">
                                    <span className="material-symbols-outlined text-primary text-5xl mb-6 block" data-icon="balance">balance</span>
                                    <h3 className="font-headline text-3xl font-extrabold text-primary mb-4">JUSTICE</h3>
                                    <p className="text-primary/80 font-medium mb-8 leading-relaxed">Advocating for the unheard, ensuring legal empowerment and equitable access to human rights for all citizens.</p>
                                    <a className="inline-flex items-center gap-2 font-headline text-xs font-black tracking-widest text-primary uppercase border-b-2 border-primary/20 hover:border-primary transition-all" href="#">
                                        Learn More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                            {/* Liberty Column */}
                            <div className="relative bg-surface-container-lowest p-12 rounded-xl group hover:-translate-y-2 transition-all duration-500 shadow-xl border border-outline-variant/10">
                                <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 text-primary">
                                    <span className="material-symbols-outlined text-8xl" data-icon="auto_awesome">auto_awesome</span>
                                </div>
                                <div className="relative z-10">
                                    <span className="material-symbols-outlined text-primary text-5xl mb-6 block" data-icon="liberty">robot</span>
                                    <h3 className="font-headline text-3xl font-extrabold text-primary mb-4">LIBERTY</h3>
                                    <p className="text-on-surface-variant font-medium mb-8 leading-relaxed">Protecting freedom of expression and fostering environments where every individual can thrive without fear.</p>
                                    <a className="inline-flex items-center gap-2 font-headline text-xs font-black tracking-widest text-primary uppercase border-b-2 border-primary/20 hover:border-primary transition-all" href="#">
                                        Learn More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                            {/* Equality Column */}
                            <div className="relative bg-[#2e7d32] p-12 rounded-xl group hover:-translate-y-2 transition-all duration-500 shadow-xl overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 text-white">
                                    <span className="material-symbols-outlined text-8xl" data-icon="diversity_3">diversity_3</span>
                                </div>
                                <div className="relative z-10">
                                    <span className="material-symbols-outlined text-white text-5xl mb-6 block" data-icon="groups">groups</span>
                                    <h3 className="font-headline text-3xl font-extrabold text-white mb-4">EQUALITY</h3>
                                    <p className="text-white/80 font-medium mb-8 leading-relaxed">Bridging the socio-economic divide through targeted educational and healthcare interventions in rural areas.</p>
                                    <a className="inline-flex items-center gap-2 font-headline text-xs font-black tracking-widest text-white uppercase border-b-2 border-white/20 hover:border-white transition-all" href="#">
                                        Learn More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Impact Counter (Editorial Style) */}
                <section className="py-24 bg-primary text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="grid grid-cols-6 h-full w-full">
                            <div className="border-r border-white/20"></div>
                            <div className="border-r border-white/20"></div>
                            <div className="border-r border-white/20"></div>
                            <div className="border-r border-white/20"></div>
                            <div className="border-r border-white/20"></div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">
                            <div className="space-y-2">
                                <div className="font-headline text-6xl font-black text-secondary-container">500k+</div>
                                <div className="text-xs font-headline tracking-[0.2em] font-bold uppercase text-white/60">Beneficiaries</div>
                            </div>
                            <div className="space-y-2">
                                <div className="font-headline text-6xl font-black text-white">120+</div>
                                <div className="text-xs font-headline tracking-[0.2em] font-bold uppercase text-white/60">Active Projects</div>
                            </div>
                            <div className="space-y-2">
                                <div className="font-headline text-6xl font-black text-secondary-container">25+</div>
                                <div className="text-xs font-headline tracking-[0.2em] font-bold uppercase text-white/60">Regions Impacted</div>
                            </div>
                            <div className="space-y-2">
                                <div className="font-headline text-6xl font-black text-white">15k</div>
                                <div className="text-xs font-headline tracking-[0.2em] font-bold uppercase text-white/60">Volunteers</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Projects Grid (Broken Grid Layout) */}
                <section className="py-32 bg-surface-container-low px-8 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                            <div className="max-w-xl">
                                <h2 className="text-xs font-headline font-black text-secondary tracking-[0.3em] uppercase mb-4">Our Initiatives</h2>
                                <p className="font-headline text-4xl md:text-5xl font-extrabold text-primary leading-tight">Catalyzing systemic change through action.</p>
                            </div>
                            <a className="bg-primary text-white px-8 py-4 rounded-md font-headline text-xs font-bold tracking-widest hover:bg-primary-container transition-all" href="#">VIEW ALL PROJECTS</a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            {/* Project 1 */}
                            <div className="md:col-span-7 group">
                                <div className="relative h-[500px] overflow-hidden rounded-xl">
                                    <img alt="Smart Education" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern classroom setting with students engaged in technology-based learning in a bright, contemporary educational facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtQr2mJOURQYKT02nQB9xKpCMkVLha8TJYI6bGmV_f5TJGx23OAeakbOeTcE-BIyeSLtvRhV7HlULNabSUYB7DuoBrxD7PL6MEiv52Ak-XkMYyO7uuB4gl8ilc3SGqOBxF-ajCA69-ti3QE4CwnftgudpVOKfQhVShMmWJTLvrLmeNx_xQHiJ7xGJUIoDksOPcskrXow7IlS2dZfFAFUyt3cfzr631hAvyUYP9husgxNyhq7PiOEx8k5pAlfkeu7yJtHeDMd7g2IFt" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-10">
                                        <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-[10px] font-black tracking-widest uppercase mb-4 inline-block">Education</span>
                                        <h4 className="text-3xl font-headline font-bold text-white mb-2">Smart Village Academy</h4>
                                        <p className="text-white/70 max-w-md">Deploying digital literacy and secondary education infrastructure in remote mountainous regions.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Project 2 */}
                            <div className="md:col-span-5 flex flex-col justify-center">
                                <div className="relative h-[400px] overflow-hidden rounded-xl mb-8 group">
                                    <img alt="Healthcare Drive" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Portrait of a medical professional providing care in a community clinic setting with soft clinical lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL6HBr7j7Db4pVDHVyeURt0HRDSSpIWnzux_tDoWgk6XnZVV5IrbHfdB5UQSB7l9WXIeBzm1YehwLFjxJ2EIb7LvhSFKPFSkIf24Z7TaOB73l3D-7O1GGto84eeD8arFCRPnunx61p9xZH7obC4l1zGLSgHK5ye4SkW5pFLshfX-pjmUjmlNMmpphwOLYF5LnWhVUSyIrwrEBNsvHxQ_zRLMCg-YVo-8wc7BiG11s0z39hSvDnS0xBcIhnf3Izi1LGLDLwJ6rH5TVh" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2e7d32]/90 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-8">
                                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-black tracking-widest uppercase mb-4 inline-block">Healthcare</span>
                                        <h4 className="text-2xl font-headline font-bold text-white mb-2">Mobile Medical Units</h4>
                                    </div>
                                </div>
                                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-l-4 border-secondary-container">
                                    <p className="italic text-primary/70 font-medium mb-4">"The foundation provided a lifeline when our village was cut off. Their dedication is unmatched."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-surface-variant"></div>
                                        <div>
                                            <p className="text-xs font-bold text-primary">Kiran Deshmukh</p>
                                            <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Community Leader, Satara</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer className="bg-[#00003c] text-white pt-24 pb-0 relative overflow-hidden">
                {/* Texture/Watermark */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                    <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-primary-container rounded-full blur-[100px]"></div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start w-full px-12 py-16 gap-12 max-w-7xl mx-auto relative z-10 border-t-4 border-t-[#fe9832]">
                    <div className="flex-1 max-w-sm">
                        <div className="text-2xl font-bold text-white font-headline mb-6 tracking-tighter">DR. DYANESHAWAR MULAY FOUNDATION</div>
                        <p className="text-gray-300 font-body leading-relaxed mb-8">Building a future where justice, liberty, and equality are not just ideals, but a lived reality for every citizen.</p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fe9832] transition-colors" href="#"><span className="material-symbols-outlined text-lg" data-icon="share">share</span></a>
                            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fe9832] transition-colors" href="#"><span className="material-symbols-outlined text-lg" data-icon="mail">mail</span></a>
                            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fe9832] transition-colors" href="#"><span className="material-symbols-outlined text-lg" data-icon="link">link</span></a>
                        </div>
                    </div>
                    <div className="flex gap-20">
                        <div className="space-y-4">
                            <h5 className="text-[#fe9832] font-headline font-bold text-sm tracking-widest uppercase mb-6">Quick Links</h5>
                            <ul className="space-y-3">
                                <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832]" href="#">Our History</a></li>
                                <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832]" href="#">Board Members</a></li>
                                <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832]" href="#">Annual Reports</a></li>
                                <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832]" href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-[#fe9832] font-headline font-bold text-sm tracking-widest uppercase mb-6">Impact</h5>
                            <ul className="space-y-3">
                                <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832]" href="#">Case Studies</a></li>
                                <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832]" href="#">Success Stories</a></li>
                                <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832]" href="#">Partner with Us</a></li>
                                <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832]" href="#">Volunteer</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 max-w-xs">
                        <h5 className="font-headline font-bold text-sm tracking-widest uppercase text-white mb-4">Contact Us</h5>
                        <p className="text-sm text-gray-300 mb-4">12th Floor, Diplomatic Enclave, Chanakyapuri, New Delhi - 110021</p>
                        <p className="text-sm text-[#fe9832] font-bold">contact@mulayfoundation.org</p>
                        <p className="text-sm text-gray-300 mt-2">+91 11 2345 6789</p>
                    </div>
                </div>
                <div className="px-12 py-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto border-t border-white/5 gap-4">
                    <p className="text-gray-400 text-xs uppercase tracking-widest">© 2024 Dr. Dyaneshawar Mulay Foundation. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a className="text-gray-400 text-[10px] uppercase tracking-widest hover:text-white" href="#">Privacy Policy</a>
                        <a className="text-gray-400 text-[10px] uppercase tracking-widest hover:text-white" href="#">Terms of Service</a>
                    </div>
                </div>
                {/* Tricolor Band */}
                <div className="w-full flex h-2">
                    <div className="flex-1 bg-[#fe9832]"></div>
                    <div className="flex-1 bg-white"></div>
                    <div className="flex-1 bg-[#2e7d32]"></div>
                </div>
            </footer>

        </div>
    );
}
