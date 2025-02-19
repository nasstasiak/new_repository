// Обработка кликов по кнопкам
document.addEventListener('click', function(event) {
    if (event.target.closest('.btn-sent_app')) {
      const card = event.target.closest('.card');
      const eventId = card.dataset.eventId;
      const sentAppButton = card.querySelector('.btn-sent_app');
      const removeAppButton = card.querySelector('.btn-remove_app');
  
      sentAppButton.classList.add('hidden');
      removeAppButton.classList.remove('hidden');
      localStorage.setItem(`event-${eventId}-app`, 'sent'); // Сохраняем состояние
    } else if (event.target.closest('.btn-remove_app')) {
      const card = event.target.closest('.card');
      const eventId = card.dataset.eventId;
      const sentAppButton = card.querySelector('.btn-sent_app');
      const removeAppButton = card.querySelector('.btn-remove_app');
  
      removeAppButton.classList.add('hidden');
      sentAppButton.classList.remove('hidden');
      localStorage.removeItem(`event-${eventId}-app`); // Удаляем состояние
    }
  });
  
  // Инициализация состояния кнопок при загрузке страницы
  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      try {
        const eventId = card.dataset.eventId;
        if (!eventId) {
          console.error('Карточка не имеет data-event-id:', card);
          return;
        }
  
        const sentAppButton = card.querySelector('.btn-sent_app');
        const removeAppButton = card.querySelector('.btn-remove_app');
  
        if (!sentAppButton || !removeAppButton) {
          console.error('В карточке отсутствуют кнопки:', card);
          return;
        }
  
        const isAppSent = localStorage.getItem(`event-${eventId}-app`) === 'sent';
  
        sentAppButton.classList.toggle('hidden', isAppSent);
        removeAppButton.classList.toggle('hidden', !isAppSent);
  
      } catch (error) {
        console.error('Ошибка при инициализации карточки:', error);
      }
    });
  });