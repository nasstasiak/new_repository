const textContainer = document.querySelector('.text-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicatorsContainer = document.querySelector('.indicators');
let currentPageIndex = 0;
let pages = [];


const fullText = `Форум инновационных финансовых технологий FINOPOLIS в этом году вернется в Сочи. 
Он пройдет на территории Образовательного центра «Сириус». FINOPOLIS традиционно станет площадкой для обсуждения 
тенденций и возможностей современных технологий в финансовом секторе.
На форуме будет представлена широкая деловая программа с пленарными и секционными дискуссиями, 
а также выставочная зона с передовыми сервисами, инновационными технологическими решениями, мастер-классами и различными 
интерактивными мероприятиями от партнеров. Кроме того, лучшие команды региональных кейс-чемпионатов Молодежной программы 
FINOPOLIS.365 покажут экспертам финансового рынка свои проекты и поборются за звание суперфиналиста и денежный приз.`;

// Максимальное количество слов на странице
const maxWordsPerPage = 60;

// Функция для разбиения текста на страницы
function splitTextIntoPages(text, maxWords) {
    const words = text.split(' ');
    const pages = [];
    let currentPage = [];

    words.forEach((word) => {
        if (currentPage.length < maxWords) {
            currentPage.push(word);
        } else {
            pages.push(currentPage.join(' '));
            currentPage = [word];
        }
    });

    if (currentPage.length > 0) {
        pages.push(currentPage.join(' '));
    }

    return pages;
}

// Создаем страницы на основе текста
function createPages() {
    pages = splitTextIntoPages(fullText, maxWordsPerPage);

    pages.forEach((pageText) => {
        const page = document.createElement('div');
        page.classList.add('page');
        page.textContent = pageText;
        textContainer.appendChild(page);
    });

    showPage(0);
}

// Функция для создания индикаторов
function createIndicators() {
    for (let i = 0; i < pages.length; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.dataset.index = i;
        indicator.addEventListener('click', function () {
            showPage(parseInt(this.dataset.index, 10));
        });
        if (i === 0) {
            indicator.classList.add('active');
        }
        indicatorsContainer.appendChild(indicator);
    }
}

// Функция для обновления индикаторов
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentPageIndex);
    });
}

// Функция для обновления состояния кнопок
function updateButtonStates() {
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === pages.length - 1;
}

// Функция для отображения страницы
function showPage(index) {
    const pageElements = document.querySelectorAll('.page');
    pageElements.forEach((page, i) => {
        page.classList.toggle('active', i === index);
    });
    currentPageIndex = index;
    updateIndicators();
    updateButtonStates();
}

// Обработчики для кнопок
prevBtn.addEventListener('click', () => {
    const prevIndex = (currentPageIndex - 1 + pages.length) % pages.length;
    showPage(prevIndex);
});

nextBtn.addEventListener('click', () => {
    const nextIndex = (currentPageIndex + 1) % pages.length;
    showPage(nextIndex);
});

// Инициализация
createPages();
createIndicators();
updateButtonStates();