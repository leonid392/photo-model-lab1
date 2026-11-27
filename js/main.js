"use strict";

const defaultSpecialists = [
    {
        id: 1, name: "Алексей Смирнов", profession: "Фотограф", city: "Уфа",
        hourlyRate: 3000, reviewsCount: 64, experienceYears: 5, worksRemotely: false,
        specializations: ["портретная", "семейная съёмка"],
        anchor: "alexey-smirnov",
        profileUrl: "detail.html",
        image: { src: "images/photographers/alexey.webp", alt: "Фотограф Алексей Смирнов" }
    },
    {
        id: 2, name: "Мария Волкова", profession: "Фотограф", city: "Уфа",
        hourlyRate: 4000, reviewsCount: 87, experienceYears: 7, worksRemotely: false,
        specializations: ["свадебная", "репортажная съёмка"],
        anchor: "maria-volkova",
        image: { src: "images/photographers/maria.webp", alt: "Фотограф Мария Волкова" }
    },
    {
        id: 3, name: "Дмитрий Орлов", profession: "Фотограф", city: "Уфа",
        hourlyRate: 2500, reviewsCount: 39, experienceYears: 4, worksRemotely: false,
        specializations: ["предметная", "рекламная съёмка"],
        anchor: "dmitry-orlov",
        image: { src: "images/photographers/dmitry.webp", alt: "Фотограф Дмитрий Орлов" }
    },
    {
        id: 4, name: "Анна Соколова", profession: "Ретушёр", city: "Уфа",
        hourlyRate: 2000, reviewsCount: 51, experienceYears: 3, worksRemotely: true,
        specializations: ["портретная ретушь", "обработка рекламных снимков"],
        anchor: "anna-sokolova",
        image: { src: "images/anna.jpg", alt: "Анна Соколова в фотостудии" }
    },
    {
        id: 5, name: "Кирилл Егоров", profession: "Фотограф", city: "Уфа",
        hourlyRate: 3600, reviewsCount: 73, experienceYears: 6, worksRemotely: false,
        specializations: ["портретная", "деловая съёмка"],
        image: { src: "images/photographers/kirill.webp", alt: "Фотограф Кирилл Егоров" }
    },
    {
        id: 6, name: "Дарья Крылова", profession: "Фотограф", city: "Уфа",
        hourlyRate: 3800, reviewsCount: 67, experienceYears: 5, worksRemotely: false,
        specializations: ["детская", "семейная съёмка"],
        image: { src: "images/photographers/daria.webp", alt: "Фотограф Дарья Крылова" }
    },
    {
        id: 7, name: "Павел Сафин", profession: "Фотограф", city: "Уфа",
        hourlyRate: 2800, reviewsCount: 29, experienceYears: 3, worksRemotely: false,
        specializations: ["прогулочная", "репортажная съёмка"],
        image: { src: "images/photographers/pavel.webp", alt: "Фотограф Павел Сафин" }
    },
    {
        id: 8, name: "Эльмира Валеева", profession: "Фотограф", city: "Уфа",
        hourlyRate: 4200, reviewsCount: 104, experienceYears: 8, worksRemotely: false,
        specializations: ["свадебная", "семейная съёмка"],
        image: { src: "images/photographers/elmira.webp", alt: "Фотограф Эльмира Валеева" }
    },
    {
        id: 9, name: "Рустем Ахметов", profession: "Фотограф", city: "Уфа",
        hourlyRate: 4600, reviewsCount: 96, experienceYears: 9, worksRemotely: false,
        specializations: ["свадебная", "портретная съёмка"],
        image: { src: "images/photographers/rustem.webp", alt: "Фотограф Рустем Ахметов" }
    },
    {
        id: 10, name: "Елена Миронова", profession: "Ретушёр", city: "Казань",
        hourlyRate: 2400, reviewsCount: 142, experienceYears: 8, worksRemotely: true,
        specializations: ["студийная ретушь", "цветокоррекция"],
        image: { src: "images/retouchers/elena.webp", alt: "Ретушёр Елена Миронова" }
    },
    {
        id: 11, name: "Алина Юсупова", profession: "Ретушёр", city: "Уфа",
        hourlyRate: 1800, reviewsCount: 45, experienceYears: 4, worksRemotely: true,
        specializations: ["ретушь портретов", "цветокоррекция"],
        image: { src: "images/retouchers/alina.webp", alt: "Ретушёр Алина Юсупова" }
    },
    {
        id: 12, name: "Тимур Давлетов", profession: "Ретушёр", city: "Казань",
        hourlyRate: 2200, reviewsCount: 62, experienceYears: 5, worksRemotely: true,
        specializations: ["обработка предметных снимков", "обтравка"],
        image: { src: "images/retouchers/timur.webp", alt: "Ретушёр Тимур Давлетов" }
    },
    {
        id: 13, name: "Виктория Белова", profession: "Ретушёр", city: "Уфа",
        hourlyRate: 2100, reviewsCount: 78, experienceYears: 6, worksRemotely: true,
        specializations: ["обработка семейных фотографий", "цветокоррекция"],
        image: { src: "images/retouchers/victoria.webp", alt: "Ретушёр Виктория Белова" }
    },
    {
        id: 14, name: "Илья Котов", profession: "Фотограф", city: "Уфа",
        hourlyRate: 3200, reviewsCount: 36, experienceYears: 3, worksRemotely: false,
        specializations: ["портретная", "предметная съёмка"],
        image: { src: "images/photographers/ilya.webp", alt: "Фотограф Илья Котов" }
    },
    {
        id: 15, name: "Гульназ Исхакова", profession: "Ретушёр", city: "Уфа",
        hourlyRate: 2600, reviewsCount: 112, experienceYears: 7, worksRemotely: true,
        specializations: ["рекламная ретушь", "цветокоррекция"],
        image: { src: "images/retouchers/gulnaz.webp", alt: "Ретушёр Гульназ Исхакова" }
    }
];

