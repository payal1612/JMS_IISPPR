import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown, BookOpen } from 'lucide-react';

const navLinks = [
  { to: '/publisher', label: 'Publisher Details' },
  { to: '/issn', label: 'ISSN Details' },
  // { to: '/research', label: 'Research Articles' },
  { to: '/editions', label: 'Journal Editions' },
  { to: '/ethics', label: 'Ethics' },
  { to: '/plagiarism', label: 'Plagiarism Policy' },
  { to: '/contact-us', label: 'Contact Info' },
];

const accountLinks = [
  { to: '/login', label: 'Login' },
  { to: '/signup', label: 'Sign Up' },
];

const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide current page's nav link
  const currentNavLinks = navLinks.filter(link => link.to !== location.pathname);
  const shouldShowEditorialBoard = location.pathname !== '/editorial-board';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="bg-primary from-rose-600 to-amber-500 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl bg-primary from-rose-600 to-amber-500 bg-clip-text text-transparent">
              STUDENTS' JOURNAL
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {currentNavLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 font-medium text-sm transition-all duration-300 group ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`
                }
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </NavLink>
            ))}

            {shouldShowEditorialBoard && (
              <NavLink
                to="/editorial-board"
                className={({ isActive }) =>
                  `relative px-4 py-2 font-medium text-sm transition-all duration-300 group ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`
                }
              >
                Editorial Board
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/editorial-board' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </NavLink>
            )}

            <div className="relative group ml-2">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                <User className="w-4 h-4" />
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 mt-2 w-48 origin-top-right scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 z-10">
                {accountLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fadeIn">
            {currentNavLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium text-sm transition-all ${isActive ? 'bg-purple-100 text-shadow-purple-800' : 'text-gray-700 hover:bg-gray-100'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            {shouldShowEditorialBoard && (
              <NavLink
                to="/editorial-board"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium text-sm transition-all ${isActive ? 'bg-purple-100 text-primary' : 'text-gray-700 hover:bg-gray-100'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Editorial Board
              </NavLink>
            )}

            <div className="pt-2 mt-2 border-t border-gray-200">
              <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Account
              </h3>
              {accountLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopNavbar;
