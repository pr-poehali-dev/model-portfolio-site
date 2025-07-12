import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Маркетплейсы",
      description: "Фото для товаров на Wildberries, Ozon, Яндекс.Маркет",
      price: "от 3 000 ₽",
    },
    {
      title: "Соцсети и реклама",
      description: "Контент для Instagram, TikTok, рекламных кампаний",
      price: "от 5 000 ₽",
    },
    {
      title: "Коммерческие съёмки",
      description: "Каталоги одежды, аксессуаров, косметики",
      price: "от 8 000 ₽",
    },
    {
      title: "Творческие проекты",
      description: "Арт-фото, концептуальные съёмки, лукбуки",
      price: "от 10 000 ₽",
    },
  ];

  const portfolioImages = [
    {
      src: "/img/31835b29-1339-41a8-8cb7-e481ac986ab8.jpg",
      category: "portrait",
    },
    {
      src: "/img/b0bf1861-ccd9-4af7-93b5-a8115897e602.jpg",
      category: "commercial",
    },
    {
      src: "/img/ac288224-ebe8-464b-80ee-bfa816f75f84.jpg",
      category: "creative",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-black">МОДЕЛЬ</h1>
          <div className="hidden md:flex space-x-8">
            <a
              href="#portfolio"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Услуги
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Контакты
            </a>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs">
                  ПРОФЕССИОНАЛЬНАЯ МОДЕЛЬ
                </Badge>
                <h2 className="text-5xl md:text-6xl font-light text-black leading-tight">
                  Софья
                  <br />
                  <span className="font-bold">Заева</span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Специализируюсь на съёмках для маркетплейсов, соцсетей, рекламы
                и коммерческих проектов. Опыт работы более 5 лет.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Забронировать съёмку
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать портфолио
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/img/31835b29-1339-41a8-8cb7-e481ac986ab8.jpg"
                  alt="Софья Заева - профессиональная модель"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Icon
                    name="Star"
                    size={16}
                    className="text-yellow-500 fill-current"
                  />
                  <span className="text-sm font-medium">4.9/5</span>
                  <span className="text-xs text-gray-500">(127 отзывов)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-black mb-4">Портфолио</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Примеры работ в различных направлениях: от съёмок для
              маркетплейсов до креативных проектов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                    <img
                      src={image.src}
                      alt={`Портфолио ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <Badge variant="secondary" className="text-xs">
                      {image.category === "portrait" && "Портретная съёмка"}
                      {image.category === "commercial" && "Коммерческая съёмка"}
                      {image.category === "creative" && "Креативная съёмка"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Icon name="Eye" size={18} className="mr-2" />
              Смотреть всё портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-black mb-4">Услуги</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Профессиональные съёмки для различных целей с опытом работы в
              индустрии моды и рекламы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-black">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="pt-2">
                      <span className="text-lg font-bold text-black">
                        {service.price}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-6">Готовы к съёмке?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь со мной для обсуждения вашего проекта. Отвечу в течение 2
            часов и предложу оптимальное решение
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" variant="secondary">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Написать в Telegram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>

          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} />
              Москва, выезд в регионы
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              Ответ в течение 2 часов
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 Софья Заева. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              <Icon name="Instagram" size={16} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="MessageCircle" size={16} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
