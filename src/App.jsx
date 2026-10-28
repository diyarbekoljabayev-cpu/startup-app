import { useState, useEffect } from "react";
import "./App.css";

const translations = {
  uz: {
    home: "Bosh sahifa",
    features: "Imkoniyatlar",
    pricing: "Narxlar",
    about: "Biz haqimizda",
    contact: "Aloqa",
    start: "Boshlash",
    badge: "Kelajak texnologiyasi bilan tanishing",
    title1: "Sun’iy intellekt bilan",
    title2: "hayotingizni oson qiling",
    description:
      "AI Smart — sizning shaxsiy AI yordamchingiz. Matn yozish, o‘qish, g‘oya topish va kundalik vazifalarni tez va oson bajarishga yordam beradi.",
    getStarted: "Bepul boshlash",
    howItWorks: "Qanday ishlaydi?",
    trusted: "foydalanuvchilar bizga ishonadi",
    featureLabel: "IMKONIYATLAR",
    featureTitle: "Nima uchun AI Smart?",
    featureDescription:
      "Sizga eng yaxshi tajribani taqdim etish uchun barcha imkoniyatlarni birlashtirdik.",
    featuresList: [
      {
        icon: "⚡",
        title: "Tezkor javob",
        text: "Savollaringizga soniyalar ichida javob oling.",
      },
      {
        icon: "🧠",
        title: "AI yordamchi",
        text: "Sun’iy intellekt bilan ishlash yanada oson.",
      },
      {
        icon: "🛡️",
        title: "Xavfsizlik",
        text: "Ma’lumotlaringiz xavfsizligiga alohida e’tibor beramiz.",
      },
      {
        icon: "📱",
        title: "Har qanday qurilma",
        text: "Telefon, planshet va kompyuterda ishlaydi.",
      },
      {
        icon: "🌐",
        title: "Ko‘p tilli",
        text: "Bir nechta tilda foydalaning.",
      },
      {
        icon: "✨",
        title: "Doimiy yangilanish",
        text: "Yangi imkoniyatlar bilan doim rivojlanamiz.",
      },
    ],
    statsLabel: "NATIJALAR",
    statsTitle: "Bizning natijalarimiz",
    statsDescription:
      "Foydalanuvchilarimiz soni kundan-kunga ortib bormoqda.",
    stats: ["Foydalanuvchilar", "Yuborilgan so‘rovlar", "Ishonchlilik", "Baho"],
    pricingLabel: "NARXLAR",
    pricingTitle: "Siz uchun eng yaxshi rejalar",
    pricingDescription:
      "O‘zingizga mos tarifni tanlang va AI imkoniyatlaridan foydalaning.",
    free: "Bepul",
    pro: "Pro",
    business: "Business",
    freeDesc: "Boshlash uchun ideal",
    proDesc: "Eng mashhur tanlov",
    businessDesc: "Kompaniyalar uchun",
    month: "oy",
    choose: "Tanlash",
    popular: "Mashhur",
    plans: [
      ["Asosiy imkoniyatlar", "Kuniga 10 ta so‘rov", "Bitta til"],
      [
        "Barcha imkoniyatlar",
        "Kuniga 100 ta so‘rov",
        "4 ta til",
        "Ustuvor yordam",
      ],
      [
        "Barcha imkoniyatlar",
        "Cheksiz so‘rovlar",
        "API kirish",
        "Shaxsiy menejer",
      ],
    ],
    reviewsLabel: "MIJOZLAR FIKRI",
    reviewsTitle: "Foydalanuvchilarimiz nima deydi?",
    reviewsDescription: "Bizning xizmatimiz haqidagi fikrlar.",
    reviews: [
      {
        name: "Azizbek Karimov",
        role: "Talaba",
        text: "AI Smart o‘qishimda katta yordam bermoqda. Juda qulay va tez!",
        avatar: "AK",
      },
      {
        name: "Sabrina Aliyeva",
        role: "Dizayner",
        text: "Yangi g‘oyalar topishda eng yaxshi yordamchi. Tavsiya qilaman!",
        avatar: "SA",
      },
      {
        name: "Bekzod Rahmonov",
        role: "Dasturchi",
        text: "Interfeysi chiroyli va ishlatish oson. Haqiqatan ham zo‘r!",
        avatar: "BR",
      },
    ],
    footerText: "Kelajak bugundan boshlanadi.",
    rights: "Barcha huquqlar himoyalangan.",
    chatTitle: "AI Smart",
    online: "Onlayn yordamchi",
    greeting: "Salom! 👋",
    greetingText: "Men sizning AI yordamchingizman. Sizga qanday yordam bera olaman?",
    inputPlaceholder: "Xabar yozing...",
    emptyMessage: "Iltimos, avval xabar yozing.",
    demoReply:
      "Ajoyib savol! Men AI Smart demo yordamchisiman. To‘liq AI javoblari uchun haqiqiy AI API ulanishi kerak.",
    quickActions: ["✍️ Matn yozish", "💡 G‘oya topish", "🌍 Tarjima", "📚 O‘qish"],
    demoNotice:
      "Bu demo chat. Haqiqiy sun’iy intellekt javoblari uchun backend va AI API kerak.",
    readyTitle: "Ishingizni osonlashtirishga tayyormisiz?",
    readyText:
      "Bugunoq boshlang va sun’iy intellekt imkoniyatlarini kashf eting.",
    readyButton: "Hoziroq boshlash",
    emailPlaceholder: "Elektron pochtangiz",
    subscribe: "Obuna bo‘lish",
    emailSuccess: "Rahmat! Demo obunangiz qabul qilindi.",
    emailError: "Iltimos, to‘g‘ri email kiriting.",
    modalTitle: "AI Smart bilan boshlang",
    modalText:
      "Hozircha bu demo versiya. Emailingizni qoldiring va loyihamiz bilan tanishing.",
    close: "Yopish",
  },
  ru: {
    home: "Главная",
    features: "Возможности",
    pricing: "Тарифы",
    about: "О нас",
    contact: "Контакты",
    start: "Начать",
    badge: "Откройте технологии будущего",
    title1: "Искусственный интеллект",
    title2: "делает жизнь проще",
    description:
      "AI Smart — ваш личный ИИ-помощник. Помогает писать тексты, учиться, находить идеи и быстрее выполнять повседневные задачи.",
    getStarted: "Начать бесплатно",
    howItWorks: "Как это работает?",
    trusted: "пользователей доверяют нам",
    featureLabel: "ВОЗМОЖНОСТИ",
    featureTitle: "Почему AI Smart?",
    featureDescription:
      "Мы объединили полезные функции для комфортной работы.",
    featuresList: [
      { icon: "⚡", title: "Быстрые ответы", text: "Получайте ответы за секунды." },
      { icon: "🧠", title: "ИИ-помощник", text: "Работать с искусственным интеллектом просто." },
      { icon: "🛡️", title: "Безопасность", text: "Мы заботимся о защите ваших данных." },
      { icon: "📱", title: "Любое устройство", text: "Телефон, планшет и компьютер." },
      { icon: "🌐", title: "Многоязычность", text: "Используйте несколько языков." },
      { icon: "✨", title: "Обновления", text: "Мы постоянно добавляем новые функции." },
    ],
    statsLabel: "РЕЗУЛЬТАТЫ",
    statsTitle: "Наши результаты",
    statsDescription: "Количество пользователей постоянно растёт.",
    stats: ["Пользователи", "Запросы", "Надёжность", "Оценка"],
    pricingLabel: "ТАРИФЫ",
    pricingTitle: "Выберите подходящий тариф",
    pricingDescription: "Откройте для себя возможности искусственного интеллекта.",
    free: "Бесплатный",
    pro: "Pro",
    business: "Business",
    freeDesc: "Идеально для старта",
    proDesc: "Самый популярный",
    businessDesc: "Для компаний",
    month: "мес.",
    choose: "Выбрать",
    popular: "Популярный",
    plans: [
      ["Основные функции", "10 запросов в день", "Один язык"],
      ["Все функции", "100 запросов в день", "4 языка", "Приоритетная поддержка"],
      ["Все функции", "Безлимитные запросы", "Доступ к API", "Персональный менеджер"],
    ],
    reviewsLabel: "ОТЗЫВЫ",
    reviewsTitle: "Что говорят пользователи?",
    reviewsDescription: "Мнения наших пользователей.",
    reviews: [
      { name: "Азизбек Каримов", role: "Студент", text: "AI Smart очень помогает в учёбе. Удобно и быстро!", avatar: "АК" },
      { name: "Сабрина Алиева", role: "Дизайнер", text: "Отличный помощник для поиска новых идей!", avatar: "СА" },
      { name: "Бекзод Рахмонов", role: "Разработчик", text: "Красивый интерфейс и простота использования!", avatar: "БР" },
    ],
    footerText: "Будущее начинается сегодня.",
    rights: "Все права защищены.",
    chatTitle: "AI Smart",
    online: "Онлайн-помощник",
    greeting: "Привет! 👋",
    greetingText: "Я ваш ИИ-помощник. Чем могу помочь?",
    inputPlaceholder: "Напишите сообщение...",
    emptyMessage: "Сначала напишите сообщение.",
    demoReply:
      "Отличный вопрос! Я демонстрационный помощник AI Smart. Для полноценных ответов нужен настоящий AI API.",
    quickActions: ["✍️ Написать текст", "💡 Найти идею", "🌍 Перевод", "📚 Учёба"],
    demoNotice: "Это демо-чат. Для настоящих ответов нужен сервер и AI API.",
    readyTitle: "Готовы упростить свою работу?",
    readyText: "Начните сегодня и откройте возможности ИИ.",
    readyButton: "Начать сейчас",
    emailPlaceholder: "Ваш email",
    subscribe: "Подписаться",
    emailSuccess: "Спасибо! Ваша демо-подписка принята.",
    emailError: "Введите корректный email.",
    modalTitle: "Начните с AI Smart",
    modalText: "Это демо-версия. Оставьте email и следите за нашим проектом.",
    close: "Закрыть",
  },
  en: {
    home: "Home",
    features: "Features",
    pricing: "Pricing",
    about: "About us",
    contact: "Contact",
    start: "Get started",
    badge: "Discover the technology of tomorrow",
    title1: "Artificial intelligence",
    title2: "makes life easier",
    description:
      "AI Smart is your personal AI assistant. Write, learn, brainstorm and complete everyday tasks faster and easier.",
    getStarted: "Start for free",
    howItWorks: "How it works",
    trusted: "users trust us",
    featureLabel: "FEATURES",
    featureTitle: "Why AI Smart?",
    featureDescription:
      "We bring useful features together for a better experience.",
    featuresList: [
      { icon: "⚡", title: "Instant answers", text: "Get answers in seconds." },
      { icon: "🧠", title: "AI assistant", text: "Working with AI made easy." },
      { icon: "🛡️", title: "Security", text: "We care about protecting your data." },
      { icon: "📱", title: "Any device", text: "Works on phones, tablets and computers." },
      { icon: "🌐", title: "Multilingual", text: "Use the platform in multiple languages." },
      { icon: "✨", title: "Always improving", text: "Discover new features regularly." },
    ],
    statsLabel: "OUR RESULTS",
    statsTitle: "Our impact",
    statsDescription: "Our community keeps growing every day.",
    stats: ["Users", "Requests", "Reliability", "Rating"],
    pricingLabel: "PRICING",
    pricingTitle: "Plans made for you",
    pricingDescription: "Choose your plan and explore the power of AI.",
    free: "Free",
    pro: "Pro",
    business: "Business",
    freeDesc: "Perfect to get started",
    proDesc: "The most popular choice",
    businessDesc: "For companies",
    month: "mo",
    choose: "Choose plan",
    popular: "Popular",
    plans: [
      ["Core features", "10 requests per day", "One language"],
      ["All features", "100 requests per day", "4 languages", "Priority support"],
      ["All features", "Unlimited requests", "API access", "Personal manager"],
    ],
    reviewsLabel: "TESTIMONIALS",
    reviewsTitle: "What our users say",
    reviewsDescription: "Hear from our community.",
    reviews: [
      { name: "Azizbek Karimov", role: "Student", text: "AI Smart really helps me study. It's easy and fast!", avatar: "AK" },
      { name: "Sabrina Aliyeva", role: "Designer", text: "A great assistant for finding new ideas!", avatar: "SA" },
      { name: "Bekzod Rahmonov", role: "Developer", text: "Beautiful interface and very easy to use!", avatar: "BR" },
    ],
    footerText: "The future starts today.",
    rights: "All rights reserved.",
    chatTitle: "AI Smart",
    online: "Online assistant",
    greeting: "Hello! 👋",
    greetingText: "I'm your AI assistant. How can I help you?",
    inputPlaceholder: "Write a message...",
    emptyMessage: "Please write a message first.",
    demoReply:
      "Great question! I'm the AI Smart demo assistant. Real AI responses require a connected AI API.",
    quickActions: ["✍️ Write text", "💡 Find ideas", "🌍 Translate", "📚 Study"],
    demoNotice: "This is a demo chat. Real AI answers require a backend and AI API.",
    readyTitle: "Ready to simplify your work?",
    readyText: "Start today and discover the power of AI.",
    readyButton: "Get started now",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe",
    emailSuccess: "Thanks! Your demo subscription has been received.",
    emailError: "Please enter a valid email.",
    modalTitle: "Get started with AI Smart",
    modalText: "This is a demo version. Leave your email to follow our project.",
    close: "Close",
  },
  kk: {
    home: "Басты бет",
    features: "Мүмкіндіктер",
    pricing: "Бағалар",
    about: "Біз туралы",
    contact: "Байланыс",
    start: "Бастау",
    badge: "Болашақ технологияларын ашыңыз",
    title1: "Жасанды интеллект",
    title2: "өміріңізді жеңілдетеді",
    description:
      "AI Smart — сіздің жеке AI көмекшіңіз. Мәтін жазуға, оқуға, идея табуға және күнделікті тапсырмаларды жылдам орындауға көмектеседі.",
    getStarted: "Тегін бастау",
    howItWorks: "Қалай жұмыс істейді?",
    trusted: "пайдаланушы бізге сенеді",
    featureLabel: "МҮМКІНДІКТЕР",
    featureTitle: "Неліктен AI Smart?",
    featureDescription: "Жақсы тәжірибе үшін пайдалы мүмкіндіктерді біріктірдік.",
    featuresList: [
      { icon: "⚡", title: "Жылдам жауап", text: "Жауаптарды бірнеше секундта алыңыз." },
      { icon: "🧠", title: "AI көмекші", text: "Жасанды интеллектпен жұмыс істеу оңай." },
      { icon: "🛡️", title: "Қауіпсіздік", text: "Деректеріңіздің қорғалуына мән береміз." },
      { icon: "📱", title: "Кез келген құрылғы", text: "Телефонда, планшетте және компьютерде." },
      { icon: "🌐", title: "Көптілділік", text: "Бірнеше тілде пайдаланыңыз." },
      { icon: "✨", title: "Жаңартулар", text: "Жаңа мүмкіндіктер үнемі қосылады." },
    ],
    statsLabel: "НӘТИЖЕЛЕР",
    statsTitle: "Біздің нәтижелер",
    statsDescription: "Пайдаланушылар саны күн сайын өсіп келеді.",
    stats: ["Пайдаланушылар", "Сұраулар", "Сенімділік", "Баға"],
    pricingLabel: "БАҒАЛАР",
    pricingTitle: "Өзіңізге лайық жоспар",
    pricingDescription: "Жоспарды таңдап, AI мүмкіндіктерін пайдаланыңыз.",
    free: "Тегін",
    pro: "Pro",
    business: "Business",
    freeDesc: "Бастауға қолайлы",
    proDesc: "Ең танымал таңдау",
    businessDesc: "Компанияларға арналған",
    month: "ай",
    choose: "Таңдау",
    popular: "Танымал",
    plans: [
      ["Негізгі мүмкіндіктер", "Күніне 10 сұрау", "Бір тіл"],
      ["Барлық мүмкіндіктер", "Күніне 100 сұрау", "4 тіл", "Басым қолдау"],
      ["Барлық мүмкіндіктер", "Шексіз сұраулар", "API қолжетімділігі", "Жеке менеджер"],
    ],
    reviewsLabel: "ПІКІРЛЕР",
    reviewsTitle: "Пайдаланушылар не дейді?",
    reviewsDescription: "Қауымдастығымыздың пікірлері.",
    reviews: [
      { name: "Азизбек Каримов", role: "Студент", text: "AI Smart оқуыма көп көмектеседі. Өте ыңғайлы!", avatar: "АК" },
      { name: "Сабрина Алиева", role: "Дизайнер", text: "Жаңа идеялар табуға тамаша көмекші!", avatar: "СА" },
      { name: "Бекзод Рахмонов", role: "Бағдарламашы", text: "Әдемі интерфейс және қолдануға оңай!", avatar: "БР" },
    ],
    footerText: "Болашақ бүгіннен басталады.",
    rights: "Барлық құқықтар қорғалған.",
    chatTitle: "AI Smart",
    online: "Онлайн көмекші",
    greeting: "Сәлем! 👋",
    greetingText: "Мен сіздің AI көмекшіңізбін. Қалай көмектесе аламын?",
    inputPlaceholder: "Хабарлама жазыңыз...",
    emptyMessage: "Алдымен хабарлама жазыңыз.",
    demoReply:
      "Керемет сұрақ! Мен AI Smart демо көмекшісімін. Нақты AI жауаптары үшін AI API қажет.",
    quickActions: ["✍️ Мәтін жазу", "💡 Идея табу", "🌍 Аударма", "📚 Оқу"],
    demoNotice: "Бұл демо чат. Нақты жауаптар үшін сервер мен AI API қажет.",
    readyTitle: "Жұмысыңызды жеңілдетуге дайынсыз ба?",
    readyText: "Бүгін бастаңыз және AI мүмкіндіктерін ашыңыз.",
    readyButton: "Қазір бастау",
    emailPlaceholder: "Электрондық поштаңыз",
    subscribe: "Жазылу",
    emailSuccess: "Рақмет! Демо жазылымыңыз қабылданды.",
    emailError: "Дұрыс email енгізіңіз.",
    modalTitle: "AI Smart-пен бастаңыз",
    modalText: "Бұл демо нұсқа. Жобамыздан хабар алу үшін email қалдырыңыз.",
    close: "Жабу",
  },
};

