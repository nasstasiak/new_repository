function setNameFilter() {
  const filterValueSpan = document.getElementById('filter-name-value');
  const filterNameMessageDiv = document.getElementById('filter-name-message');
  const searchValue = document.getElementById('event-name-search').value.trim();
  // Устанавливаем значение в span
  filterValueSpan.textContent = searchValue;
  // Проверяем значение и отображаем или скрываем div с фильтром
  if (searchValue !== "") {
      filterNameMessageDiv.style.display = 'block'; // Показываем
  } else {
      filterNameMessageDiv.style.display = 'none'; // Скрываем
  }
  // Сохраняем значение в localStorage
  localStorage.setItem('filterName', searchValue);
}
// Обработчик события для кнопки
document.getElementById('apply-name-button').addEventListener('click', setNameFilter);


function clearNameFilter() {
  const inputField = document.getElementById('event-name-search');
  const filterValueSpan = document.getElementById('filter-name-value');
  const filterMessageDiv = document.getElementById('filter-name-message');
  // Очищаем поле ввода
  inputField.value = '';
  filterValueSpan.textContent = ''; // Очищаем значение в span
  filterMessageDiv.style.display = 'none'; // Скрываем сообщение
  // Удаляем значение из localStorage
  localStorage.removeItem('filterName');
  // Отправляем форму
  document.getElementById('name-form').submit();
}
// Обработчик события для кнопки удаления фильтра
document.getElementById('delete-name-filter').addEventListener('click', clearNameFilter);



function formatDate(date) {
  if (!date) return "";
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return "";
  return dateObj.toLocaleDateString('ru-RU', options);
 }
 


function setDateFilter() {
  const startInput = document.getElementById('date_start');
  const endInput = document.getElementById('date_end');
  const filterStartSpan = document.getElementById('filter-start-date-value');
  const filterEndSpan = document.getElementById('filter-end-date-value');
  const filterDateMessageDiv = document.getElementById('filter-date-message');

  const startDate = startInput.value ? new Date(startInput.value) : null;
  const endDate = endInput.value ? new Date(endInput.value) : null;


  filterStartSpan.textContent = startDate ? formatDate(startDate) : "";
  filterEndSpan.textContent = endDate ? formatDate(endDate) : "";

  if (startInput.value || endInput.value) {
    filterDateMessageDiv.style.display = 'block';
  } else {
    filterDateMessageDiv.style.display = 'none';
  }

  // Сохранение в localStorage (в формате гггг-мм-дд, если нужно)
  localStorage.setItem('filterStartDate', startInput.value);
  localStorage.setItem('filterEndDate', endInput.value);
}


document.getElementById('apply-date-button').addEventListener('click', setDateFilter);



function clearDateFilter() {
  const inputStartField = document.getElementById('date_start');
  const inputEndField = document.getElementById('date_end');
  const filterStartSpan = document.getElementById('filter-start-date-value');
  const filterEndSpan = document.getElementById('filter-end-date-value');
  const filterDateMessageDiv = document.getElementById('filter-date-message');
  // Очищаем поля ввода
  inputStartField.value = '';
  inputEndField.value = '';
  // Очищаем значения в span
  filterStartSpan.textContent = '';
  filterEndSpan.textContent = '';
  // Скрываем сообщение
  filterDateMessageDiv.style.display = 'none';
  // Удаляем значения из localStorage
  localStorage.removeItem('filterStartDate');
  localStorage.removeItem('filterEndDate');
  // Отправляем форму
  document.getElementById('dateDropdown').submit(); 
}
// Обработчик события для кнопки удаления фильтра по дате
document.getElementById('delete-date-filter').addEventListener('click', clearDateFilter);



function setTimeFilter() {
  const filterStartTimeSpan = document.getElementById('filter-start-time-value');
  const filterEndTimeSpan = document.getElementById('filter-end-time-value');
  const filterTimeMessageDiv = document.getElementById('filter-time-message');
  const searchStartTimeValue = document.getElementById('time_to_start').value;
  const searchEndTimeValue = document.getElementById('time_to_end').value;
  // Устанавливаем значение в span
  filterStartTimeSpan.textContent = searchStartTimeValue;
  filterEndTimeSpan.textContent = searchEndTimeValue;
  // Проверяем значение и отображаем или скрываем div с фильтром
  if (searchStartTimeValue  !== "" || searchEndTimeValue !== "") {
      filterTimeMessageDiv.style.display = 'block'; // Показываем
  } else {
      filterTimeMessageDiv.style.display = 'none'; // Скрываем
  }
  // Сохраняем значение в localStorage
  localStorage.setItem('filterStartTime', searchStartTimeValue);
  localStorage.setItem('filterEndTime', searchEndTimeValue);
}
// Обработчик события для кнопки
document.getElementById('apply-time-button').addEventListener('click', setTimeFilter);


