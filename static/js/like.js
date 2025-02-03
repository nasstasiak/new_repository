document.addEventListener('click', function(event) {
    const targetElement = event.target.closest('.add-to-cart, .remove-from-favorites');

    if (!targetElement) {
        return; // Если клик не по нужному элементу, выходим
    }

    event.preventDefault(); // Предотвращаем стандартное поведение ссылки

    const heartIcon = targetElement.querySelector('.heart-icon');
    const heartRedIcon = targetElement.querySelector('.heart-red-icon');

    if(targetElement.classList.contains('add-to-cart')){
        //Логика добавления в избранное
        heartIcon.classList.add('hidden');
        heartRedIcon.classList.remove('hidden');

        targetElement.classList.remove('add-to-cart');
        targetElement.classList.add('remove-from-favorites');
    } else if (targetElement.classList.contains('remove-from-favorites')) {
      //Логика удаления из избранного
        heartIcon.classList.remove('hidden');
        heartRedIcon.classList.add('hidden');

        targetElement.classList.remove('remove-from-favorites');
        targetElement.classList.add('add-to-cart');
    }
});