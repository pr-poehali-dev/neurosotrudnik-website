import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/f2599053-9d89-4c7a-b36e-535536298e3a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Мы свяжемся с вами в течение 10 минут',
        });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Попробуйте позже.',
        variant: 'destructive',
      });
      console.error('Form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const faqItems = [
    {
      question: 'Как создаётся нейросотрудник для моего бизнеса?',
      answer: 'Процесс состоит из 8 этапов: анализ бизнеса, проектирование логики, сбор данных, разработка, создание обучающих полотен, интеграции с вашими системами, внедрение и сопровождение. В среднем полный цикл занимает от 2 до 4 недель в зависимости от сложности проекта.',
    },
    {
      question: 'Что требуется от клиента для внедрения?',
      answer: 'От вас потребуется: описание бизнес-процессов, доступ к необходимым данным (прайсы, номенклатура, FAQ), определение целей автоматизации и доступы для интеграции с вашими системами (CRM, сайт, мессенджеры). Наша команда возьмет на себя всю техническую работу.',
    },
    {
      question: 'Сколько времени занимает внедрение нейросотрудника?',
      answer: 'Стандартное внедрение занимает 2-4 недели. Простые решения (например, чат-бот для FAQ) могут быть готовы за 7-10 дней. Сложные системы с множественными интеграциями и глубокой кастомизацией требуют 4-6 недель.',
    },
    {
      question: 'Какие интеграции возможны с нейросотрудником?',
      answer: 'Мы интегрируем нейросотрудников с CRM-системами (Битрикс24, amoCRM, Salesforce), мессенджерами (WhatsApp, Telegram, VK), сайтами, соцсетями, IP-телефонией, email-рассылками и другими инструментами вашего бизнеса. Также возможны кастомные интеграции через API.',
    },
    {
      question: 'Чем нейроагент лучше обычного сотрудника?',
      answer: 'Нейросотрудник работает 24/7 без перерывов, не болеет и не уходит в отпуск. Он обрабатывает сотни запросов одновременно, не допускает ошибок, всегда знает актуальную информацию о всех товарах и услугах. При этом стоимость в 5-10 раз ниже, чем содержание штатного сотрудника.',
    },
    {
      question: 'Какие задачи можно автоматизировать с помощью ИИ?',
      answer: 'Продажи и консультации клиентов, обработка заявок, квалификация лидов, поддержка клиентов 24/7, запись на услуги, выставление счетов, сбор обратной связи, обучение персонала, HR-процессы, логистика и отслеживание заказов, маркетинговые рассылки и многое другое.',
    },
    {
      question: 'Какие гарантии результата вы предоставляете?',
      answer: 'Мы гарантируем работоспособность нейросотрудника согласно техническому заданию. Предоставляем тестовый период для проверки всех функций, техподдержку 24/7 в течение первого месяца и бесплатные корректировки в рамках SLA. Если решение не соответствует ТЗ — дорабатываем бесплатно.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          <img
            src="https://cdn.poehali.dev/projects/3deda4aa-697b-42ec-b87e-8a41abcefeaa/files/ed08010f-a6fd-42a6-8f65-e25069167087.jpg"
            alt="Neural Network Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Искусственный интеллект в бизнесе
              </span>
            </div>

            <h1 className="md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight break-words hyphens-auto text-2xl">
              Нейросотрудники для бизнеса
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Автоматизация бизнеса с помощью ИИ. Рост продаж, снижение расходов на 80% и работа 24/7 без перерывов. Никаких ошибок, полное знание номенклатуры и мгновенные ответы.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6"
                onClick={() => {
                  const element = document.getElementById('contact-form');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Получить консультацию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2"
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Узнать больше
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {[
                { value: '90+', label: 'Кейсов' },
                { value: '24/7', label: 'Работа' },
                { value: '-80%', label: 'Расходов' },
                { value: '+40%', label: 'Продаж' },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      <section id="contact-form" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    Оставьте заявку
                  </h2>
                  <p className="text-muted-foreground">
                    Мы свяжемся с вами в течение 10 минут
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашей задаче..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                Частые вопросы
              </h2>
              <p className="text-xl text-muted-foreground">
                Ответы на популярные вопросы о нейросотрудниках
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-background"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;