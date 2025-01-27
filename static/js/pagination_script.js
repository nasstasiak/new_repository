let currentPage = 1; // Текущая страница
const cardsPerPage = 2; // Количество карточек на странице
let allCards = []; // Массив для хранения всех карточек

// Функция для инициализации карточек
function initializeCards() {
    allCards = document.querySelectorAll('.card'); // Получаем все карточки
    updateArrows(); // Обновляем видимость стрелок
    displayCards(currentPage); // Отображаем карточки для текущей страницы
}

// Функция для отображения карточек на текущей странице
function displayCards(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // Скрываем все карточки
    allCards.forEach(card => card.style.display = 'none');

    // Показываем карточки для текущей страницы
    for (let i = startIndex; i < endIndex && i < allCards.length; i++) {
        allCards[i].style.display = 'block';
    }
}

// Функция для обновления видимости стрелок
function updateArrows() {
    const arrowLeft = document.querySelector('.arrow-nav-left');
    const arrowRight = document.querySelector('.arrow-nav-right');

    // Скрываем стрелку влево на первой странице
    if (currentPage === 1) {
        arrowLeft.style.display = 'none';
    } else {
        arrowLeft.style.display = 'block';
    }

    // Скрываем стрелку вправо на последней странице
    if (currentPage === Math.ceil(allCards.length / cardsPerPage)) {
        arrowRight.style.display = 'none';
    } else {
        arrowRight.style.display = 'block';
    }
}

// Функция для перехода на предыдущую страницу
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayCards(currentPage);
        updateArrows();
    }
}

// Функция для перехода на следующую страницу
function nextPage() {
    if (currentPage < Math.ceil(allCards.length / cardsPerPage)) {
        currentPage++;
        displayCards(currentPage);
        updateArrows();
    }
}

// Назначаем обработчики событий для стрелок
document.querySelector('.arrow-nav-left').addEventListener('click', prevPage);
document.querySelector('.arrow-nav-right').addEventListener('click', nextPage);

// Инициализация при загрузке страницы
window.addEventListener('load', initializeCards);