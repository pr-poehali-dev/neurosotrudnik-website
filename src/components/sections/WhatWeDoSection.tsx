import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'TrendingUp',
    title: 'Рост продаж',
    description: 'Увеличение конверсии до 40% благодаря мгновенной обработке заявок и персонализированному подходу к каждому клиенту',
  },
  {
    icon: 'Ruble',
    title: 'Снижение расходов',
    description: 'Экономия до 80% на затратах персонала. Никаких зарплат, отпусков, больничных и налогов',
  },
  {
    icon: 'Clock',
    title: 'Работа 24/7',
    description: 'Нейросотрудник никогда не спит, не устает и не берет выходные. Ваш бизнес работает круглосуточно',
  },
  {
    icon: 'Target',
    title: 'Нет ошибок',
    description: 'Полное отсутствие человеческого фактора. Всегда точные ответы и корректная работа с данными',
  },
  {
    icon: 'Database',
    title: 'Знание номенклатуры',
    description: 'Мгновенный доступ ко всей базе знаний компании. Нейросотрудник знает каждый товар и услугу',
  },
  {
    icon: 'Zap',
    title: 'Моментальная скорость',
    description: 'Ответы за секунды вместо минут. Обработка сотен запросов одновременно без потери качества',
  },
];

const services = [
  {
    icon: 'GitBranch',
    title: 'Анализ бизнеса',
    description: 'Глубокое изучение вашей ниши, целевой аудитории и бизнес-процессов для создания оптимального решения',
  },
  {
    icon: 'Settings',
    title: 'Проектирование логики',
    description: 'Разработка сценариев работы нейросотрудника с учетом всех особенностей вашего бизнеса',
  },
  {
    icon: 'Database',
    title: 'Сбор данных',
    description: 'Формирование базы знаний: номенклатура, прайсы, FAQ, скрипты продаж и внутренние регламенты',
  },
  {
    icon: 'Code',
    title: 'Разработка',
    description: 'Создание нейросотрудника на основе передовых AI-технологий с учетом специфики вашего бизнеса',
  },
  {
    icon: 'BookOpen',
    title: 'Обучение',
    description: 'Создание обучающих полотен и тонкая настройка для получения максимальной эффективности',
  },
  {
    icon: 'Link',
    title: 'Интеграции',
    description: 'Подключение к CRM, мессенджерам, сайту, соцсетям и другим системам вашего бизнеса',
  },
  {
    icon: 'Rocket',
    title: 'Внедрение',
    description: 'Запуск нейросотрудника в работу с полным контролем и тестированием всех процессов',
  },
  {
    icon: 'HeadphonesIcon',
    title: 'Сопровождение',
    description: 'Постоянная техническая поддержка, обновления и оптимизация работы системы',
  },
];

const WhatWeDoSection = () => {
  return (
    <>
      <section id="what-we-do" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Что мы делаем
            </h2>
            <p className="text-xl text-muted-foreground">
              Создаём умных нейро-агентов на базе искусственного интеллекта для автоматизации любых бизнес-процессов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ShoppingCart', title: 'Продажи', desc: 'AI-ассистент для консультаций и закрытия сделок' },
              { icon: 'HeadphonesIcon', title: 'Поддержка', desc: 'Автоматизация клиентского сервиса 24/7' },
              { icon: 'Users', title: 'HR', desc: 'Подбор персонала и онбординг сотрудников' },
              { icon: 'Megaphone', title: 'Маркетинг', desc: 'Персонализированные рассылки и таргетинг' },
              { icon: 'Truck', title: 'Логистика', desc: 'Отслеживание заказов и управление поставками' },
              { icon: 'GraduationCap', title: 'Обучение', desc: 'Корпоративные тренинги и адаптация' },
              { icon: 'Workflow', title: 'Процессы', desc: 'Автоматизация внутренних операций' },
              { icon: 'BarChart', title: 'Аналитика', desc: 'Обработка данных и прогнозирование' },
            ].map((item, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Преимущества нейросотрудника
            </h2>
            <p className="text-xl text-muted-foreground">
              Почему нейроагент эффективнее обычного сотрудника
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={advantage.icon} size={24} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Как мы работаем
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный цикл разработки и внедрения нейросотрудника в ваш бизнес
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 group relative">
                <CardContent className="p-4">
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div>
                  <div className="flex items-start space-x-3 pr-8">
                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={service.icon} size={22} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-foreground mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'Zap', title: 'Скорость', desc: 'Быстрое внедрение за 2-4 недели' },
                { icon: 'DollarSign', title: 'Доступность', desc: 'Оптимальное соотношение цена/качество' },
                { icon: 'Award', title: 'Гарантия', desc: 'Гарантированный результат или возврат' },
                { icon: 'Wrench', title: 'Кастомизация', desc: 'Индивидуальное решение под бизнес' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDoSection;
