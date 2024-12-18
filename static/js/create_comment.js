const commentButtons = document.querySelectorAll('.btn-comment');

const modal = document.querySelector('.modal');

const closeButton = modal.querySelector('.button-close');

// Функция для открытия модального окна
const openModal = () => {
    modal.style.display = 'block';
};

// Функция для закрытия модального окна
const closeModal = () => {
    modal.style.display = 'none';
};

// Добавляем обработчик событий для каждой кнопки
commentButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

// Если есть кнопка закрытия, добавляем обработчик для нее
if (closeButton) {
    closeButton.addEventListener('click', closeModal);
}

// Закрытие модального окна при клике вне его содержимого
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});