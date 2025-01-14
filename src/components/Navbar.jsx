import React, { useState, useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { Menu, X, Code2 } from 'lucide-react';

    function Navbar() {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
      const [lastScrollY, setLastScrollY] = useState(0);
      const location = useLocation();

      useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsScrolled(true); // Scrolling down, hide navbar
          } else {
            setIsScrolled(false); // Scrolling up, show navbar
          }

          setLastScrollY(currentScrollY); // Update last scroll position
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
      }, [lastScrollY]);

      useEffect(() => {
        setIsOpen(false); // Close the mobile menu on route change
      }, [location]);

      return (
        <nav className={`bg-black/50 backdrop-blur-md border-b border-blue-500/20 fixed top-0 left-0 w-full z-50 ${isScrolled ? 'transform -translate-y-full' : ''} transition-all duration-300`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2">
                <Code2 className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold">CodeX Network</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6 relative">
                <NavLink to="/" active={location.pathname === '/'} >Home</NavLink>
                <NavLink to="/projects" active={location.pathname === '/projects'}>Projects</NavLink>
                <NavLink to="/events" active={location.pathname === '/events'}>Events</NavLink>
                 <NavLink to="/team" active={location.pathname === '/team'}>Team</NavLink>
                 <NavLink to="/khazana" active={location.pathname === '/khazana'} className="text-gray-300 px-4 py-2 relative transition-all duration-300 hover:text-blue-400">Khazana</NavLink>
                 <NavLink to="/login" className="text-gray-300 px-4 py-2 relative transition-all duration-300 hover:text-blue-400">Login</NavLink>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden pb-4">
                <div className="flex flex-col space-y-4">
                  <MobileNavLink to="/" onClick={() => setIsOpen(false)} active={location.pathname === '/'}>Home</MobileNavLink>
                  <MobileNavLink to="/projects" onClick={() => setIsOpen(false)} active={location.pathname === '/projects'}>Projects</MobileNavLink>
                  <MobileNavLink to="/events" onClick={() => setIsOpen(false)} active={location.pathname === '/events'}>Events</MobileNavLink>
                   <MobileNavLink to="/team" onClick={() => setIsOpen(false)} active={location.pathname === '/team'}>Team</MobileNavLink>
                   <MobileNavLink to="/khazana" onClick={() => setIsOpen(false)} active={location.pathname === '/khazana'}>Khazana</MobileNavLink>
                   <MobileNavLink to="/login" onClick={() => setIsOpen(false)} active={location.pathname === '/login'}>Login</MobileNavLink>
                </div>
              </div>
            )}
          </div>
        </nav>
      );
    }

    function NavLink({ to, children, active }) {
      return (
        <Link
          to={to}
          className={`text-gray-300 px-4 py-2 relative transition-all duration-300  ${
            active
              ? 'text-blue-400'
              : 'hover:text-blue-400'
          }`}
        >
          {children}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${active ? 'bg-blue-500' : 'bg-transparent'}`}></span>
        </Link>
      );
    }

    function MobileNavLink({ to, children, onClick, active }) {
      return (
        <Link
          to={to}
          className={`text-gray-300 px-4 py-2 relative transition-all duration-300 ${
            active
              ? 'text-blue-400'
              : 'hover:text-blue-400'
          }`}
          onClick={onClick}
        >
          {children}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${active ? 'bg-blue-500' : 'bg-transparent'}`}></span>
        </Link>
      );
    }

    export default Navbar;
