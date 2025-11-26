import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Главная', id: 'hero' },
    { label: 'Услуги', id: 'services' },
    { label: 'Кейсы', id: 'cases' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name="Brain" className="text-white" size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-foreground">
                neurosotrudnik
              </span>
              <span className="text-xs text-muted-foreground">.pro</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <Link to="/contacts">
              <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200">
                Контакты
              </button>
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('contact-form')}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Оставить заявку
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <Link to="/contacts" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="text-base font-medium text-foreground/80 hover:text-primary transition-colors text-left w-full">
                Контакты
              </button>
            </Link>
            <Button
              onClick={() => scrollToSection('contact-form')}
              className="bg-gradient-to-r from-primary to-secondary w-full"
            >
              Оставить заявку
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
