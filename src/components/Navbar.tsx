import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

export interface NavItem {
  name: string;
  type: 'section' | 'route';
  target: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'HOME', type: 'section', target: 'home' },
  { name: 'ABOUT', type: 'section', target: 'about' },
  { name: 'SKILLS', type: 'section', target: 'skills' },
  { name: 'CERTIFICATES', type: 'section', target: 'certificates-section' },
  { name: 'EXPERIENCE', type: 'section', target: 'experience' },
  { name: 'PROJECTS', type: 'section', target: 'featured-projects' },
  { name: 'CONTACT', type: 'section', target: 'contact-section' },
];

const Navbar: React.FC = () => {
  const { personalInfo } = portfolioData;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/' || location.pathname === '';

  // Track scroll depth to add backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer to track active section when on the homepage
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = ['home', 'about', 'skills', 'certificates-section', 'experience', 'featured-projects', 'contact-section'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isHomePage]);

  // Smart Nav Click handler
  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    setIsOpen(false);

    if (item.type === 'route') {
      navigate(item.target);
      return;
    }

    // Section anchor navigation
    e.preventDefault();
    if (isHomePage) {
      const targetElement = document.getElementById(item.target);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${item.target}`);
        setActiveSection(item.target);
      }
    } else {
      // Redirect to homepage with section state
      navigate('/', { state: { scrollTo: item.target } });
    }
  };

  // Determine whether this item is currently active
  const isItemActive = (item: NavItem) => {
    if (item.type === 'route') {
      return location.pathname === item.target;
    }
    return isHomePage && activeSection === item.target;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 pt-3 pb-2">
        <div className={`rounded-full backdrop-blur-2xl px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#101216]/95 border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.85)]' 
            : 'bg-[#14161a]/85 border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
        }`}>
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection('home');
              }
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-bold text-xs sm:text-sm uppercase tracking-[0.25em] text-white group-hover:text-white/80 transition-colors">
              AFIFUDIN
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-5 lg:gap-7">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item);
                return (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`relative py-1 text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer ${
                      active
                        ? 'text-white font-medium'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-white rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="h-4 w-[1px] bg-white/15" />

            {/* Quick Resume White Pill CTA */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white text-zinc-950 font-semibold px-4 py-1.5 text-xs tracking-wider uppercase shadow-md hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-950" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full border border-white/15 text-white/80 hover:text-white cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-[#14161a]/95 backdrop-blur-2xl border border-white/10 p-4 flex flex-col gap-2 shadow-2xl">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item);
              return (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`text-left px-3 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    active
                      ? 'bg-white/10 text-white font-medium'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}

            <div className="pt-2 border-t border-white/10 mt-1">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-white text-zinc-950 font-semibold py-2 px-4 text-xs tracking-wider uppercase text-center block"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
