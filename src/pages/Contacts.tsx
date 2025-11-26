import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactItems = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@neurosotrudnik.pro',
      link: 'mailto:info@neurosotrudnik.pro',
    },
    {
      icon: 'MessageCircle',
      title: 'Telegram',
      value: '@neurosotrudnik',
      link: '#',
    },
    {
      icon: 'MessageSquare',
      title: 'WhatsApp',
      value: '+7 (495) 123-45-67',
      link: '#',
    },
  ];

  const offices = [
    {
      type: 'Юридический адрес',
      address: '123456, Россия, г. Москва, ул. Примерная, д. 1, офис 100',
    },
    {
      type: 'Фактический адрес',
      address: '123456, Россия, г. Москва, ул. Рабочая, д. 5, офис 301',
    },
  ];

  const socialLinks = [
    { icon: 'MessageCircle', label: 'Telegram', href: '#' },
    { icon: 'Phone', label: 'WhatsApp', href: '#' },
    { icon: 'Instagram', label: 'Instagram', href: '#' },
    { icon: 'Linkedin', label: 'LinkedIn', href: '#' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы на связи 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactItems.map((item, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <a
                        href={item.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {offices.map((office, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {office.type}
                      </h3>
                      <p className="text-muted-foreground">{office.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Мы в социальных сетях
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center space-x-3 px-6 py-3 rounded-lg bg-muted hover:bg-primary/20 transition-colors group"
                  >
                    <Icon
                      name={social.icon}
                      size={24}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                    <span className="font-medium text-foreground">{social.label}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border overflow-hidden">
            <div className="h-96 bg-muted relative">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.617644%2C55.755819&z=12&l=map"
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full"
                title="Карта"
              />
            </div>
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Navigation" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Как нас найти
                  </h3>
                  <p className="text-muted-foreground">
                    Офис находится в центре Москвы, в пешей доступности от метро.
                    Встречи проводим по предварительной записи.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Готовы обсудить ваш проект?
            </h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами любым удобным способом, и мы ответим в течение 10 минут
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+74951234567">
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </button>
              </a>
              <a href="mailto:info@neurosotrudnik.pro">
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Написать
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
