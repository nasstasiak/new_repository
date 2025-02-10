document.addEventListener('click', function (event) {
    const targetElement = event.target.closest('.add-to-cart-big, .remove-from-favorites-big');

    if (!targetElement) {
        return; // Если клик не по нужному элементу, выходим
    }

    event.preventDefault(); // Предотвращаем стандартное поведение ссылки

    const heartIcon = targetElement.querySelector('.heart-icon');
    const heartRedIcon = targetElement.querySelector('.heart-red-icon-card');
    const eventSlug = targetElement.dataset.eventSlug; // Уникальный идентификатор

    if (targetElement.classList.contains('add-to-cart-big')) {
        // Логика добавления в избранное
        heartIcon.classList.add('hidden');
        heartRedIcon.classList.remove('hidden');

        targetElement.classList.remove('add-to-cart-big');
        targetElement.classList.add('remove-from-favorites-big');
        // Сохраняем состояние в localStorage
        localStorage.setItem(`event-${eventSlug}`, 'liked');

    } else if (targetElement.classList.contains('remove-from-favorites-big')) {
        // Логика удаления из избранного
        heartIcon.classList.remove('hidden');
        heartRedIcon.classList.add('hidden');

        targetElement.classList.remove('remove-from-favorites-big');
        targetElement.classList.add('add-to-cart-big');
        // Удаляем состояние из localStorage
        localStorage.removeItem(`event-${eventSlug}`);
    }
});