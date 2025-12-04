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
    answer: 'Мы гарантируем работоспособность нейросотрудника согласно техническому заданию. Предоставляем тестовый период для проверки всех функций, техподдержку 24/7 в течение первого месяца и возможность доработок. Если результат не соответствует ожиданиям — возвращаем деньги.',
  },
  {
    question: 'Нужны ли технические знания для работы с нейросотрудником?',
    answer: 'Нет, технические знания не требуются. Мы создаем интуитивно понятные интерфейсы и проводим обучение вашей команды. Для управления нейросотрудником достаточно базовых навыков работы с компьютером. Вся техническая поддержка осуществляется нашей командой.',
  },
];

const ContactAndFaqSection = () => {
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

  return (
    <>
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
    </>
  );
};

export default ContactAndFaqSection;
