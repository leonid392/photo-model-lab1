"use strict";

const portraitExample = {
    src: "images/portfolio-portrait.jpg",
    alt: "Пример портретной фотографии из портфолио ФотоБиржи"
};
const familyExample = {
    src: "images/portfolio-family.jpg",
    alt: "Пример семейной фотографии из портфолио ФотоБиржи"
};

const specialists = [
    {
        id: 1, name: "Алексей Смирнов", profession: "Фотограф", city: "Уфа",
        hourlyRate: 3000, reviewsCount: 64, experienceYears: 5, worksRemotely: false,
        specializations: ["портретная", "семейная съёмка"],
        anchor: "alexey-smirnov",
        profileUrl: "detail.html",
        image: { src: "images/alexey.jpg", alt: "Алексей Смирнов с фотоаппаратом" }
    },
    {
        id: 2, name: "Мария Волкова", profession: "Фотограф", city: "Казань",
        hourlyRate: 4000, reviewsCount: 87, experienceYears: 7, worksRemotely: false,
        specializations: ["свадебная", "репортажная съёмка"],
        anchor: "maria-volkova",
        image: { src: "images/maria.jpg", alt: "Мария Волкова с фотоаппаратом" }
    },
    {
        id: 3, name: "Дмитрий Орлов", profession: "Фотограф", city: "Уфа",
        hourlyRate: 2500, reviewsCount: 39, experienceYears: 4, worksRemotely: false,
        specializations: ["предметная", "рекламная съёмка"],
        anchor: "dmitry-orlov",
        image: { src: "images/dmitry.jpg", alt: "Дмитрий Орлов с фотоаппаратом" }
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
        image: portraitExample
    },
    {
        id: 6, name: "Дарья Крылова", profession: "Фотограф", city: "Казань",
        hourlyRate: 3800, reviewsCount: 67, experienceYears: 5, worksRemotely: false,
        specializations: ["детская", "семейная съёмка"],
        image: familyExample
    },
    {
        id: 7, name: "Павел Сафин", profession: "Фотограф", city: "Уфа",
        hourlyRate: 2800, reviewsCount: 29, experienceYears: 3, worksRemotely: false,
        specializations: ["прогулочная", "репортажная съёмка"],
        image: familyExample
    },
    {
        id: 8, name: "Эльмира Валеева", profession: "Фотограф", city: "Казань",
        hourlyRate: 4200, reviewsCount: 104, experienceYears: 8, worksRemotely: false,
        specializations: ["свадебная", "семейная съёмка"],
        image: familyExample
    },
    {
        id: 9, name: "Рустем Ахметов", profession: "Фотограф", city: "Уфа",
        hourlyRate: 4600, reviewsCount: 96, experienceYears: 9, worksRemotely: false,
        specializations: ["свадебная", "портретная съёмка"],
        image: portraitExample
    },
    {
        id: 10, name: "Елена Миронова", profession: "Ретушёр", city: "Казань",
        hourlyRate: 2400, reviewsCount: 142, experienceYears: 8, worksRemotely: true,
        specializations: ["студийная ретушь", "цветокоррекция"],
        image: portraitExample
    },
    {
        id: 11, name: "Алина Юсупова", profession: "Ретушёр", city: "Уфа",
        hourlyRate: 1800, reviewsCount: 45, experienceYears: 4, worksRemotely: true,
        specializations: ["ретушь портретов", "цветокоррекция"],
        image: portraitExample
    },
    {
        id: 12, name: "Тимур Давлетов", profession: "Ретушёр", city: "Казань",
        hourlyRate: 2200, reviewsCount: 62, experienceYears: 5, worksRemotely: true,
        specializations: ["обработка предметных снимков", "обтравка"],
        image: portraitExample
    },
    {
        id: 13, name: "Виктория Белова", profession: "Ретушёр", city: "Уфа",
        hourlyRate: 2100, reviewsCount: 78, experienceYears: 6, worksRemotely: true,
        specializations: ["обработка семейных фотографий", "цветокоррекция"],
        image: familyExample
    },
    {
        id: 14, name: "Илья Котов", profession: "Фотограф", city: "Казань",
        hourlyRate: 3200, reviewsCount: 36, experienceYears: 3, worksRemotely: false,
        specializations: ["портретная", "предметная съёмка"],
        image: portraitExample
    },
    {
        id: 15, name: "Гульназ Исхакова", profession: "Ретушёр", city: "Уфа",
        hourlyRate: 2600, reviewsCount: 112, experienceYears: 7, worksRemotely: true,
        specializations: ["рекламная ретушь", "цветокоррекция"],
        image: portraitExample
    }
];

const numberFormat = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

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

    render() {
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

        const action = document.createElement("p");
        action.className = "card__text";
        const link = document.createElement("a");
        link.className = "card__link";
        link.setAttribute("href", this.profileUrl ?? "checkout.html");
        link.textContent = this.profileUrl ? "Подробнее о фотографе" : "Перейти к заявке";
        action.append(link);

        card.append(title, image, subtitle, details, action);
        return card;
    }
}

function renderCatalog(container, data) {
    data.forEach((item) => {
        const specialist = new Specialist(item);
        container.append(specialist.render());
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

const container = document.querySelector("#catalog-container");
if (container) {
    renderCatalog(container, specialists);

    const selectedCity = "Уфа";
    const { averageRate, mostReviewed } = analyzeSpecialists(specialists, selectedCity);

    console.log("Лабораторная работа №4. Вариант 16");
    const rate = averageRate === null ? "нет данных" : `${numberFormat.format(averageRate)} ₽/ч`;
    console.log(`Средняя ставка фотографов (${selectedCity}): ${rate}`);

    if (mostReviewed) {
        const { name, profession, city, reviewsCount } = mostReviewed;
        console.log(`Больше всего отзывов: ${name} (${profession}, ${city}) — ${reviewsCount}`);
        console.log("Профиль специалиста:", mostReviewed);
    }
}
