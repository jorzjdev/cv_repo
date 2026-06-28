/* ============================================================
   Контент (RU/EN) + переключение языка и темы
   Единственный источник правды по тексту — объект CONTENT.
   ============================================================ */

const CONTENT = {
  ru: {
    name: "Георгий Шипунов",
    role: "Senior Android-разработчик",
    location: "Тбилиси, Грузия · готов к релокации и удалённой работе",
    downloadCv: "Скачать резюме (PDF)",

    aboutTitle: "О себе",
    aboutText:
      "Senior Android-разработчик с опытом более 6 лет в создании высокопроизводительных мобильных приложений и систем реального времени. Глубокая экспертиза в Kotlin, Coroutines и масштабируемых архитектурах с фокусом на оптимизацию производительности, фоновую обработку и работу с данными при низких задержках. Опыт разработки компонентов уровня SDK, повышения стабильности приложений (снижение ANR и крашей) и проектирования эффективных систем для высоконагруженных сред.",

    achievementsTitle: "Ключевые достижения",
    achievements: [
      "Повысил производительность и отзывчивость систем реального времени под высокой нагрузкой",
      "Снизил задержки интерфейса и оптимизировал рендеринг на сложных экранах",
      "Спроектировал архитектуру SDK, используемую в приложениях с более чем 500 000 загрузок",
      "Построил масштабируемые системы обмена сообщениями и обработки данных",
      "Руководил процессом разработки и участвовал в принятии архитектурных решений",
    ],

    experienceTitle: "Опыт работы",
    educationTitle: "Образование",
    skillsTitle: "Технические навыки",
    languagesTitle: "Языки",

    backToTop: "↑ Наверх",
    footerNote: "© 2026 Георгий Шипунов",

    languages: [
      { name: "Русский", level: "родной" },
      { name: "Английский", level: "B2" },
    ],

    experience: [
      {
        role: "Senior Android-разработчик",
        company: "DION",
        period: "2024 — настоящее время",
        bullets: [
          "Руководил разработкой модуля чата реального времени с аудиторией более 30 000 DAU, уделяя особое внимание масштабируемости и обновлениям с низкой задержкой",
          "Реализовал асинхронные потоки данных на Kotlin Coroutines и Flow для эффективной обработки данных в реальном времени",
          "Спроектировал и разработал безопасное шифрованное хранилище для файлов и конфиденциальных данных",
          "Улучшил производительность рендеринга сложного HTML-контента (WebView), устранив несоответствия в интерфейсе",
          "Работал с фоновой обработкой и компонентами, учитывающими жизненный цикл, для стабильной работы с данными",
          "Участвовал в межпроектных архитектурных решениях и проектировании систем",
          "Применял AI-инструменты (ChatGPT, Claude, GitHub Copilot) для ускорения разработки: генерация шаблонного кода, рефакторинг, написание тестов и закрытие рутинных задач",
        ],
      },
      {
        role: "Senior Android-разработчик",
        company: "SberDevices (мессенджер SaluteJazz)",
        period: "2021 — 2024",
        bullets: [
          "Разработал функции обмена сообщениями в реальном времени с использованием WebSocket и gRPC",
          "Спроектировал архитектуру и API уровня SDK для интеграции в сторонние приложения (более 500 000 загрузок)",
          "Оптимизировал производительность чата для высоконагруженных сценариев, улучшив плавность прокрутки и отзывчивость",
          "Снизил потребление памяти и повысил эффективность рендеринга интерфейса на экранах с большим количеством сообщений",
          "Реализовал системы локального хранения и управления файлами для эффективной работы с медиа",
          "Разработал сложные UI-компоненты с акцентом на производительность и плавный пользовательский опыт",
          "Участвовал в проектировании систем и принятии архитектурных решений",
        ],
      },
      {
        role: "Middle Android-разработчик",
        company: "МойДом",
        period: "2021",
        bullets: [
          "Разработал мобильную платформу для управления жилищно-коммунальными услугами и операционными процессами",
          "Реализовал эффективную работу с данными и обновление интерфейса для управления задачами и заявками",
        ],
      },
      {
        role: "Junior / Middle Android-разработчик",
        company: "vvdev",
        period: "2019 — 2021",
        bullets: [
          "Разработал несколько Android-приложений с нуля в разных предметных областях",
          "Работал с Bluetooth, NFC и интеграциями на уровне устройств",
          "Построил кассовую систему, используемую в 400 магазинах и обслуживающую более 4 млн клиентов",
          "Получил опыт оптимизации производительности и полного цикла мобильной разработки",
        ],
      },
    ],

    education: [
      {
        role: "Бакалавр, «Вычислительная техника»",
        company: "НГТУ им. Р.Е. Алексеева",
        period: "2017 — 2021",
        bullets: [],
      },
      {
        role: "Курс «Android-разработчик»",
        company: "OTUS",
        period: "2022 — 2023",
        bullets: [],
      },
    ],

    skills: [
      { label: "Языки", items: ["Kotlin", "Java"] },
      { label: "Android", items: ["Android SDK", "Jetpack Compose", "Custom Views"] },
      { label: "Архитектура", items: ["MVVM", "MVI", "Clean Architecture", "Модуляризация"] },
      { label: "Многопоточность", items: ["Kotlin Coroutines", "Flow"] },
      { label: "Сеть", items: ["REST", "WebSocket", "gRPC"] },
      { label: "Производительность", items: ["Оптимизация UI", "Управление памятью", "Рендеринг"] },
      { label: "Хранение данных", items: ["SQL", "Локальное кэширование", "Файловое хранилище"] },
      { label: "AI-инструменты", items: ["ChatGPT", "Claude", "GitHub Copilot"] },
      { label: "Прочее", items: ["Firebase Cloud Messaging", "Git"] },
    ],
  },

  en: {
    name: "Georgy Shipunov",
    role: "Senior Android Developer",
    location: "Tbilisi, Georgia · open to relocation and remote work",
    downloadCv: "Download CV (PDF)",

    aboutTitle: "About",
    aboutText:
      "Senior Android developer with 6+ years of experience building high-performance mobile applications and real-time systems. Deep expertise in Kotlin, Coroutines and scalable architectures, with a focus on performance optimization, background processing and low-latency data handling. Experienced in building SDK-level components, improving app stability (reducing ANRs and crashes) and designing efficient systems for high-load environments.",

    achievementsTitle: "Key achievements",
    achievements: [
      "Improved performance and responsiveness of real-time systems under heavy load",
      "Reduced UI latency and optimized rendering on complex screens",
      "Designed an SDK architecture used in apps with 500,000+ downloads",
      "Built scalable messaging and data-processing systems",
      "Led the development process and contributed to architectural decisions",
    ],

    experienceTitle: "Experience",
    educationTitle: "Education",
    skillsTitle: "Technical skills",
    languagesTitle: "Languages",

    backToTop: "↑ Back to top",
    footerNote: "© 2026 Georgy Shipunov",

    languages: [
      { name: "Russian", level: "native" },
      { name: "English", level: "B2" },
    ],

    experience: [
      {
        role: "Senior Android Developer",
        company: "DION",
        period: "2024 — present",
        bullets: [
          "Led development of a real-time chat module with 30,000+ DAU, focusing on scalability and low-latency updates",
          "Implemented asynchronous data streams with Kotlin Coroutines and Flow for efficient real-time data processing",
          "Designed and built secure encrypted storage for files and sensitive data",
          "Improved rendering performance of complex HTML content (WebView), eliminating UI inconsistencies",
          "Worked with background processing and lifecycle-aware components for stable data handling",
          "Contributed to cross-project architectural decisions and system design",
          "Used AI tools (ChatGPT, Claude, GitHub Copilot) to speed up development: boilerplate generation, refactoring, writing tests and handling routine tasks",
        ],
      },
      {
        role: "Senior Android Developer",
        company: "SberDevices (SaluteJazz messenger)",
        period: "2021 — 2024",
        bullets: [
          "Developed real-time messaging features using WebSocket and gRPC",
          "Designed SDK-level architecture and APIs for integration into third-party apps (500,000+ downloads)",
          "Optimized chat performance for high-load scenarios, improving scroll smoothness and responsiveness",
          "Reduced memory consumption and improved UI rendering efficiency on message-heavy screens",
          "Implemented local storage and file-management systems for efficient media handling",
          "Built complex UI components focused on performance and smooth user experience",
          "Contributed to system design and architectural decisions",
        ],
      },
      {
        role: "Middle Android Developer",
        company: "MoyDom",
        period: "2021",
        bullets: [
          "Developed a mobile platform for managing housing and utility services and operational processes",
          "Implemented efficient data handling and UI updates for task and request management",
        ],
      },
      {
        role: "Junior / Middle Android Developer",
        company: "vvdev",
        period: "2019 — 2021",
        bullets: [
          "Built several Android apps from scratch across different domains",
          "Worked with Bluetooth, NFC and device-level integrations",
          "Built a point-of-sale system used in 400 stores serving 4M+ customers",
          "Gained experience in performance optimization and the full mobile development cycle",
        ],
      },
    ],

    education: [
      {
        role: "B.Sc., Computer Engineering",
        company: "Nizhny Novgorod State Technical University (NNSTU)",
        period: "2017 — 2021",
        bullets: [],
      },
      {
        role: "Android Developer course",
        company: "OTUS",
        period: "2022 — 2023",
        bullets: [],
      },
    ],

    skills: [
      { label: "Languages", items: ["Kotlin", "Java"] },
      { label: "Android", items: ["Android SDK", "Jetpack Compose", "Custom Views"] },
      { label: "Architecture", items: ["MVVM", "MVI", "Clean Architecture", "Modularization"] },
      { label: "Concurrency", items: ["Kotlin Coroutines", "Flow"] },
      { label: "Networking", items: ["REST", "WebSocket", "gRPC"] },
      { label: "Performance", items: ["UI optimization", "Memory management", "Rendering"] },
      { label: "Data storage", items: ["SQL", "Local caching", "File storage"] },
      { label: "AI tools", items: ["ChatGPT", "Claude", "GitHub Copilot"] },
      { label: "Other", items: ["Firebase Cloud Messaging", "Git"] },
    ],
  },
};

