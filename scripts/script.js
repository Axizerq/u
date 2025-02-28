const translations = {
    en: {
        about: "About Us",
        aid: "Humanitarian Aid",
        support: "Support for Refugees",
        involved: "Get Involved",
        news: "News & Events",
        missionTitle: "Our Mission",
        missionText: "Housing search Employment Obtaining a driver's license Popularization of Ukrainian culture",
        aidTitle: "Humanitarian Aid",
        aidText: "Test",
        supportTitle: "Support for Refugees",
        service1: "1. Test",
        service2: "2. Test",
        details: "Details",
        volunteer: "Volunteer",
        volunteerText: "Join our team and make a difference.",
        partner: "Become a Partner",
        partnerText: "Collaborate with us to create impact.",
        stayInformed: "Stay Informed",
        stayInformedText: "Get the latest updates and news.",
        learnMore: "Learn More",
        aboutUs: "About Us",
        missionLink: "Our Mission",
        teamLink: "Our Team",
        careersLink: "Careers",
        ourWork: "Our Work",
        crisisLink: "Crisis Response",
        educationLink: "Education",
        healthLink: "Health",
        getInvolvedFooter: "Get Involved",
        donateLink: "Donate",
        volunteerLink: "Volunteer",
        partnerLink: "Partner",
        followUs: "Follow Us",
        howWeHelp: "How We Help",
        reportsLink: "Reports & Results",
        housingLink: "Housing",
        licenseLink: "Driver’s License",
        employmentLink: "Employment & Career",
        languageLink: "English Language",
        wellnessLink: "Youth Wellness Program",
        assistanceLink: "How to Get Assistance",
        newsletterLink: "Sign up for Newsletter",
        eventsLink: "Upcoming Events",
        blogLink: "Blog",
        contactLink: "Contact Us",
    },
    uk: {
        about: "Про нас",
        aid: "Гуманітарна допомога",
        support: "Підтримка біженців",
        involved: "Долучитися",
        news: "Новини та події",
        missionTitle: "Наша місія",
        missionText: "Тестовий текст",
        aidTitle: "Гуманітарна допомога",
        aidText: "Тест",
        supportTitle: "Підтримка біженців",
        service1: "1. Тест",
        service2: "2. Тест",
        details: "Детальніше",
        volunteer: "Волонтер",
        volunteerText: "Приєднуйтесь до нашої команди.",
        partner: "Стати партнером",
        partnerText: "Співпрацюйте з нами.",
        stayInformed: "Будьте в курсі",
        stayInformedText: "Отримуйте останні новини.",
        learnMore: "Дізнатися більше",
        aboutUs: "Про нас",
        missionLink: "Наша місія",
        teamLink: "Наша команда",
        careersLink: "Кар’єра",
        ourWork: "Наша робота",
        crisisLink: "Реагування на кризи",
        educationLink: "Освіта",
        healthLink: "Здоров’я",
        getInvolvedFooter: "Долучитися",
        donateLink: "Пожертвувати",
        volunteerLink: "Волонтер",
        partnerLink: "Партнер",
        followUs: "Слідкуйте за нами",
        howWeHelp: "Як ми допомагаємо",
        reportsLink: "Звіти та результати",
        housingLink: "Житло",
        licenseLink: "Посвідчення водія",
        employmentLink: "Робота та кар’єра",
        languageLink: "Англійська мова",
        wellnessLink: "Програма для молоді",
        assistanceLink: "Як отримати допомогу",
        newsletterLink: "Підписатися на розсилку",
        eventsLink: "Майбутні події",
        blogLink: "Блог",
        contactLink: "Наші контакти",
    },
    ru: {
        about: "О нас",
        aid: "Гуманитарная помощь",
        support: "Поддержка беженцев",
        involved: "Присоединиться",
        news: "Новости и события",
        missionTitle: "Наша миссия",
        missionText: "Тестовый текст",
        aidTitle: "Гуманитарная помощь",
        aidText: "Тест",
        supportTitle: "Поддержка беженцев",
        service1: "1. Тест",
        service2: "2. Тест",
        details: "Подробнее",
        volunteer: "Волонтер",
        volunteerText: "Присоединяйтесь к нашей команде.",
        partner: "Стать партнером",
        partnerText: "Сотрудничайте с нами.",
        stayInformed: "Будьте в курсе",
        stayInformedText: "Получайте последние новости.",
        learnMore: "Узнать больше",
        aboutUs: "О нас",
        missionLink: "Наша миссия",
        teamLink: "Наша команда",
        careersLink: "Карьера",
        ourWork: "Наша работа",
        crisisLink: "Реагирование на кризисы",
        educationLink: "Образование",
        healthLink: "Здоровье",
        getInvolvedFooter: "Присоединиться",
        donateLink: "Пожертвовать",
        volunteerLink: "Волонтерство",
        partnerLink: "Партнерство",
        followUs: "Следите за нами",
        howWeHelp: "Как мы помогаем",
        reportsLink: "Отчеты и результаты",
        housingLink: "Жилье",
        licenseLink: "Водительские права",
        employmentLink: "Работа и карьера",
        languageLink: "Английский язык",
        wellnessLink: "Программа для молодежи",
        assistanceLink: "Как получить помощь",
        newsletterLink: "Подписаться на рассылку",
        eventsLink: "Предстоящие события",
        blogLink: "Блог",
        contactLink: "Наши контакты",
    },
};

const languageSwitcher = document.querySelector(".language-switcher");
const currentLangButton = languageSwitcher.querySelector("button");
const langList = languageSwitcher.querySelector("ul");

const menuItems = document.querySelectorAll("nav ul li");
const overlay = document.getElementById("overlay");

let currentLang = "en";

function updateTexts(lang) {
    document.querySelectorAll("[data-lang]").forEach((element) => {
        const key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    currentLangButton.textContent = lang.toUpperCase();
}

langList.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
        const lang = item.getAttribute("data-lang");
        currentLang = lang;
        updateTexts(lang);
    });
});

// Initialize with English
updateTexts(currentLang);


menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        overlay.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
        overlay.classList.remove("active");
    });
});


// Функция для проверки видимости элемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
    );
}

// Функция для обработки прокрутки страницы
function handleScroll() {
    const aidImage = document.querySelector('.aid img');
    const supportImage = document.querySelector('.support img');

    if (isElementInViewport(aidImage)) {
        aidImage.classList.add('slide-in');
    }

    if (isElementInViewport(supportImage)) {
        supportImage.classList.add('slide-in');
    }
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', handleScroll);

// Вызываем handleScroll при загрузке страницы, чтобы проверить видимость элементов
window.addEventListener('load', handleScroll);