import os

components = [
    "Navbar.jsx",
    "Hero.jsx",
    "Problem.jsx",
    "Solution.jsx",
    "HowItWorks.jsx",
    "Hardware.jsx",
    "AiIntelligence.jsx",
    "CaseStudy.jsx",
    "RiskDemo.jsx",
    "Technology.jsx",
    "TargetUsers.jsx",
    "Impact.jsx",
    "FutureExpansion.jsx",
    "Team.jsx",
    "Mentors.jsx",
    "Footer.jsx"
]

os.makedirs("d:/GauRakshak/src/components", exist_ok=True)

for comp in components:
    name = comp.split(".")[0]
    content = f"""import React from 'react';

const {name} = () => {{
  return (
    <section id="{name.lower()}" className="section-container">
      <h2 className="section-heading">{name}</h2>
    </section>
  );
}};

export default {name};
"""
    if comp == "Navbar.jsx":
        content = """import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'How It Works', href: '#howitworks' },
    { name: 'Hardware', href: '#hardware' },
    { name: 'AI', href: '#aiintelligence' },
    { name: 'Case Study', href: '#casestudy' },
    { name: 'Technology', href: '#technology' },
    { name: 'Impact', href: '#impact' },
    { name: 'Team', href: '#team' },
    { name: 'Mentors', href: '#mentors' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-primary tracking-tight">GAURAKSHAK</span>
          </div>
          
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-text-muted hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-text" /> : <Menu className="w-6 h-6 text-text" />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface shadow-md py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-text hover:text-primary">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
"""
    if comp == "Footer.jsx":
        content = """import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-8 h-8 text-accent" />
          <div>
            <div className="text-xl font-bold tracking-tight">GAURAKSHAK</div>
            <div className="text-primary-light text-sm mt-1 text-gray-300">Predict the Risk. Prevent the Disease.</div>
          </div>
        </div>
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>SIH26109 • Ministry of Fisheries, Animal Husbandry & Dairying</p>
          <p className="mt-1">© {new Date().getFullYear()} GAURAKSHAK Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"""
    with open(f"d:/GauRakshak/src/components/{comp}", "w") as f:
        f.write(content)

print("Scaffolded components")
