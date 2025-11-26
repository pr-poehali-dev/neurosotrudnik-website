import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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

      <main className="pt-20">
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
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Услуги и процесс внедрения
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Полный цикл разработки от анализа до сопровождения
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {[
                { 
                  icon: 'Search', 
                  title: 'Анализ бизнеса', 
                  desc: 'Изучаем ваши процессы, находим точки роста и определяем задачи для автоматизации. Проводим аудит текущих систем и интеграций.' 
                },
                { 
                  icon: 'Workflow', 
                  title: 'Проектирование логики', 
                  desc: 'Разрабатываем архитектуру нейро-агента, определяем сценарии диалогов, создаём логику принятия решений и обработки запросов.' 
                },
                { 
                  icon: 'Database', 
                  title: 'Сбор и подготовка данных', 
                  desc: 'Собираем вашу номенклатуру, базы знаний, FAQ. Структурируем и оптимизируем данные для обучения нейросети.' 
                },
                { 
                  icon: 'Code', 
                  title: 'Разработка', 
                  desc: 'Создаём AI-ассистента на современных нейросетевых технологиях с учётом специфики вашего бизнеса и индустрии.' 
                },
                { 
                  icon: 'Brain', 
                  title: 'Создание обучающих полотен', 
                  desc: 'Разрабатываем уникальные сценарии обучения, тестируем на реальных кейсах, дообучаем модель для максимальной точности.' 
                },
                { 
                  icon: 'Link', 
                  title: 'Интеграции', 
                  desc: 'Подключаем к вашим CRM, мессенджерам, сайту, телефонии. Обеспечиваем бесшовную работу со всеми системами.' 
                },
                { 
                  icon: 'Rocket', 
                  title: 'Внедрение', 
                  desc: 'Запускаем нейросотрудника в работу, обучаем вашу команду, проводим тестирование на реальных задачах.' 
                },
                { 
                  icon: 'Headset', 
                  title: 'Сопровождение', 
                  desc: 'Постоянная техподдержка, обновления, дообучение на новых данных, оптимизация работы нейро-агента.' 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start bg-card border border-border rounded-xl p-6 hover:border-primary transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                    <Icon name={item.icon as any} size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Наши преимущества</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: 'Zap', text: 'Быстрое внедрение: от 2 недель' },
                  { icon: 'DollarSign', text: 'Доступная цена с гарантией результата' },
                  { icon: 'Award', text: 'Собственная методика разработки' },
                  { icon: 'Sparkles', text: 'Глубокая кастомизация под бизнес' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Кейсы и результаты
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                У нас более 90 шаблонов кейсов по разным нишам бизнеса
              </p>
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
                <p className="text-lg mb-4">📊 Полный каталог кейсов с метриками и результатами</p>
                <p className="text-muted-foreground">Отправляем детальные кейсы после консультации с учётом вашей ниши и задач</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  title: 'E-commerce магазин', 
                  metric: '+280% продаж', 
                  desc: 'Нейро-менеджер обрабатывает 500+ заказов в день',
                  icon: 'ShoppingBag'
                },
                { 
                  title: 'Онлайн-школа', 
                  metric: '-65% расходов', 
                  desc: 'AI-поддержка для 3000+ студентов 24/7',
                  icon: 'GraduationCap'
                },
                { 
                  title: 'B2B компания', 
                  metric: 'x5 скорость', 
                  desc: 'Автоматизация отдела продаж и CRM',
                  icon: 'Briefcase'
                }
              ].map((item, idx) => (
                <Card key={idx} className="bg-gradient-to-br from-card to-card/50 border-border hover:border-primary transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 mx-auto">
                      <Icon name={item.icon as any} size={32} className="text-primary-foreground" />
                    </div>
                    <CardTitle className="text-center text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                      {item.metric}
                    </div>
                    <CardDescription className="text-base">{item.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Отзывы клиентов
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: 'Алексей Морозов',
                  position: 'CEO интернет-магазина электроники',
                  text: 'Внедрили нейросотрудника для обработки заявок. За 2 месяца продажи выросли на 180%, а команда поддержки сократилась с 8 до 2 человек. ROI окупился за 3 недели.',
                  rating: 5
                },
                {
                  name: 'Мария Соколова',
                  position: 'Владелица онлайн-школы',
                  text: 'AI-ассистент отвечает на вопросы учеников круглосуточно. Довольство студентов выросло на 92%, а мы сэкономили более 300 тысяч рублей в месяц на поддержке.',
                  rating: 5
                },
                {
                  name: 'Дмитрий Волков',
                  position: 'Директор B2B компании',
                  text: 'Автоматизировали отдел продаж. Нейро-агент квалифицирует лиды, отвечает на вопросы, назначает встречи. Конверсия выросла с 3% до 11%. Просто невероятно!',
                  rating: 5
                },
                {
                  name: 'Ольга Петрова',
                  position: 'Основатель маркетингового агентства',
                  text: 'Использовали нейросотрудников для обработки данных и аналитики. То, что раньше занимало неделю, теперь делается за пару часов. Качество анализа даже выше.',
                  rating: 5
                },
                {
                  name: 'Игорь Семёнов',
                  position: 'Владелец сети кофеен',
                  text: 'Внедрили AI для приёма заказов через мессенджеры. Средний чек вырос на 45% благодаря умным рекомендациям. Клиенты в восторге от скорости обслуживания.',
                  rating: 5
                },
                {
                  name: 'Анна Белова',
                  position: 'HR-директор IT-компании',
                  text: 'Нейро-агент помогает в подборе кандидатов и онбординге. Время закрытия вакансий сократилось с 45 до 12 дней. Качество подбора стало стабильно высоким.',
                  rating: 5
                }
              ].map((review, idx) => (
                <Card key={idx} className="bg-card border-border hover:border-primary transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-primary-foreground">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <CardDescription className="text-sm">{review.position}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="form" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl md:text-4xl mb-4">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Оставьте заявку
                    </span>
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Мы свяжемся с вами в течение 10 минут и проконсультируем по всем вопросам
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Телефон *"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Email *"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Тип бизнеса"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Комментарий или вопрос"
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        rows={4}
                        className="bg-background/50"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg py-6">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Часто задаваемые вопросы
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    q: 'Как создаётся нейросотрудник для моего бизнеса?',
                    a: 'Процесс начинается с глубокого анализа вашего бизнеса и задач. Мы изучаем процессы, собираем данные о продуктах, услугах, типичных запросах клиентов. Затем проектируем логику работы AI-ассистента, создаём сценарии диалогов и обучаем нейросеть на ваших данных. После тестирования интегрируем нейросотрудника в ваши системы и запускаем в работу.'
                  },
                  {
                    q: 'Что требуется от клиента для внедрения?',
                    a: 'От вас потребуется предоставить доступ к данным о продуктах/услугах, описание бизнес-процессов, примеры типичных обращений клиентов. Также нужно будет дать доступ к системам для интеграции (CRM, сайт, мессенджеры). Наша команда возьмёт на себя всю техническую работу, вам нужно только предоставить информацию и согласовать ключевые решения.'
                  },
                  {
                    q: 'Сколько времени занимает внедрение нейро-агента?',
                    a: 'Типовое внедрение занимает от 2 до 6 недель в зависимости от сложности задач и количества интеграций. Простой чат-бот для поддержки можем запустить за 2 недели. Сложная система с множеством интеграций, обработкой больших объёмов данных и глубокой кастомизацией может занять до 2 месяцев.'
                  },
                  {
                    q: 'Какие интеграции возможны с нейросотрудником?',
                    a: 'Мы интегрируем нейро-агентов практически с любыми системами: все популярные CRM (Битрикс24, amoCRM, Salesforce), мессенджеры (WhatsApp, Telegram, VK), соцсети, сайты, IP-телефония, email-системы, базы данных, 1С, складские системы, платёжные сервисы. Если у вас специфическая система — найдём решение для интеграции.'
                  },
                  {
                    q: 'Чем нейро-агент лучше обычного сотрудника?',
                    a: 'Нейросотрудник работает 24/7 без перерывов, отпусков и больничных. Он обрабатывает тысячи запросов одновременно, никогда не устаёт, не допускает ошибок из-за невнимательности, знает 100% вашей номенклатуры, мгновенно находит нужную информацию. При этом не требует зарплаты, офисного места, соцпакета. Средняя экономия на одном нейросотруднике — от 150 000 рублей в месяц при в разы большей эффективности.'
                  },
                  {
                    q: 'Какие задачи можно автоматизировать с помощью ИИ?',
                    a: 'Практически любые задачи, связанные с обработкой информации и коммуникацией: приём и обработка заявок, консультирование клиентов, продажи, техподдержка, работа с CRM, подбор персонала, обучение сотрудников, маркетинговая аналитика, обработка документов, учёт и отчётность, логистика, управление проектами. Если задачу можно описать правилами и алгоритмом — её можно автоматизировать.'
                  },
                  {
                    q: 'Какие гарантии результата вы даёте?',
                    a: 'Мы гарантируем работоспособность нейросотрудника согласно техзаданию. Прописываем KPI в договоре: скорость ответа, точность информации, конверсию, количество обработанных запросов. Если нейро-агент не достигает согласованных показателей — дорабатываем бесплатно. Даём 3 месяца гарантийной поддержки и дообучения. У нас более 90 успешных кейсов, средний ROI клиентов — возврат инвестиций за 1-3 месяца.'
                  }
                ].map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary">
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Контакты
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Связь</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <a href="tel:+79991234567" className="text-lg hover:text-primary transition-colors">+7 (999) 123-45-67</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:info@neurosotrudnik.pro" className="text-lg hover:text-primary transition-colors">info@neurosotrudnik.pro</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp / Telegram</p>
                      <p className="text-lg">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Офис</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Юридический адрес</p>
                      <p className="text-lg">г. Москва, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Building" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Фактический адрес</p>
                      <p className="text-lg">г. Москва, ул. Инновационная, д. 10</p>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Icon name="Linkedin" size={20} />
                    </Button>
                    <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Icon name="Youtube" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 max-w-5xl mx-auto bg-card border border-border rounded-2xl p-2 overflow-hidden">
              <div className="w-full h-96 bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">Карта офиса</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card/80 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Brain" size={24} className="text-primary-foreground" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  neurosotrudnik.pro
                </span>
              </div>
              <p className="text-muted-foreground">
                Создаём нейро-сотрудников для автоматизации бизнеса
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <div className="space-y-2">
                <a href="#main" className="block text-muted-foreground hover:text-primary transition-colors">Главная</a>
                <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">Услуги</a>
                <a href="#cases" className="block text-muted-foreground hover:text-primary transition-colors">Кейсы</a>
                <a href="#faq" className="block text-muted-foreground hover:text-primary transition-colors">FAQ</a>
                <a href="#contacts" className="block text-muted-foreground hover:text-primary transition-colors">Контакты</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Связь</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (999) 123-45-67</p>
                <p>info@neurosotrudnik.pro</p>
                <p>г. Москва</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>© 2024 neurosotrudnik.pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
