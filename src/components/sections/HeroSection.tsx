import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Icon name="Sparkles" size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">
              Технологии будущего уже сегодня
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight">
            Нейросотрудник
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              для вашего бизнеса
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Создаём умных AI-агентов, которые работают 24/7, не болеют, не устают 
            и увеличивают продажи вашего бизнеса
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6"
            >
              Получить консультацию
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('what-we-do');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-lg px-8 py-6"
            >
              Узнать подробнее
              <Icon name="ChevronDown" size={20} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              { icon: 'Users', value: '200+', label: 'Довольных клиентов' },
              { icon: 'TrendingUp', value: '45%', label: 'Средний рост продаж' },
              { icon: 'Clock', value: '24/7', label: 'Работа без выходных' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name={stat.icon} size={28} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