const plans = [
  {
    id: "free",
    icon: "🌱",
    price: "0",
    featured: false,
  },
  {
    id: "pro",
    icon: "👑",
    price: "9",
    featured: true,
  },
  {
    id: "business",
    icon: "💼",
    price: "29",
    featured: false,
  },
];

const statsData = [
  { icon: "👥", number: "10,000+", index: 0 },
  { icon: "💬", number: "250,000+", index: 1 },
  { icon: "◈", number: "99.9%", index: 2 },
  { icon: "⭐", number: "4.9/5", index: 3 },
];

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("ai-smart-theme");
    return saved ? saved === "dark" : true;
  });

  const [language, setLanguage] = useState(
    () => localStorage.getItem("ai-smart-language") || "uz"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatOpen, setChatOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [showTop, setShowTop] = useState(false);

  const t = translations[language] || translations.uz;

  useEffect(() => {
    localStorage.setItem("ai-smart-theme", darkMode ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("ai-smart-language", language);
  }, [language]);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 450);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setModalOpen(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  const openChat = (quickMessage = "") => {
    setChatOpen(true);
    setMenuOpen(false);

    if (quickMessage) {
      setMessage(quickMessage);
    }
  };

  const sendMessage = (event) => {
    event.preventDefault();

    const cleanMessage = message.trim();

    if (!cleanMessage) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: t.emptyMessage },
      ]);
      return;
    }

    setMessages((prev) => [
      ...prev,
      { type: "user", text: cleanMessage },
      { type: "bot", text: t.demoReply },
    ]);
    setMessage("");
  };

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailStatus("error");
      return;
    }

    setEmailStatus("success");
    setEmail("");
  };

  const selectPlan = (planId) => {
    setSelectedPlan(planId);
    setModalOpen(true);
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <button
            className="brand"
            onClick={() => scrollTo("home")}
            aria-label="AI Smart bosh sahifa"
          >
            <span className="brand-logo">✦</span>
            <span>AI Smart<span className="brand-dot">.</span></span>
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <button className="nav-link active" onClick={() => scrollTo("home")}>
              {t.home}
            </button>
            <button className="nav-link" onClick={() => scrollTo("features")}>
              {t.features}
            </button>
            <button className="nav-link" onClick={() => scrollTo("pricing")}>
              {t.pricing}
            </button>
            <button className="nav-link" onClick={() => scrollTo("about")}>
              {t.about}
            </button>
            <button className="nav-link" onClick={() => scrollTo("contact")}>
              {t.contact}
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Mavzuni almashtirish"
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              <span>{darkMode ? "☾" : "☀"}</span>
              <span className={`toggle-knob ${darkMode ? "knob-dark" : ""}`} />
            </button>

            <label className="language-select">
              <span>🌐</span>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                aria-label="Tilni tanlash"
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
                <option value="kk">KZ</option>
              </select>
            </label>

            <button className="button button-primary nav-cta" onClick={() => openChat()}>
              {t.start} <span>↗</span>
            </button>

            <button
              className={`mobile-menu ${menuOpen ? "mobile-menu-active" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Menyuni ochish"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-spark">✦</span>
                {t.badge}
              </div>

              <h1>
                {t.title1}
                <br />
                <span className="gradient-text">{t.title2}</span>
              </h1>

              <p className="hero-description">{t.description}</p>

              <div className="hero-actions">
                <button
                  className="button button-primary button-large"
                  onClick={() => openChat()}
                >
                  {t.getStarted} <span>→</span>
                </button>
                <button
                  className="button button-secondary button-large"
                  onClick={() => scrollTo("features")}
                >
                  <span className="play-icon">▶</span>
                  {t.howItWorks}
                </button>
              </div>

              <div className="social-proof">
                <div className="avatar-stack">
                  <span className="avatar avatar-a">A</span>
                  <span className="avatar avatar-b">S</span>
                  <span className="avatar avatar-c">D</span>
                  <span className="avatar avatar-d">M</span>
                  <span className="avatar avatar-more">+</span>
                </div>
                <div className="proof-text">
                  <strong>10,000+</strong>
                  <span>{t.trusted}</span>
                </div>
              </div>

              <div className="hero-trust">
                <span>✓ Ro‘yxatdan o‘tish oson</span>
                <span>✓ Bepul boshlash mumkin</span>
              </div>
            </div>

            {/* AI CHAT PREVIEW */}
            <div className="hero-visual">
              <div className="visual-glow" />
              <div className="floating-icon floating-icon-one">✧</div>
              <div className="floating-icon floating-icon-two">✦</div>
              <div className="floating-icon floating-icon-three">⌘</div>

              <div className="ai-window">
                <div className="window-top">
                  <div className="window-brand">
                    <span className="mini-logo">✦</span>
                    <div>
                      <strong>AI Smart</strong>
                      <span>{t.online}</span>
                    </div>
                  </div>
                  <div className="window-controls">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="window-body">
                  <aside className="chat-sidebar">
                    <div className="sidebar-item sidebar-active">✦ <span>Chat</span></div>
                    <button onClick={() => openChat("Menga matn yozishda yordam ber")}>✍ <span>Matn</span></button>
                    <button onClick={() => openChat("Menga yangi g‘oya topib ber")}>💡 <span>G‘oyalar</span></button>
                    <button onClick={() => openChat("Biror matnni tarjima qilishda yordam ber")}>🌐 <span>Tarjima</span></button>
                    <button onClick={() => openChat("Menga o‘qish rejasini tuzib ber")}>📚 <span>O‘qish</span></button>
                  </aside>

                  <div className="chat-preview">
                    <div className="preview-status">
                      <span className="status-dot" /> AI yordamchi tayyor
                    </div>

                    <div className="bot-message">
                      <div className="bot-avatar">✦</div>
                      <div>
                        <strong>{t.greeting}</strong>
                        <p>{t.greetingText}</p>
                      </div>
                    </div>

                    <div className="suggestion-label">Tezkor amallar</div>
                    <div className="suggestion-chips">
                      {t.quickActions.slice(0, 3).map((item) => (
                        <button key={item} onClick={() => openChat(item)}>
                          {item}
                        </button>
                      ))}
                    </div>

                    <form className="preview-input" onSubmit={sendMessage}>
                      <input
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder={t.inputPlaceholder}
                        aria-label={t.inputPlaceholder}
                      />
                      <button type="submit" aria-label="Xabar yuborish">➤</button>
                    </form>
                  </div>
                </div>

                <div className="window-footer">
                  <span className="footer-lock">♧</span>
                  Sizning ijodingiz uchun yaratilgan
                  <span className="footer-spark">✦</span>
                </div>
              </div>

              <div className="floating-card floating-card-top">
                <span className="floating-card-icon">⚡</span>
                <div>
                  <strong>10x tezroq</strong>
                  <span>Vaqtingizni tejang</span>
                </div>
              </div>

              <div className="floating-card floating-card-bottom">
                <span className="floating-card-icon purple">✦</span>
                <div>
                  <strong>AI powered</strong>
                  <span>Cheksiz imkoniyatlar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container hero-bottom">
            <div className="hero-bottom-line" />
            <span>AI bilan yangi imkoniyatlar</span>
            <span className="bottom-spark">✦</span>
            <span>Fikrlaringizni amalga oshiring</span>
            <div className="hero-bottom-line" />
          </div>
        </section>

        {/* FEATURES */}
        <section className="section features-section" id="features">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">{t.featureLabel}</span>
              <h2>{t.featureTitle}</h2>
              <p>{t.featureDescription}</p>
            </div>

            <div className="features-grid">
              {t.featuresList.map((feature, index) => (
                <article
                  className="feature-card"
                  key={feature.title}
                  style={{ "--card-index": index }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  <span className="feature-arrow">↗</span>
                </article>
              ))}
            </div>

            <div className="feature-bottom-note">
              <span className="note-check">✓</span>
              <p>
                <strong>Bir platforma — ko‘plab imkoniyatlar.</strong>{" "}
                O‘zingiz uchun yangi yo‘llarni kashf eting.
              </p>
              <button onClick={() => openChat()}>Sinab ko‘rish ↗</button>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-section">
          <div className="container stats-layout">
            <div className="stats-intro">
              <span className="section-label">{t.statsLabel}</span>
              <h2>{t.statsTitle}</h2>
              <p>{t.statsDescription}</p>
            </div>

            <div className="stats-grid">
              {statsData.map((stat) => (
                <div className="stat-item" key={stat.index}>
                  <div className="stat-icon">{stat.icon}</div>
                  <strong>{stat.number}</strong>
                  <span>{t.stats[stat.index]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section pricing-section" id="pricing">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">{t.pricingLabel}</span>
              <h2>{t.pricingTitle}</h2>
              <p>{t.pricingDescription}</p>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => {
                const name = t[plan.id];
                const description = t[`${plan.id}Desc`];

                return (
                  <article
                    key={plan.id}
                    className={`pricing-card ${plan.featured ? "pricing-featured" : ""}`}
                  >
                    {plan.featured && (
                      <div className="popular-badge">✦ {t.popular}</div>
                    )}

                    <div className="plan-header">
                      <div className="plan-icon">{plan.icon}</div>
                      <div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                      </div>
                    </div>

                    <div className="plan-price">
                      <span className="currency">$</span>
                      <strong>{plan.price}</strong>
                      <span className="price-period">/ {t.month}</span>
                    </div>

                    <ul className="plan-features">
                      {t.plans[
                        plans.findIndex((item) => item.id === plan.id)
                      ].map((item) => (
                        <li key={item}>
                          <span>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`button plan-button ${
                        plan.featured ? "button-primary" : "button-secondary"
                      }`}
                      onClick={() => selectPlan(plan.id)}
                    >
                      {plan.featured ? t.getStarted : t.choose}
                      <span>→</span>
                    </button>
                  </article>
                );
              })}
            </div>

            <p className="pricing-note">
              🔒 Tariflar namuna sifatida ko‘rsatilgan. To‘lov tizimi hozircha ulanmagan.
            </p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section reviews-section" id="about">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">{t.reviewsLabel}</span>
              <h2>{t.reviewsTitle}</h2>
              <p>{t.reviewsDescription}</p>
            </div>

            <div className="reviews-grid">
              {t.reviews.map((review, index) => (
                <article className="review-card" key={review.name}>
                  <div className="review-stars">★★★★★</div>
                  <p className="review-text">“{review.text}”</p>
                  <div className="review-author">
                    <div className={`review-avatar review-avatar-${index}`}>
                      {review.avatar}
                    </div>
                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.role}</span>
                    </div>
                    <span className="verified">✓</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="reviews-rating">
              <span className="rating-stars">★★★★★</span>
              <strong>4.9/5</strong>
              <span>— foydalanuvchilarimizning namunaviy bahosi</span>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="section cta-section" id="contact">
          <div className="container">
            <div className="cta-card">
              <div className="cta-decoration cta-decoration-one">✦</div>
              <div className="cta-decoration cta-decoration-two">✧</div>
              <div className="cta-content">
                <span className="section-label">AI SMART COMMUNITY</span>
                <h2>{t.readyTitle}</h2>
                <p>{t.readyText}</p>

                <form className="subscribe-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setEmailStatus("");
                    }}
                    placeholder={t.emailPlaceholder}
                    aria-label={t.emailPlaceholder}
                  />
                  <button className="button button-primary" type="submit">
                    {t.subscribe} <span>→</span>
                  </button>
                </form>

                {emailStatus === "success" && (
                  <p className="form-message success-message">{t.emailSuccess}</p>
                )}
                {emailStatus === "error" && (
                  <p className="form-message error-message">{t.emailError}</p>
                )}

                <button
                  className="cta-chat-link"
                  onClick={() => openChat()}
                >
                  {t.readyButton} ↗
                </button>
              </div>
              <div className="cta-orb">
                <div className="orb-ring ring-one" />
                <div className="orb-ring ring-two" />
                <div className="orb-center">✦</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <button className="brand" onClick={() => scrollTo("home")}>
                <span className="brand-logo">✦</span>
                <span>AI Smart<span className="brand-dot">.</span></span>
              </button>
              <p>{t.footerText}</p>
              <div className="footer-socials">
                <a href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram">✈</a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
                <a href="https://youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">⌘</a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Platforma</h4>
              <button onClick={() => scrollTo("features")}>{t.features}</button>
              <button onClick={() => scrollTo("pricing")}>{t.pricing}</button>
              <button onClick={() => openChat()}>{t.howItWorks}</button>
            </div>

            <div className="footer-column">
              <h4>Kompaniya</h4>
              <button onClick={() => scrollTo("about")}>{t.about}</button>
              <button onClick={() => scrollTo("contact")}>{t.contact}</button>
              <button onClick={() => setModalOpen(true)}>Hamkorlik</button>
            </div>

            <div className="footer-column footer-newsletter">
              <h4>Yangiliklardan xabardor bo‘ling</h4>
              <p>Yangi imkoniyatlar haqida birinchilardan bo‘lib bilib oling.</p>
              <button className="footer-subscribe" onClick={() => scrollTo("contact")}>
                Email qoldirish <span>→</span>
              </button>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 AI Smart. {t.rights}</span>
            <span className="footer-made">Made with <span>♥</span> and AI</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Yuqoriga ↑
            </button>
          </div>
        </div>
      </footer>

      {/* CHAT WINDOW */}
      {chatOpen && (
        <div className="chat-widget">
          <div className="chat-widget-header">
            <div className="chat-widget-brand">
              <div className="chat-widget-logo">✦</div>
              <div>
                <strong>{t.chatTitle}</strong>
                <span><i /> {t.online}</span>
              </div>
            </div>
            <button
              className="chat-close"
              onClick={() => setChatOpen(false)}
              aria-label="Chatni yopish"
            >
              ×
            </button>
          </div>

          <div className="chat-widget-body">
            <div className="widget-greeting">
              <div className="bot-avatar">✦</div>
              <div>
                <strong>{t.greeting}</strong>
                <p>{t.greetingText}</p>
              </div>
            </div>

            {messages.map((item, index) => (
              <div
                key={`${index}-${item.type}`}
                className={`widget-message ${
                  item.type === "user" ? "user-message" : "bot-response"
                }`}
              >
                {item.text}
              </div>
            ))}

            <div className="quick-actions">
              {t.quickActions.map((item) => (
                <button key={item} onClick={() => setMessage(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="chat-demo-notice">{t.demoNotice}</div>

          <form className="chat-widget-form" onSubmit={sendMessage}>
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={t.inputPlaceholder}
              aria-label={t.inputPlaceholder}
            />
            <button type="submit" aria-label="Xabar yuborish">➤</button>
          </form>
        </div>
      )}

      <button
        className={`floating-chat-button ${chatOpen ? "chat-button-hidden" : ""}`}
        onClick={() => openChat()}
        aria-label="AI chatni ochish"
      >
        <span className="chat-button-spark">✦</span>
        <span className="chat-button-text">AI Chat</span>
        <span className="chat-button-pulse" />
      </button>

      {showTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Yuqoriga qaytish"
        >
          ↑
        </button>
      )}

      {/* MODAL */}
      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setModalOpen(false)}
          role="presentation"
        >
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setModalOpen(false)}
              aria-label={t.close}
            >
              ×
            </button>
            <div className="modal-logo">✦</div>
            <span className="section-label">AI SMART</span>
            <h2 id="modal-title">{t.modalTitle}</h2>
            <p>{t.modalText}</p>
            <div className="selected-plan">
              <span>Tanlangan tarif</span>
              <strong>{t[selectedPlan]}</strong>
              <span>
                ${plans.find((item) => item.id === selectedPlan)?.price} / {t.month}
              </span>
            </div>
            <button
              className="button button-primary modal-main-button"
              onClick={() => {
                setModalOpen(false);
                scrollTo("contact");
              }}
            >
              {t.contact} <span>→</span>
            </button>
            <button
              className="modal-cancel"
              onClick={() => setModalOpen(false)}
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;