/* Метрики — одинаковы для обоих языков, подписи переводятся */
const METRICS = {
  ru: [
    { num: "6+", label: "лет опыта" },
    { num: "500K+", label: "загрузок SDK" },
    { num: "30K+", label: "DAU чата" },
  ],
  en: [
    { num: "6+", label: "years of experience" },
    { num: "500K+", label: "SDK downloads" },
    { num: "30K+", label: "chat DAU" },
  ],
};

/* Контакты — общие для обоих языков. Замените ссылки на свои. */
const CONTACTS = [
  { label: "Email", icon: "✉", href: "mailto:gerasimshogd@gmail.com" },
  { label: "+7 987 392 8547", icon: "☎", href: "tel:+79873928547" },
  { label: "Telegram", icon: "✈", href: "https://t.me/jorzj" },
  { label: "GitHub", icon: "⌥", href: "https://github.com/jorzj" },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/jorzj" },
  { label: "LeetCode", icon: "⌘", href: "https://leetcode.com/gerasimshogd/" },
];

/* ---------- Рендеринг ---------- */

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function renderContacts(container) {
  container.innerHTML = "";
  CONTACTS.forEach((c) => {
    const a = el("a", "chip");
    a.href = c.href;
    if (c.href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    a.setAttribute("aria-label", c.label);
    a.append(el("span", null, c.icon), el("span", null, c.label));
    container.appendChild(a);
  });
}

function renderJobs(container, jobs) {
  container.innerHTML = "";
  jobs.forEach((job) => {
    const card = el("article", "job");
    const head = el("div", "job__head");
    head.append(el("h3", "job__role", job.role), el("span", "job__period", job.period));
    card.append(head, el("p", "job__company", job.company));
    if (job.bullets && job.bullets.length) {
      const ul = el("ul", "job__bullets");
      job.bullets.forEach((b) => ul.appendChild(el("li", null, b)));
      card.appendChild(ul);
    }
    container.appendChild(card);
  });
}

function renderList(container, items) {
  container.innerHTML = "";
  items.forEach((t) => container.appendChild(el("li", null, t)));
}

function renderMetrics(container, metrics) {
  container.innerHTML = "";
  metrics.forEach((m) => {
    const box = el("div", "metric");
    box.append(el("div", "metric__num", m.num), el("div", "metric__label", m.label));
    container.appendChild(box);
  });
}

function renderSkills(container, groups) {
  container.innerHTML = "";
  groups.forEach((g) => {
    const wrap = el("div", "skill-group");
    wrap.appendChild(el("div", "skill-group__label", g.label));
    const tags = el("div", "tags");
    g.items.forEach((i) => tags.appendChild(el("span", "tag", i)));
    wrap.appendChild(tags);
    container.appendChild(wrap);
  });
}

function renderLanguages(container, langs) {
  container.innerHTML = "";
  langs.forEach((l) => {
    const li = el("li");
    li.append(el("span", "lang-name", l.name), el("span", "lang-level", l.level));
    container.appendChild(li);
  });
}

/* ---------- Применение языка ---------- */

function applyLanguage(lang) {
  const data = CONTENT[lang];
  document.documentElement.lang = lang;

  // Простые текстовые узлы
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (data[key] != null) node.textContent = data[key];
  });

  // Динамические блоки
  renderMetrics(document.getElementById("metrics"), METRICS[lang]);
  renderList(document.getElementById("achievements"), data.achievements);
  renderJobs(document.getElementById("experience"), data.experience);
  renderJobs(document.getElementById("education"), data.education);
  renderSkills(document.getElementById("skills"), data.skills);
  renderLanguages(document.getElementById("languages"), data.languages);

  // Состояние кнопок переключателя
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.langBtn === lang));
  });

  localStorage.setItem("lang", lang);
}

/* ---------- Тема ---------- */

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

/* ---------- Инициализация ---------- */

function init() {
  // Контакты в шапке и подвале
  renderContacts(document.getElementById("contacts"));
  renderContacts(document.getElementById("contacts-footer"));

  // Язык: localStorage → язык браузера → ru
  const savedLang = localStorage.getItem("lang");
  const browserLang = (navigator.language || "ru").toLowerCase().startsWith("ru") ? "ru" : "en";
  applyLanguage(savedLang || browserLang);

  // Тема: localStorage → системная → light
  const savedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (systemDark ? "dark" : "light"));

  // Обработчики
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.langBtn));
  });
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

document.addEventListener("DOMContentLoaded", init);
