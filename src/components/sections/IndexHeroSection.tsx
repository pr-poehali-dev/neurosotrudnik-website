import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const IndexHeroSection = () => {
  return (
    <section id="main" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Нейросотрудники для бизнеса:
            </span>
            <br />
            <span className="text-foreground">
              автоматизация, рост продаж и работа 24/7
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Снижайте расходы на 70%, увеличивайте скорость обработки заявок в 10 раз. 
            AI-ассистенты знают всю номенклатуру, работают без перерывов и не допускают ошибок.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexHeroSection;
