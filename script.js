
// Определяем функции для показа и скрытия дива
function toggleFilters() {
    const filterDiv = document.getElementById('rools');

    // Проверяем текущее состояние и переключаем его
    if (filterDiv.style.display === 'none' || filterDiv.style.display === '') {
        filterDiv.style.display = 'block'; // Показываем
        localStorage.setItem('rools-visible', 'true'); // Сохраняем состояние как показано
    } else {
        filterDiv.style.display = 'none';  // Скрываем
        localStorage.setItem('rools-visible', 'false'); // Сохраняем состояние как скрыто
    }
}

// Добавляем обработчик события на кнопку
document.getElementById('filter-toggle').addEventListener('click', toggleFilters);

window.onload = function () {
    // Проверяем, были ли фильтры показаны до обновления страницы
    const filterDiv = document.getElementById('rools');
    if (localStorage.getItem('rools-visible') === 'true') {
        filterDiv.style.display = 'block';
    } else {
        filterDiv.style.display = 'none';
    }
}





// Определяем функции для показа и скрытия дива
function toggleSortSection() {
    const sortSectionDiv = document.getElementById('sort-section');

    // Проверяем текущее состояние и переключаем его
    if (sortSectionDiv.style.display === 'none' || sortSectionDiv.style.display === '') {
        sortSectionDiv.style.display = 'block'; // Показываем
    } else {
        sortSectionDiv.style.display = 'none';  // Скрываем
    }
}

// Добавляем обработчик события на кнопку
document.getElementById('sort-toggle').addEventListener('click', toggleSortSection);

// Скрываем див по умолчанию
document.getElementById('sort-section').style.display = 'none';
