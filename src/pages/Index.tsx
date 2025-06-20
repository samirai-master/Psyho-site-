import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Brain,
  Calendar,
  FileText,
  Users,
  Bot,
  Heart,
  Shield,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock,
  MessageCircle,
  DollarSign,
  Target,
  MessageSquare,
  Phone,
  ExternalLink,
} from "lucide-react";

// Contact choice modal component
const ContactChoice = ({
  onChoice,
  isOpen,
  onClose,
  title,
}: {
  onChoice: (platform: "telegram" | "whatsapp") => void;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 m-4 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">Выберите удобный способ связи:</p>
        <div className="space-y-3">
          <Button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2"
            onClick={() => onChoice("telegram")}
          >
            <MessageSquare className="w-4 h-4" />
            Telegram
          </Button>
          <Button
            className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
            onClick={() => onChoice("whatsapp")}
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [showTrialModal, setShowTrialModal] = React.useState(false);
  const [showConsultModal, setShowConsultModal] = React.useState(false);

  const handleContactChoice = (
    platform: "telegram" | "whatsapp",
    type: "trial" | "consult",
  ) => {
    const telegramUrl =
      type === "trial"
        ? "https://t.me/drsamir_bot"
        : "https://t.me/drsamir_consult";
    const whatsappUrl =
      type === "trial"
        ? "https://wa.me/994501234567?text=Хочу попробовать AI-психолога бесплатно"
        : "https://wa.me/994501234567?text=Хочу записаться на консультацию";

    if (platform === "telegram") {
      window.open(telegramUrl, "_blank");
    } else {
      window.open(whatsappUrl, "_blank");
    }

    setShowTrialModal(false);
    setShowConsultModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mindful-50 via-serenity-50 to-lavender-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-mindful-gradient rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                AI Psixoloq Dəstəyi
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-mindful-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-mindful-600 transition-colors"
              >
                Цены
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-mindful-600 transition-colors"
              >
                Dr.Samir
              </a>
              <Button className="bg-mindful-gradient text-white shadow-lg hover:shadow-xl transition-all">
                написать Dr.Samiru
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-lavender-100 text-lavender-800 border-lavender-200 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Революция в психологической помощи
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              AI-психолог в твоем
              <span className="bg-serenity-gradient bg-clip-text text-transparent">
                {" "}
                кармане
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Получай профессиональную психологическую поддержку 24/7. Анонимно,
              удобно и эффективно. Начни путь к лучшей версии себя уже сегодня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-mindful-gradient text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all"
                onClick={() => setShowTrialModal(true)}
              >
                <Bot className="w-5 h-5 mr-2" />
                <span>Попробовать бесплатно 7 дней</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-2 border-mindful-200 text-mindful-700 hover:bg-mindful-50"
                onClick={() => setShowConsultModal(true)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Записаться на консультацию
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-gray-500 mt-4">
              <CheckCircle className="w-4 h-4 inline mr-2 text-serenity-600" />
              Без регистрации • Анонимно • Безопасно
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Комплексная поддержка твоего ментального здоровья
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От AI-терапии до индивидуальных консультаций — все инструменты для
              твоего психологического благополучия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Психолог */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-mindful-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  AI-Психолог 24/7
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Персональный AI-помощник для ментального здоровья в Telegram
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    Мягкая анонимность
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    Практики и аудио
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    Дневник и трекер тревоги
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">
                    10 AZN/мес
                  </div>
                  <div className="text-serenity-600 font-medium">
                    7 дней бесплатно
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Живые консультации */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-serenity-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Онлайн-консультации
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Индивидуальные сессии с настоящим психологом
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    Самооценка и тревога
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    Семейные отношения
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    Работа с расставаниями
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">
                    25-35 AZN
                  </div>
                  <div className="text-serenity-600 font-medium">
                    За сессию или пакеты
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI-Наставник для богатства и успеха */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  AI-Наставник чтобы стать богатым и успешным
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Персональный AI-помощник для достижения финансового успеха
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    Полезные привычки
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    Финансовый руководитель
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    Бизнес наставник
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    Фитнес тренер
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">
                    15 AZN/мес
                  </div>
                  <div className="text-serenity-600 font-medium">
                    7 дней бесплатно
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Марафоны */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-lavender-500 to-mindful-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Марафоны & Курсы
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Структурированные программы для быстрого результата
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    7-дневный курс по тревоге
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    AI + голосовые сообщения
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-serenity-600 mr-3" />
                    Практическая поддержка
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">29 AZN</div>
                  <div className="text-serenity-600 font-medium">
                    Полный доступ
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Прозрачное ценообразование
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выбери формат поддержки, который подходит именно тебе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* AI Subscription */}
            <Card className="relative overflow-hidden border-2 border-mindful-200 hover:border-mindful-400 transition-all duration-300 bg-white">
              <div className="absolute top-0 right-0 bg-mindful-gradient text-white px-3 py-1 text-sm font-medium">
                Популярно
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  AI-Психолог
                </CardTitle>
                <CardDescription>
                  Круглосуточная поддержка в Telegram
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">10 AZN</div>
                  <div className="text-gray-600">в месяц</div>
                  <div className="text-serenity-600 font-medium">
                    7 дней бесплатно
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Безлимитное общение 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Персонализированные практики
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Аудио-медитации
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Дневник эмоций
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Трекер тревожности
                  </li>
                </ul>
                <Button className="w-full bg-mindful-gradient text-white">
                  Попробовать бесплатно
                </Button>
              </CardContent>
            </Card>

            {/* Live Consultations */}
            <Card className="border-2 border-gray-200 hover:border-serenity-400 transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Живые сессии
                </CardTitle>
                <CardDescription>Индивидуальные консультации</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">
                    25-35 AZN
                  </div>
                  <div className="text-gray-600">за сессию (50 мин)</div>
                  <div className="text-serenity-600 font-medium">
                    Пакет 3 сессии - 70 AZN
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Индивидуальный подход
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Работа с самооценкой
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Тревожные состояния
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Семейные вопросы
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Поддержка при расставаниях
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-serenity-400 text-serenity-700 hover:bg-serenity-50"
                >
                  Записаться на сессию
                </Button>
              </CardContent>
            </Card>

            {/* Marathon */}
            <Card className="border-2 border-gray-200 hover:border-lavender-400 transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Марафон
                </CardTitle>
                <CardDescription>Интенсивная программа</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">29 AZN</div>
                  <div className="text-gray-600">7-дневный курс</div>
                  <div className="text-lavender-600 font-medium">
                    "Справься с тревогой"
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    AI-поддержка + голосовые
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Ежедневные практики
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Групповая поддержка
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Персональные рекомендации
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Результат за неделю
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-lavender-400 text-lavender-700 hover:bg-lavender-50"
                >
                  Присоединиться
                </Button>
              </CardContent>
            </Card>

            {/* AI Wealth Assistant */}
            <Card className="border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Ваш AI ассистент
                </CardTitle>
                <CardDescription>
                  чтобы стать богатым и успешным
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">20 AZN</div>
                  <div className="text-gray-600">в месяц</div>
                  <div className="text-yellow-600 font-medium">
                    Премиум наставничество
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Персональный финансовый план
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Бизнес-стратегии и советы
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Инвестиционное планирование
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Мотивация и целеполагание
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-serenity-600 mr-3" />
                    Анализ рынка и трендов
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-50"
                >
                  Стать успешным
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-mindful-50 to-serenity-50 border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-mindful-600" />
                  PDF-Гайды
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      "Как выйти из эмоциональной зависимости"
                    </span>
                    <span className="font-bold text-mindful-600">10 AZN</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      "10 техник избавления от тревоги"
                    </span>
                    <span className="font-bold text-mindful-600">5 AZN</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="mt-6 w-full border-mindful-400 text-mindful-700"
                >
                  Купить гайды
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-serenity-50 to-lavender-50 border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-serenity-600" />
                  Для специалистов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      AI-ассистент "под ключ"
                    </span>
                    <span className="font-bold text-serenity-600">
                      250-500 AZN
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Месячная п��дписка</span>
                    <span className="font-bold text-serenity-600">
                      99 AZN/мес
                    </span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="mt-6 w-full border-serenity-400 text-serenity-700"
                >
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современный подход к психологическому здоровью
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-mindful-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                100% Анонимно
              </h3>
              <p className="text-gray-600">
                Никто не узнает о твоих проблемах. Полная конфиденциальность и
                безопасность.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-serenity-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Доступно 24/7
              </h3>
              <p className="text-gray-600">
                Поддержка в любое время дня и ночи. Когда она тебе нужна больше
                всего.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-lavender-500 to-mindful-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Быстрый результат
              </h3>
              <p className="text-gray-600">
                Заметные улучшения уже через несколько дней использования наших
                методик.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-serenity-500 to-lavender-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Научно обоснованно
              </h3>
              <p className="text-gray-600">
                Все методики основаны на современных психологических
                исследованиях.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Истории наших пользователей
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "Наконец-то нашла поддержку, которая не требует походов к
                  специалисту. AI-психолог помог мне справиться с тревогой."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-mindful-200 rounded-full flex items-center justify-center mr-3">
                    А
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Анна, 28 лет
                    </div>
                    <div className="text-gray-500 text-sm">Маркетолог</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "Марафон по тревожности изменил мою жизнь. За 7 дней научился
                  техникам, которые использую до сих пор."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-serenity-200 rounded-full flex items-center justify-center mr-3">
                    М
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Мурад, 32 года
                    </div>
                    <div className="text-gray-500 text-sm">IT-специалист</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "Живые консультации помогли мне пережить сложный период.
                  Специалист очень профессиональный и понимающий."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-lavender-200 rounded-full flex items-center justify-center mr-3">
                    С
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Сабина, 25 лет
                    </div>
                    <div className="text-gray-500 text-sm">Студентка</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-mindful-600 via-serenity-600 to-lavender-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Начни путь к лучшей версии себя уже сегодня
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Присоединяйся к тысячам людей, которые уже изменили свою жизнь с
            помощью нашей платформы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-mindful-700 px-8 py-4 text-lg hover:bg-gray-50 shadow-xl"
            >
              <Bot className="w-5 h-5 mr-2" />
              Попробовать AI-психолога
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white px-8 py-4 text-lg hover:bg-white/10"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Записаться на консультацию
            </Button>
          </div>
          <p className="text-white/80 mt-6">
            <CheckCircle className="w-4 h-4 inline mr-2" />7 дней бесплатно •
            Отмена в любое время
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-mindful-gradient rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MindfulAI</span>
              </div>
              <p className="text-gray-400">
                Современн��я платформа для ментального здоровья, объединяющая
                AI-технологии и человеческую заботу.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI-Психолог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Онлайн-консультации
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Марафоны
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    PDF-гайды
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Часто задаваемые вопросы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Связаться с нами
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Условия использования
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@mindfulai.az</li>
                <li>+994 XX XXX XX XX</li>
                <li>Баку, Азербайджан</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 MindfulAI. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Telegram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