function clearTimeFilter() {
  const inputStartTimeField = document.getElementById('time_to_start');
  const inputEndTimeField = document.getElementById('time_to_end');
  const filterStartTimeSpan = document.getElementById('filter-start-time-value');
  const filterEndTimeSpan = document.getElementById('filter-end-time-value');
  const filterTimeMessageDiv = document.getElementById('filter-time-message');
  // Очищаем поля ввода
  inputStartTimeField.value = '';
  inputEndTimeField.value = '';
  // Очищаем значения в span
  filterStartTimeSpan.textContent = '';
  filterEndTimeSpan.textContent = '';
  // Скрываем сообщение
  filterTimeMessageDiv.style.display = 'none';
  // Удаляем значения из localStorage
  localStorage.removeItem('filterStartTime');
  localStorage.removeItem('filterEndTime');
  // Отправляем форму
  document.getElementById('timeDropdown').submit(); 
}
// Обработчик события для кнопки удаления фильтра по времени
document.getElementById('delete-time-filter').addEventListener('click', clearTimeFilter); 



document.addEventListener("DOMContentLoaded", function() {
  // Фильтр по названию
  const savedNameValue = localStorage.getItem('filterName');
  const filterNameValueSpan = document.getElementById('filter-name-value');
  const filterNameMessageDiv = document.getElementById('filter-name-message');
  const inputNameField = document.getElementById('event-name-search');
  const filterDiv = document.getElementById('rools');
  if (savedNameValue) {
    inputNameField.value = savedNameValue;
    filterNameValueSpan.textContent = savedNameValue;
    filterNameMessageDiv.style.display = savedNameValue ? 'block' : 'none';
  } else {
    filterNameMessageDiv.style.display = 'none';
  }
    // Фильтр по дате
  const savedStartValue = localStorage.getItem('filterStartDate');
  const savedEndValue = localStorage.getItem('filterEndDate');
  const filterStartSpan = document.getElementById('filter-start-date-value');
  const filterEndSpan = document.getElementById('filter-end-date-value');
  const filterDateMessageDiv = document.getElementById('filter-date-message');
  const inputStartField = document.getElementById('date_start');
  const inputEndField = document.getElementById('date_end');

  // Загрузка значений из localStorage и форматирование
  if (savedStartValue) {
    inputStartField.value = savedStartValue;
    filterStartSpan.textContent = formatDate(savedStartValue);
  }
  if (savedEndValue) {
    inputEndField.value = savedEndValue;
    filterEndSpan.textContent = formatDate(savedEndValue);
  }

  // Отображение блока фильтра по дате, если есть хоть одно значение
  filterDateMessageDiv.style.display = (savedStartValue || savedEndValue) ? 'block' : 'none';

  // Фильтр по времени
  const savedStartTimeValue = localStorage.getItem('filterStartTime');
  const savedEndTimeValue = localStorage.getItem('filterEndTime');
  const filterStartTimeSpan = document.getElementById('filter-start-time-value');
  const filterEndTimeSpan = document.getElementById('filter-end-time-value');
  const filterTimeMessageDiv = document.getElementById('filter-time-message');
  const inputStartTimeField = document.getElementById('time_to_start');
  const inputEndTimeField = document.getElementById('time_to_end');
  if (savedStartTimeValue || savedEndTimeValue) {
  if (savedStartTimeValue) {
    inputStartTimeField.value = savedStartTimeValue;
    filterStartTimeSpan.textContent = savedStartTimeValue;
  }
  if (savedEndTimeValue) {
    inputEndTimeField.value = savedEndTimeValue;
    filterEndTimeSpan.textContent = savedEndTimeValue;
  }
  filterTimeMessageDiv.style.display = 'block';
  } else {
  filterTimeMessageDiv.style.display = 'none';
  }
  // Отображение блока фильтров в целом
  filterDiv.style.display = (savedNameValue || savedStartValue || savedEndValue || savedStartTimeValue || savedEndTimeValue || localStorage.getItem('rools-visible') === 'true') ? 'block' : 'none';
});
  