const numberFormat = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });
const storageKeys = {
    specialists: "photobirzha.specialists",
    shortlist: "photobirzha.shortlist"
};

function loadList(key, fallback) {
    try {
        const saved = JSON.parse(localStorage.getItem(key));
        return Array.isArray(saved) ? saved : fallback;
    } catch {
        return fallback;
    }
}

function saveList(key, items) {
    try {
        localStorage.setItem(key, JSON.stringify(items));
        return true;
    } catch {
        return false;
    }
}

let specialists = loadList(storageKeys.specialists, defaultSpecialists);
let shortlist = loadList(storageKeys.shortlist, []);

function updateShortlistButton(button, isSaved) {
    button.textContent = isSaved ? "Убрать из шорт-листа" : "Добавить в шорт-лист";
    button.classList.toggle("button_secondary", isSaved);
}

class Specialist {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.profession = data.profession;
        this.city = data.city;
        this.hourlyRate = data.hourlyRate;
        this.reviewsCount = data.reviewsCount;
        this.experienceYears = data.experienceYears;
        this.worksRemotely = data.worksRemotely;
        this.specializations = data.specializations;
        this.image = data.image;
        this.anchor = data.anchor;
        this.profileUrl = data.profileUrl;
    }

    render(isSaved) {
        const card = document.createElement("article");
        card.className = "page__card card";
        card.dataset.id = this.id;
        card.id = this.anchor ?? `specialist-${this.id}`;

        const title = document.createElement("h3");
        title.className = "card__title";
        title.textContent = this.name;

        const image = document.createElement("img");
        image.className = "card__image";
        image.setAttribute("src", this.image.src);
        image.setAttribute("alt", this.image.alt);
        image.setAttribute("width", "300");
        image.setAttribute("height", "200");
        image.setAttribute("loading", "lazy");

        const subtitle = document.createElement("p");
        subtitle.className = "card__text";
        subtitle.textContent = `${this.profession} · ${this.city}`;

        const details = document.createElement("ul");
        details.className = "card__list";
        const format = this.worksRemotely ? "дистанционно" : "очно";
        const fields = [
            `Специализация: ${this.specializations.join(", ")}`,
            `Опыт работы (лет): ${this.experienceYears}`,
            `Ставка: ${numberFormat.format(this.hourlyRate)} ₽/ч`,
            `Отзывы: ${this.reviewsCount}`,
            `Формат работы: ${format}`
        ];
        fields.forEach((text) => {
            const item = document.createElement("li");
            item.className = "card__item";
            item.textContent = text;
            details.append(item);
        });

        const actions = document.createElement("div");
        actions.className = "card__actions";
        const link = document.createElement("a");
        link.className = "card__link";
        link.setAttribute("href", this.profileUrl ?? "checkout.html");
        link.textContent = this.profileUrl ? "Подробнее о фотографе" : "Перейти к заявке";
        actions.append(link);

        if (this.profession === "Фотограф") {
            const reviewLink = document.createElement("a");
            reviewLink.className = "card__link";
            reviewLink.href = "catalog.html?photographer=" + this.id + "#review-section";
            reviewLink.dataset.action = "review";
            reviewLink.textContent = "Оставить отзыв";
            actions.append(reviewLink);
        }

        const shortlistButton = document.createElement("button");
        shortlistButton.type = "button";
        shortlistButton.className = "button";
        shortlistButton.dataset.action = "shortlist";
        updateShortlistButton(shortlistButton, isSaved);
        actions.append(shortlistButton);

        card.append(title, image, subtitle, details, actions);
        return card;
    }
}

