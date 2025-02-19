// Обработка кликов по кнопкам лайков
document.addEventListener('click', function(event) {
    const targetElement = event.target.closest('.add-to-cart, .remove-from-favorites');

    if (!targetElement) {
        return; // Если клик не по нужному элементу, выходим
    }

    event.preventDefault(); // Предотвращаем стандартное поведение ссылки

    const heartIcon = targetElement.querySelector('.heart-icon');
    const heartRedIcon = targetElement.querySelector('.heart-red-icon');
    const eventSlug = targetElement.dataset.eventSlug;

    if (targetElement.classList.contains('add-to-cart')) {
        // Логика добавления в избранное
        heartIcon.classList.add('hidden');
        heartRedIcon.classList.remove('hidden');

        targetElement.classList.remove('add-to-cart');
        targetElement.classList.add('remove-from-favorites');
        localStorage.setItem(`event-${eventSlug}`, 'liked');
    } else if (targetElement.classList.contains('remove-from-favorites')) {
        // Логика удаления из избранного
        heartIcon.classList.remove('hidden');
        heartRedIcon.classList.add('hidden');

        targetElement.classList.remove('remove-from-favorites');
        targetElement.classList.add('add-to-cart');
        localStorage.removeItem(`event-${eventSlug}`);
    }
});

// Инициализация состояния лайков при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const eventSlug = card.dataset.eventSlug;
        const heartElement = card.querySelector('[data-event-slug]');

        if (heartElement) {
            const heartIcon = heartElement.querySelector('.heart-icon');
            const heartRedIcon = heartElement.querySelector('.heart-red-icon');
            const isLiked = localStorage.getItem(`event-${eventSlug}`) === 'liked';

            if (isLiked) {
                heartIcon.classList.add('hidden');
                heartRedIcon.classList.remove('hidden');
                heartElement.classList.remove('add-to-cart');
                heartElement.classList.add('remove-from-favorites');
            } else {
                heartIcon.classList.remove('hidden');
                heartRedIcon.classList.add('hidden');
                heartElement.classList.remove('remove-from-favorites');
                heartElement.classList.add('add-to-cart');
            }
        }
    });
});