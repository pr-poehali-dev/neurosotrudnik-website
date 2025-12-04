import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Icon name="Brain" size={24} className="text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            neurosotrudnik.pro
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#main" className="text-sm hover:text-primary transition-colors">Главная</a>
          <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
          <a href="#cases" className="text-sm hover:text-primary transition-colors">Кейсы</a>
          <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
          <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
        </nav>

        <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
          Оставить заявку
        </Button>
      </div>
    </header>
  );
};

export default Header;
