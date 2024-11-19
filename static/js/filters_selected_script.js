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



function setDateFilter() {
  const filterStartSpan = document.getElementById('filter-start-date-value');
  const filterEndSpan = document.getElementById('filter-end-date-value');
  const filterDateMessageDiv = document.getElementById('filter-date-message');
  const searchStartValue = document.getElementById('date_start').value.trim();
  const searchEndValue = document.getElementById('date_end').value.trim();
  // Устанавливаем значение в span
  filterStartSpan.textContent = searchStartValue;
  filterEndSpan.textContent = searchEndValue;
  // Проверяем значение и отображаем или скрываем div с фильтром
  if (searchStartValue !== "" || searchEndValue !== "") {
      filterDateMessageDiv.style.display = 'block'; // Показываем
  } else {
      filterDateMessageDiv.style.display = 'none'; // Скрываем
  }
  // Сохраняем значение в localStorage
  localStorage.setItem('filterStartDate', searchStartValue);
  localStorage.setItem('filterEndDate', searchEndValue);
}
// Обработчик события для кнопки
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

  if (savedStartValue || savedEndValue) {
    if (savedStartValue) {
      inputStartField.value = savedStartValue;
      filterStartSpan.textContent = savedStartValue;
    }
    if (savedEndValue) {
      inputEndField.value = savedEndValue;
      filterEndSpan.textContent = savedEndValue;
    }
    filterDateMessageDiv.style.display = 'block'; // Показываем, если есть хотя бы одна дата
  } else {
    filterDateMessageDiv.style.display = 'none';
  }

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
  
  
