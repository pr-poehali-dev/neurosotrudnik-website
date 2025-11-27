import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactItems = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (964) 138-13-88',
      link: 'tel:+79641381388',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'germesmen@gmail.com',
      link: 'mailto:germesmen@gmail.com',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Рязань, ул. Михайловское шоссе д. 238а, оф. 315',
      link: '#',
    },
  ];

  const offices = [
    {
      type: 'Адрес офиса',
      address: 'Россия, г. Рязань, ул. Михайловское шоссе д. 238а, оф. 315',
    },
  ];

  const socialLinks = [
    { icon: 'MessageCircle', label: 'Telegram', href: 'https://t.me/germesmenrm' },
    { icon: 'Users', label: 'ВКонтакте', href: 'https://vk.com/neurosotrudnik' },
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

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Готовы обсудить ваш проект?
            </h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами любым удобным способом, и мы ответим в течение 10 минут
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+79641381388">
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </button>
              </a>
              <a href="mailto:germesmen@gmail.com">
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Написать
                </button>
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                ИП Азолкина<br />
                ИНН: 636204036604
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;