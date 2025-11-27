import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: 'MessageCircle', label: 'Telegram', href: '#' },
    { icon: 'Phone', label: 'WhatsApp', href: '#' },
    { icon: 'Mail', label: 'Email', href: 'mailto:info@neurosotrudnik.pro' },
  ];

  const quickLinks = [
    { label: 'Главная', id: 'hero' },
    { label: 'Услуги', id: 'services' },
    { label: 'Кейсы', id: 'cases' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="https://cdn.poehali.dev/files/60d46518-6f62-4fb0-a1a0-d55ede05c2a7.png"
                alt="neurosotrudnik.pro"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-foreground">
                  neurosotrudnik
                </span>
                <span className="text-xs text-muted-foreground">.pro</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Нейросотрудники для автоматизации бизнеса. Работаем 24/7 без перерывов.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Навигация</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/contacts"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href="mailto:info@neurosotrudnik.pro" className="hover:text-primary transition-colors">
                  info@neurosotrudnik.pro
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Москва, Россия
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Мы в соцсетях</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} neurosotrudnik.pro. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;