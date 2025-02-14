document.addEventListener('click', function(event) {
    // Обработка кнопок "Отправить заявку" и "Удалить заявку"
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

    // Обработка добавления/удаления из избранного
    const targetElement = event.target.closest('.add-to-cart, .remove-from-favorites');

    if (!targetElement) {
        return; // Если клик не по нужному элементу, выходим
    }

    event.preventDefault(); // Предотвращаем стандартное поведение ссылки

    const heartIcon = targetElement.querySelector('.heart-icon');
    const heartRedIcon = targetElement.querySelector('.heart-red-icon');
    const eventSlug = targetElement.dataset.eventSlug; // Уникальный идентификатор

    if (targetElement.classList.contains('add-to-cart')) {
        // Логика добавления в избранное
        heartIcon.classList.add('hidden');
        heartRedIcon.classList.remove('hidden');

        targetElement.classList.remove('add-to-cart');
        targetElement.classList.add('remove-from-favorites');
        // Сохраняем состояние в localStorage
        localStorage.setItem(`event-${eventSlug}`, 'liked');

    } else if (targetElement.classList.contains('remove-from-favorites')) {
        // Логика удаления из избранного
        heartIcon.classList.remove('hidden');
        heartRedIcon.classList.add('hidden');

        targetElement.classList.remove('remove-from-favorites');
        targetElement.classList.add('add-to-cart');
        // Удаляем состояние из localStorage
        localStorage.removeItem(`event-${eventSlug}`);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const eventSlug = card.dataset.eventSlug; // Уникальный идентификатор
        const sentAppButton = card.querySelector('.btn-sent_app');
        const removeAppButton = card.querySelector('.btn-remove_app');
        const isAppSent = localStorage.getItem(`event-${eventSlug}-app`) === 'sent';

        if (isAppSent) {
            // Если заявка была отправлена, применяем соответствующие изменения
            sentAppButton.classList.add('hidden');
            removeAppButton.classList.remove('hidden');
        } else {
            // Если заявка не была отправлена, сбрасываем состояние
            sentAppButton.classList.remove('hidden');
            removeAppButton.classList.add('hidden');
        }

        const heartElement = card.querySelector('[data-event-slug]');
        const heartIcon = heartElement.querySelector('.heart-icon');
        const heartRedIcon = heartElement.querySelector('.heart-red-icon');
        const isLiked = localStorage.getItem(`event-${eventSlug}`) === 'liked';

        if (isLiked) {
            // Если элемент был "лайкнут", применяем соответствующие изменения
            heartIcon.classList.add('hidden');
            heartRedIcon.classList.remove('hidden');
            heartElement.classList.remove('add-to-cart');
            heartElement.classList.add('remove-from-favorites');
        } else {
            // Если элемент не был "лайкнут", сбрасываем состояние
            heartIcon.classList.remove('hidden');
            heartRedIcon.classList.add('hidden');
            heartElement.classList.remove('remove-from-favorites');
            heartElement.classList.add('add-to-cart');
        }
    });
});