function renderCatalog(container, data, shortlistIds) {
    container.replaceChildren();
    data.forEach((item) => {
        const specialist = new Specialist(item);
        container.append(specialist.render(shortlistIds.has(item.id)));
    });
}

function analyzeSpecialists(data, city) {
    const photographers = data.filter((person) => (
        person.profession === "Фотограф" && person.city === city
    ));
    const totalRate = photographers.reduce((total, person) => total + person.hourlyRate, 0);
    const averageRate = photographers.length ? totalRate / photographers.length : null;

    const mostReviewed = data.reduce((best, person) => (
        best === null || person.reviewsCount > best.reviewsCount ? person : best
    ), null);

    return { averageRate, mostReviewed };
}

const catalog = document.querySelector("#catalog-container");
const shortlistContainer = document.querySelector("#shortlist-container");
const shortlistStatus = document.querySelector("#shortlist-status");
const shortlistEmpty = document.querySelector("#shortlist-empty");
const reviewForm = document.querySelector("#review-form");
const photographerSelect = document.querySelector("#review-photographer");
const reviewStatus = document.querySelector("#review-status");
const reviewList = document.querySelector("#review-list");
const reviewListTitle = document.querySelector("#review-list-title");
const reviewsEmpty = document.querySelector("#reviews-empty");

function renderCards() {
    const shortlistIds = new Set(shortlist.map((person) => person.id));
    if (catalog) {
        renderCatalog(catalog, specialists, shortlistIds);
    }
    if (shortlistContainer) {
        const currentProfiles = new Map(specialists.map((person) => [person.id, person]));
        const profiles = shortlist.map((saved) => currentProfiles.get(saved.id) ?? saved);
        renderCatalog(shortlistContainer, profiles, shortlistIds);
        shortlistEmpty.hidden = profiles.length !== 0;
    }
}

function renderReviews() {
    const photographer = specialists.find((person) => person.id === Number(photographerSelect.value));
    reviewListTitle.textContent = photographer ? "Отзывы — " + photographer.name : "Отзывы";
    const comments = photographer?.comments ?? [];
    reviewList.replaceChildren();
    reviewsEmpty.hidden = comments.length !== 0;

    comments.forEach(({ author, text }) => {
        const item = document.createElement("li");
        item.className = "section__item";
        const name = document.createElement("strong");
        name.textContent = author;
        const content = document.createElement("p");
        content.className = "section__text";
        content.textContent = text;
        item.append(name, content);
        reviewList.append(item);
    });
}

