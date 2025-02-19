// Обработка кликов по кнопкам "Отправить заявку" и "Удалить заявку"
document.addEventListener('click', function(event) {
    if (event.target.closest('.btn-sent_app')) {
        const card = event.target.closest('.card');
        const sentAppButton = card.querySelector('.btn-sent_app');
        const removeAppButton = card.querySelector('.btn-remove_app');

        sentAppButton.classList.add('hidden');
        removeAppButton.classList.remove('hidden');
        localStorage.setItem(`event-${card.dataset.eventSlug}-app`, 'sent');
    } else if (event.target.closest('.btn-remove_app')) {
        const card = event.target.closest('.card');
        const sentAppButton = card.querySelector('.btn-sent_app');
        const removeAppButton = card.querySelector('.btn-remove_app');

        removeAppButton.classList.add('hidden');
        sentAppButton.classList.remove('hidden');
        localStorage.removeItem(`event-${card.dataset.eventSlug}-app`);
    }
});

// Инициализация состояния кнопок заявок при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const eventSlug = card.dataset.eventSlug;
        const sentAppButton = card.querySelector('.btn-sent_app');
        const removeAppButton = card.querySelector('.btn-remove_app');
        const isAppSent = localStorage.getItem(`event-${eventSlug}-app`) === 'sent';

        if (isAppSent) {
            sentAppButton.classList.add('hidden');
            removeAppButton.classList.remove('hidden');
        } else {
            sentAppButton.classList.remove('hidden');
            removeAppButton.classList.add('hidden');
        }
    });
});