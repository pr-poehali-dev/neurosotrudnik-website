import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const cases = [
  {
    title: 'E-commerce',
    description: 'Автоматизация продаж интернет-магазина с базой в 5000+ товаров',
    result: '+45% к конверсии',
    metric: '24/7 обработка заявок',
  },
  {
    title: 'Онлайн-школа',
    description: 'Нейроассистент для поддержки студентов и продажи курсов',
    result: '-70% нагрузки на HR',
    metric: '500+ запросов/день',
  },
  {
    title: 'B2B-сервис',
    description: 'Автоматизация отдела продаж с интеграцией в CRM',
    result: '+60% скорости',
    metric: 'ROI за 2 месяца',
  },
];

const testimonials = [
  {
    name: 'Александр Петров',
    company: 'CEO, TechStore.ru',
    text: 'Внедрили нейросотрудника в интернет-магазин электроники. Конверсия выросла на 42%, а нагрузка на менеджеров снизилась вдвое. Окупилось за полтора месяца.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander',
  },
  {
    name: 'Мария Соколова',
    company: 'Основатель, Школа английского "Fluent"',
    text: 'Нейроассистент обрабатывает заявки студентов, отвечает на вопросы по программам и помогает с записью. Освободил 15 часов в неделю для команды.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
  },
  {
    name: 'Дмитрий Волков',
    company: 'Директор по продажам, CloudSolutions',
    text: 'Автоматизировали первичную квалификацию лидов. Нейросотрудник обрабатывает 200+ обращений в день и передает готовых клиентов менеджерам. Качество лидов выросло на 35%.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry',
  },
];

const CasesAndTestimonialsSection = () => {
  return (
    <>
      <section id="cases" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Кейсы и результаты
            </h2>
            <p className="text-xl text-muted-foreground">
              У нас более 90 шаблонов кейсов. Отправляем по запросу после консультации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {caseItem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {caseItem.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                      <span className="text-sm text-muted-foreground">Результат</span>
                      <span className="text-lg font-bold text-primary">{caseItem.result}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/10">
                      <span className="text-sm text-muted-foreground">Метрика</span>
                      <span className="text-sm font-semibold text-foreground">{caseItem.metric}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Получить полную базу кейсов
              <Icon name="Download" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-muted-foreground">
              Реальный опыт компаний, внедривших нейросотрудников
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-muted"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CasesAndTestimonialsSection;
