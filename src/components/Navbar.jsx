import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Desktop horizontal nav items: exactly in the requested order (no HOME in the desktop bar)
  const navItems = [
    { id: 'problem', label: 'PROBLEM' },
    { id: 'solution', label: 'SOLUTION' },
    { id: 'how-it-works', label: 'HOW IT WORKS' },
    { id: 'hardware', label: 'HARDWARE' },
    { id: 'ai', label: 'AI' },
    { id: 'case-study', label: 'CASE STUDY' },
    { id: 'technology', label: 'TECHNOLOGY' },
    { id: 'impact', label: 'IMPACT' },
    { id: 'team', label: 'TEAM' },
    { id: 'mentors', label: 'MENTORS' },
  ];

  // Mobile drawer items: includes HOME + the 10 sections
  const mobileNavItems = [
    { id: 'home', label: 'HOME' },
    ...navItems
  ];

  // Scroll listener for sticky navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to accurately track the active section
  useEffect(() => {
    const sectionIds = ['home', 'problem', 'solution', 'how-it-works', 'hardware', 'ai', 'case-study', 'technology', 'impact', 'team', 'mentors', 'live-dashboard'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-20% 0px -55% 0px'
    });

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Robust, reliable nav click handler per exact user instructions
  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        isScrolled ? 'bg-[#061812]/95 backdrop-blur-md shadow-lg h-[72px] sm:h-20' : 'bg-[#0B1E19] h-[72px] sm:h-20'
      } flex items-center`}
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* ======================================================== */}
        {/* [ BRAND CONTAINER ] — Circular Cow Logo (56–64px) & Brand */}
        {/* ======================================================== */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
          className="flex items-center gap-3 sm:gap-3.5 shrink-0 group cursor-pointer select-none outline-none focus:outline-none"
          title="DairyRakshak Home"
        >
          {/* Circular cow logo: 56–64px diameter */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-black border border-white/20 shadow-md shrink-0 transition-transform duration-200 group-hover:scale-105">
            <img 
              src="/images/dairyrakshak-logo.png" 
              alt="DairyRakshak Logo" 
              className="w-full h-full object-contain object-center" 
            />
          </div>
          
          {/* Visual Brand Text: DAIRY in Red, RAKSHAK in Green */}
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight leading-none">
              <span className="text-[#EF4444]">DAIRY</span><span className="text-[#10B981]">RAKSHAK</span>
            </span>
            <span className="text-[9.5px] sm:text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">
              BOVINE MASTITIS AI
            </span>
          </div>
        </a>
        
        {/* ======================================================== */}
        {/* [ DESKTOP NAVIGATION ITEMS ] — 48px gap, gap-7 (28px)     */}
        {/* ======================================================== */}
        <div className="hidden xl:flex items-center ml-12">
          <div className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`text-[12px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-150 rounded-md outline-none focus:outline-none ${
                    isActive 
                      ? 'text-[#10B981] font-extrabold' 
                      : 'text-gray-300 hover:text-white font-semibold'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* [ LIVE DASHBOARD & MOBILE HAMBURGER ] — Far Right        */}
        {/* No stray vertical divider, min 24px left margin          */}
        {/* ======================================================== */}
        <div className="flex items-center shrink-0 ml-6">
          {/* Live Dashboard Button */}
          <a 
            href="#live-dashboard" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('live-dashboard');
            }}
            className={`hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-white rounded-lg transition-all duration-200 shadow-sm shrink-0 whitespace-nowrap outline-none focus:outline-none border-0 ${
              activeSection === 'live-dashboard'
                ? 'bg-[#059669] shadow-[0_0_20px_rgba(16,185,129,0.4)] ring-2 ring-[#10B981]'
                : 'bg-[#10B981] hover:bg-[#059669] shadow-[0_0_12px_rgba(16,185,129,0.25)]'
            }`}
          >
            <Activity className="w-3.5 h-3.5 mr-1.5" />
            <span>Live Dashboard</span>
          </a>

          {/* Mobile Menu Toggle Button (Visible below xl screens) */}
          <button 
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="xl:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 outline-none focus:outline-none ml-3" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5 text-[#10B981]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>
      
      {/* ======================================================== */}
      {/* MOBILE DRAWER & SCRIM (Unmounted completely when closed) */}
      {/* ======================================================== */}
      {menuOpen && (
        <>
          {/* Dark Scrim Backdrop dimming page behind drawer */}
          <div 
            className="xl:hidden fixed inset-0 top-[72px] sm:top-20 bg-black/60 z-40 transition-opacity"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel: Solid #0B1E19 matching navbar */}
          <div 
            id="mobile-drawer"
            className="xl:hidden fixed top-[72px] sm:top-20 left-0 w-full border-t border-white/10 bg-[#0B1E19] shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)] z-50"
            style={{ backgroundColor: '#0B1E19' }}
          >
            <div className="px-4 py-4 flex flex-col space-y-1">
              {mobileNavItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }} 
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors outline-none focus:outline-none border-0 ${
                      isActive 
                        ? 'bg-[#10B981]/25 text-[#10B981]' 
                        : 'text-white hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>}
                  </a>
                );
              })}
              
              <div className="pt-3 pb-1 mt-2 border-t border-white/10">
                <a 
                  href="#live-dashboard" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('live-dashboard');
                  }} 
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-[#10B981] hover:bg-[#059669] rounded-lg shadow-md transition-colors outline-none focus:outline-none"
                >
                  <Activity className="w-4 h-4" />
                  Live Dashboard
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
