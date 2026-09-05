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
  { name: 'EXPERIENCE', type: 'section', target: 'experience' },
  { name: 'PROJECTS', type: 'route', target: '/projects' },
  { name: 'CERTIFICATES', type: 'route', target: '/certificates' },
  { name: 'CONTACT', type: 'route', target: '/contact' },
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer to track active section when on the homepage
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = ['home', 'about', 'skills', 'experience'];
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
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#000000]/85 backdrop-blur-md border-[#292d30] py-3.5'
          : 'bg-[#000000] border-[#292d30]/60 py-4'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 flex items-center justify-between">
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
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-[6px] border border-[#292d30] bg-[#000000] flex items-center justify-center font-mono text-xs font-semibold text-white group-hover:border-white/40 transition-colors">
            MA
          </div>
          <span className="font-mono text-sm font-medium tracking-tight text-white group-hover:text-white transition-colors">
            afifudin<span className="text-[#0A84FF]">.io</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-5">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item);
              return (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`relative py-1 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    active
                      ? 'text-[#ffffff] font-medium'
                      : 'text-[#a1a4a5] hover:text-[#ffffff]'
                  }`}
                >
                  <span>{item.name}</span>
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#0A84FF]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="h-4 w-[1px] bg-[#292d30]" />

          {/* Quick Resume Ghost CTA */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resend-btn-ghost !text-xs !py-1.5 !px-3 font-mono group !border-white/15 hover:!border-white/40"
          >
            <span>RESUME.PDF</span>
            <ArrowUpRight className="w-3 h-3 text-[#6e727a] group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-[6px] border border-[#292d30] text-[#f0f0f0] cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#000000] border-b border-[#292d30] px-4 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);
            return (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(item, e)}
                className={`text-left px-3 py-2.5 rounded-[6px] text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  active
                    ? 'bg-[#292d30]/60 text-white font-medium border-l-2 border-[#0A84FF]'
                    : 'text-[#a1a4a5] hover:text-white hover:bg-[#0c0e12]'
                }`}
              >
                {item.name}
              </button>
            );
          })}

          <div className="pt-2 border-t border-[#292d30] mt-1">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resend-btn-ghost w-full justify-between !text-xs font-mono"
            >
              <span>DOWNLOAD RESUME.PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#6e727a]" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
