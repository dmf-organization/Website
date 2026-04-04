import React from 'react';

export default function About() {
    return (
        <div>

                        <main>
                {/* Hero Section: The Statesman's Portrait */}
                <section className="relative min-h-[819px] flex items-center overflow-hidden bg-primary">
                    <div className="absolute inset-0 z-0">
                        <img alt="Statesman Portrait" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" data-alt="A dignified close-up portrait of a senior diplomat in a formal suit against a dark, textured studio background with soft cinematic lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsO_rW5lpDWdTVZetwt_65loZatwMdj_tmJBmKqKLpPCBRZcykr6Nm9_v-Jhlaay-m9punrftMiKkFVawNPLhbAAT_sYIFnvE2is1iUD-aroCKCYNOHxZZSa7nyCFyKtjk0EIurZs-HauIpjJQ7qtUdRnsO5jGaRt34IKmNzpbgAZQ1b0KMo27c44IG5UsncA9Ch5twtLWTws2V5VytqibOGGG3CXkfIN7fIjoDGFH0qUD5coUBoTDMa5BnDmn0zUQvsfduED9-5wK" />
                        <div className="absolute inset-0 signature-gradient opacity-60"></div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                        <div className="max-w-3xl">
                            <span className="inline-block font-label text-secondary-container text-sm font-semibold tracking-[0.2em] uppercase mb-4">The Sovereign Legacy</span>
                            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
                                The Architect of <span className="text-secondary-container">Diplomatic Compassion.</span>
                            </h1>
                            <p className="font-body text-xl text-white/80 leading-relaxed max-w-2xl">
                                Dedicated to bridging the gap between governance and grassroots empowerment, carrying forward the vision of Dr. Dyaneshawar Mulay.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Biography: Asymmetric Layout */}
                <section className="py-24 bg-surface overflow-hidden">
                    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                        <div className="md:col-span-5 relative">
                            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                                <img alt="Professional setting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-alt="Dignified office setting with antique books, a globe, and fine wooden furniture, evoking a sense of history and global perspective." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHFN400cLCauwshSjaOMI8dtxGxg8DiXKp1zAf7Sa-WMHhO99z7o4zM4-1f3eSTPRE3RGskRx2ndaYwIzHe3dzVuy_NlM_hJmw1NN_H7-X36H3AN-A4zr8H6a4I0rssoetkqAF-OTbQg1F8hRNoPTGRYK6JbKAP6PIT6EfeoCgMvMLolrP3sE60fdHOTwIwbS7bsbfKWd-UTuulmGUl7283LcmjoY4k8CsqOMrw6sObPV32bkNMfJaoDMYgJ7vDjnyt0hUY84NgaCc" />
                            </div>
                            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary-container/10 -z-10 rounded-full blur-3xl"></div>
                        </div>
                        <div className="md:col-span-7">
                            <span className="font-label text-secondary text-xs font-bold tracking-widest uppercase mb-4 block">BIOGRAPHICAL BRIEF</span>
                            <h2 className="font-headline text-4xl font-bold text-primary mb-8 leading-tight">Dr. Dyaneshawar Mulay</h2>
                            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                                <p>
                                    Dr. Dyaneshawar Mulay is a distinguished career diplomat and author who has dedicated his life to public service. His journey from a humble rural upbringing to representing India on the world stage serves as the foundational inspiration for this institution.
                                </p>
                                <p>
                                    Having served in prominent roles across ministries and international embassies, Dr. Mulay observed the critical need for structured social interventions that empower the marginalized. This realization birthed the Foundation, a vehicle for systemic change.
                                </p>
                                <div className="pt-4 border-l-4 border-secondary pl-6 italic text-primary font-medium">
                                    "True leadership lies not in the authority one commands, but in the barriers one removes for the common citizen."
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Mission & Vision: Editorial Bento Grid */}
                <section className="py-24 bg-surface-container-low">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Mission Card */}
                            <div className="bg-surface-container-lowest p-12 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary transition-all duration-300 group-hover:w-3"></div>
                                <span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="flag">flag</span>
                                <h3 className="font-headline text-3xl font-bold text-primary mb-4">Our Mission</h3>
                                <p className="text-on-surface-variant text-lg leading-relaxed">
                                    To create a robust ecosystem of empowerment through education, administrative guidance, and sustainable livelihoods, ensuring every individual has the agency to rewrite their destiny.
                                </p>
                            </div>
                            {/* Vision Card */}
                            <div className="bg-surface-container-lowest p-12 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary-container transition-all duration-300 group-hover:w-3"></div>
                                <span className="material-symbols-outlined text-4xl text-secondary-container mb-6" data-icon="visibility">visibility</span>
                                <h3 className="font-headline text-3xl font-bold text-primary mb-4">Our Vision</h3>
                                <p className="text-on-surface-variant text-lg leading-relaxed">
                                    A nation where the distance between policy and people is bridged by empathy, and where meritocracy thrives without the constraints of socio-economic background.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Organizational History: Timeline-esque Column */}
                <section className="py-24 bg-surface">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="md:w-1/3">
                                <h2 className="font-headline text-4xl font-bold text-primary sticky top-32">The Genesis of <span className="text-secondary">Impact</span></h2>
                            </div>
                            <div className="md:w-2/3 space-y-16">
                                <div className="relative pl-12 border-l border-outline-variant/30 pb-4">
                                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-secondary"></div>
                                    <span className="font-label text-sm text-secondary font-bold">2018</span>
                                    <h4 className="font-headline text-xl font-bold text-primary mt-2 mb-3">Foundation Laying</h4>
                                    <p className="text-on-surface-variant leading-relaxed">The Foundation was established with the core mandate of rural administrative literacy, helping farmers and students navigate complex government systems.</p>
                                </div>
                                <div className="relative pl-12 border-l border-outline-variant/30 pb-4">
                                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary"></div>
                                    <span className="font-label text-sm text-primary font-bold">2020</span>
                                    <h4 className="font-headline text-xl font-bold text-primary mt-2 mb-3">Global Outreach</h4>
                                    <p className="text-on-surface-variant leading-relaxed">Initiated international scholarship programs, connecting brilliant minds from underserved backgrounds with global mentorship opportunities.</p>
                                </div>
                                <div className="relative pl-12 border-l border-outline-variant/30 pb-4">
                                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-tertiary-container"></div>
                                    <span className="font-label text-sm text-on-tertiary-container font-bold">2023</span>
                                    <h4 className="font-headline text-xl font-bold text-primary mt-2 mb-3">Institutional Scaling</h4>
                                    <p className="text-on-surface-variant leading-relaxed">Launched the 'Sovereign Skill Center,' a multi-disciplinary hub for vocational excellence and digital literacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Board Members: High-End Card Grid */}
                <section className="py-24 bg-surface-container-high">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="text-center mb-16">
                            <span className="font-label text-secondary text-xs font-bold tracking-widest uppercase mb-4 block">GOVERNANCE</span>
                            <h2 className="font-headline text-4xl font-extrabold text-primary">Board of Trustees</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Member 1 */}
                            <div className="bg-surface-container-lowest editorial-shadow group overflow-hidden">
                                <div className="aspect-square overflow-hidden">
                                    <img alt="Board Member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Professional portrait of a male executive in a navy suit, smiling confidently in a modern glass-walled office background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ12d6OyfOj2mVvDFAN9ioDz6oR3EfxJ8sqGmMhgl5FDMlGR_4zbVGTpnocyLwb-n2xM3RvvNmJ8gE1HY1m0XdWYf2ycTT_EhE9qokKgbxnzf_X-1lGw_gOI_u8eQggQaq0gJef4F8R6JDuL9lZiww-05xS9AGfqtFxJLJW6bqv6fmJIJef9Dz-LAiJlaSggxo1EgsMGHjIxdRoLX-qz8kcq8XjImHRYOjzUK99UiVPL5cwpO1HiYzSJtkCVgdm7SzGGS9rUEB2-d7" />
                                </div>
                                <div className="p-8">
                                    <h4 className="font-headline text-xl font-bold text-primary mb-1">Rohan Deshmukh</h4>
                                    <p className="text-secondary font-medium text-sm uppercase tracking-wide mb-4">Strategic Advisor</p>
                                    <p className="text-on-surface-variant text-sm leading-relaxed">Expert in international relations with two decades of experience in public policy and advocacy.</p>
                                </div>
                            </div>
                            {/* Member 2 */}
                            <div className="bg-surface-container-lowest editorial-shadow group overflow-hidden">
                                <div className="aspect-square overflow-hidden">
                                    <img alt="Board Member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Professional portrait of a female academic leader with a welcoming expression, wearing a smart charcoal blazer." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSxvdSLichVO-C94q3IQq_402BkOn6SIJH_xpZtY8RW_w1pjjUM4Kkxx7sJYyQVJZxZIuJG0XBSQGWXFpck1tEwAv6MGVB1AWH3s22xueib9QAqwrL_kWCSjZseburraX2htubqJ4OUsSK6BHNDTh0zl0o4Yi6M2ucNqobP7JE1b6yrN9iUlnFKOUYSF_73cVNh_kZQ7hmrVgiXw0hVb7aHJzD7mNFDfX0fB1W4Fx2JWeROwl0RdpxzUc4EL2TEIoCyhd7crwK8YYt" />
                                </div>
                                <div className="p-8">
                                    <h4 className="font-headline text-xl font-bold text-primary mb-1">Dr. Ananya Sharma</h4>
                                    <p className="text-secondary font-medium text-sm uppercase tracking-wide mb-4">Director of Education</p>
                                    <p className="text-on-surface-variant text-sm leading-relaxed">Leading educationalist focused on primary school restructuring in rural Maharashtra.</p>
                                </div>
                            </div>
                            {/* Member 3 */}
                            <div className="bg-surface-container-lowest editorial-shadow group overflow-hidden">
                                <div className="aspect-square overflow-hidden">
                                    <img alt="Board Member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Portrait of an experienced male leader in business casual attire, with a warm and approachable demeanor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAF__jgXXdQyH2bGDyLoaWX8IOQvt-rQUmRM883m61r0yM-82ZYZ1WXKGZ3_GU_UhVG1j1I3xtrLqTs1tVm4vII9WHUpetLrNZ4Y2GIXP8tdQR8HnYeldWucP8tt4ZpVQKa-2HBvkp4yGvn1NGEccNrj25DZeQ4vJkTvEHSgLhIOe7hGGXNyC6mNxO7kMKThkzYte_1S4NVON6D65rXwAt5EguMQFtQuBiWYMp3DNMFdGqgmfE_7jfIUtNZwss-05pnLHNWP4qdsp5" />
                                </div>
                                <div className="p-8">
                                    <h4 className="font-headline text-xl font-bold text-primary mb-1">Vikram Patil</h4>
                                    <p className="text-secondary font-medium text-sm uppercase tracking-wide mb-4">Head of Sustainable Growth</p>
                                    <p className="text-on-surface-variant text-sm leading-relaxed">Social entrepreneur dedicated to integrating technology with sustainable farming practices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Call to Action */}
                <section className="relative py-24 overflow-hidden bg-primary">
                    <div className="absolute inset-0 bg-primary-container opacity-20"></div>
                    {/* Texture Pattern Overlay */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
                    <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
                        <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-8">Join the Sovereign Movement</h2>
                        <p className="font-body text-xl text-white/70 mb-12 leading-relaxed">
                            Be part of a legacy that prioritizes human dignity over bureaucratic process. Whether through contribution or volunteering, your involvement matters.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="w-full sm:w-auto px-10 py-4 bg-secondary-container text-on-secondary-container font-headline font-bold rounded-md hover:bg-secondary-fixed-dim transition-all shadow-xl Active:scale-95 uppercase tracking-widest text-sm">
                                BECOME A VOLUNTEER
                            </button>
                            <button className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-headline font-bold rounded-md hover:bg-white/10 transition-all Active:scale-95 uppercase tracking-widest text-sm">
                                CONTACT US
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer className="bg-[#00003c] dark:bg-black w-full px-12 py-16 flex flex-col md:flex-row justify-between items-start gap-8 border-t-4 border-t-[#fe9832] border-b-4 border-b-[#2e7d32]">
                <div className="space-y-6 max-w-sm">
                    <div className="text-2xl font-bold text-white font-headline">Dr. Dyaneshawar Mulay Foundation</div>
                    <p className="text-gray-300 font-manrope text-sm leading-relaxed">
                        Empowering communities through diplomatic vision and grassroots action. A legacy of service for a stronger nation.
                    </p>
                </div>
                <div className="flex flex-wrap gap-16">
                    <div className="space-y-4">
                        <h5 className="text-[#fe9832] font-bold text-sm tracking-widest uppercase">Quick Links</h5>
                        <ul className="space-y-2">
                            <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832] font-manrope" href="#">Home</a></li>
                            <li><a className="text-[#fe9832] font-bold font-manrope" href="#">About Us</a></li>
                            <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832] font-manrope" href="#">Our Projects</a></li>
                            <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832] font-manrope" href="#">Impact Report</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h5 className="text-[#fe9832] font-bold text-sm tracking-widest uppercase">Support</h5>
                        <ul className="space-y-2">
                            <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832] font-manrope" href="#">Contact Us</a></li>
                            <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832] font-manrope" href="#">Privacy Policy</a></li>
                            <li><a className="text-gray-300 hover:text-white transition-all hover:underline decoration-[#fe9832] font-manrope" href="#">Donate Now</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-auto mt-12 md:mt-0 pt-8 md:pt-0 border-t border-white/10 md:border-t-0 flex flex-col items-start md:items-end gap-4">
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-white p-2 bg-white/5 rounded-full hover:bg-secondary-container transition-colors cursor-pointer" data-icon="public">public</span>
                        <span className="material-symbols-outlined text-white p-2 bg-white/5 rounded-full hover:bg-secondary-container transition-colors cursor-pointer" data-icon="mail">mail</span>
                        <span className="material-symbols-outlined text-white p-2 bg-white/5 rounded-full hover:bg-secondary-container transition-colors cursor-pointer" data-icon="share">share</span>
                    </div>
                    <p className="text-white font-manrope text-xs opacity-60">
                        © 2024 Dr. Dyaneshawar Mulay Foundation. All Rights Reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
}
