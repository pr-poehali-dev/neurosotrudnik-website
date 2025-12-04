import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutAndBenefitsSection = () => {
  return (
    <>
      <section id="about" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Что мы делаем
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Создаём умных нейро-сотрудников на искусственном интеллекте для автоматизации ключевых процессов вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ShoppingCart', title: 'Продажи', desc: 'Обработка заявок, консультации, закрытие сделок 24/7' },
              { icon: 'Headphones', title: 'Поддержка', desc: 'Мгновенные ответы на вопросы клиентов без очередей' },
              { icon: 'Users', title: 'HR', desc: 'Подбор кандидатов, онбординг, обучение персонала' },
              { icon: 'TrendingUp', title: 'Маркетинг', desc: 'Аналитика, таргетинг, персонализация коммуникаций' },
              { icon: 'Package', title: 'Логистика', desc: 'Отслеживание, оптимизация маршрутов, учёт' },
              { icon: 'BookOpen', title: 'Обучение', desc: 'Корпоративные тренинги, адаптация материалов' },
              { icon: 'Settings', title: 'Процессы', desc: 'Автоматизация внутренних рутинных операций' },
              { icon: 'Database', title: 'CRM', desc: 'Обработка больших массивов данных и аналитика' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={24} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Преимущества нейро-агентов
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Автоматизация бизнеса с помощью ИИ — это не будущее, это настоящее
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: 'TrendingDown', title: 'Снижение расходов на 70%', desc: 'Нет затрат на зарплаты, отпуска, больничные и офисное пространство' },
              { icon: 'Zap', title: 'Скорость обработки x10', desc: 'Моментальные ответы и обработка тысяч запросов одновременно' },
              { icon: 'Clock', title: 'Работа 24/7/365', desc: 'Нейросотрудник никогда не спит, не устаёт и всегда на связи' },
              { icon: 'Target', title: 'Ноль ошибок', desc: 'Отсутствие человеческого фактора, стабильное качество работы' },
              { icon: 'Book', title: 'Знание 100% номенклатуры', desc: 'Мгновенный доступ к полной базе знаний о продуктах и услугах' },
              { icon: 'BarChart', title: 'Рост продаж до 300%', desc: 'Увеличение конверсии за счёт быстрой и персонализированной работы' }
            ].map((item, idx) => (
              <div key={idx} className="relative group animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAndBenefitsSection;