function handleCardClick(event) {
    const action = event.target.closest("[data-action]");
    if (!action || !event.currentTarget.contains(action)) {
        return;
    }

    const id = Number(action.closest(".card[data-id]")?.dataset.id);
    if (action.dataset.action === "review" && reviewForm) {
        event.preventDefault();
        photographerSelect.value = String(id);
        reviewStatus.textContent = "";
        renderReviews();
        photographerSelect.focus();
        return;
    }
    if (action.dataset.action !== "shortlist") {
        return;
    }

    const current = loadList(storageKeys.shortlist, shortlist);
    const saved = current.find((person) => person.id === id);
    const person = saved ?? specialists.find((entry) => entry.id === id);
    if (!person) {
        return;
    }
    const next = saved ? current.filter((entry) => entry.id !== id) : [...current, person];
    if (!saveList(storageKeys.shortlist, next)) {
        shortlistStatus.textContent = "Не удалось сохранить шорт-лист. Проверьте настройки браузера.";
        return;
    }

    shortlist = next;
    shortlistStatus.textContent = saved
        ? person.name + " — профиль убран из шорт-листа."
        : person.name + " — профиль добавлен в шорт-лист.";
    if (catalog) {
        updateShortlistButton(action, !saved);
    } else {
        renderCards();
        const nextButton = shortlistContainer.querySelector("[data-action=shortlist]");
        (nextButton ?? document.querySelector('.section__link[href="catalog.html"]')).focus();
    }
}

function handleReviewSubmit(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const specialistId = Number(fields.get("specialistId"));
    const author = String(fields.get("author") ?? "").trim();
    const text = String(fields.get("text") ?? "").trim();
    const current = loadList(storageKeys.specialists, defaultSpecialists);
    const photographer = current.find((person) => person.id === specialistId && person.profession === "Фотограф");
    if (!photographer || !author || !text) {
        reviewStatus.textContent = "Выберите фотографа, укажите имя и напишите отзыв.";
        return;
    }

    const updated = {
        ...photographer,
        comments: [...(photographer.comments ?? []), { author, text }],
        reviewsCount: photographer.reviewsCount + 1
    };
    const next = current.map((person) => person.id === specialistId ? updated : person);
    if (!saveList(storageKeys.specialists, next)) {
        reviewStatus.textContent = "Не удалось сохранить отзыв. Проверьте настройки браузера.";
        return;
    }

    specialists = next;
    reviewForm.reset();
    photographerSelect.value = String(specialistId);
    renderCards();
    renderReviews();
    reviewStatus.textContent = "Отзыв опубликован.";
}

if (reviewForm) {
    const photographers = specialists.filter((person) => person.profession === "Фотограф");
    photographers.forEach((person) => {
        const option = document.createElement("option");
        option.value = person.id;
        option.textContent = person.name;
        photographerSelect.append(option);
    });

    const requestedId = Number(new URLSearchParams(location.search).get("photographer"));
    const preselected = photographers.find((person) => person.id === requestedId)
        ?? photographers.find((person) => person.comments?.length);
    if (preselected) {
        photographerSelect.value = String(preselected.id);
    }
    photographerSelect.addEventListener("change", () => {
        reviewStatus.textContent = "";
        renderReviews();
    });
    reviewForm.addEventListener("submit", handleReviewSubmit);
    renderReviews();
}

const cardsContainer = catalog ?? shortlistContainer;
if (cardsContainer) {
    renderCards();
    cardsContainer.addEventListener("click", handleCardClick);

    const restoreViews = () => {
        specialists = loadList(storageKeys.specialists, defaultSpecialists);
        shortlist = loadList(storageKeys.shortlist, []);
        renderCards();
        if (reviewForm) {
            renderReviews();
        }
    };
    window.addEventListener("storage", (event) => {
        if (event.key === null || Object.values(storageKeys).includes(event.key)) {
            restoreViews();
        }
    });
    window.addEventListener("pageshow", (event) => {
        if (event.persisted) {
            restoreViews();
        }
    });
}

if (catalog) {
    const selectedCity = "Уфа";
    const { averageRate, mostReviewed } = analyzeSpecialists(specialists, selectedCity);

    console.log("Лабораторная работа №5. Вариант 16");
    const rate = averageRate === null ? "нет данных" : `${numberFormat.format(averageRate)} ₽/ч`;
    console.log(`Средняя ставка фотографов (${selectedCity}): ${rate}`);

    if (mostReviewed) {
        const { name, profession, city, reviewsCount } = mostReviewed;
        console.log(`Больше всего отзывов: ${name} (${profession}, ${city}) — ${reviewsCount}`);
        console.log("Профиль специалиста:", mostReviewed);
    }
}
