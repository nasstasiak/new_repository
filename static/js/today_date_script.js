document.addEventListener('DOMContentLoaded', function () {
    // Инициализация календаря
    $('#calendar').fullCalendar({
        locale: 'ru',
        events: JSON.parse(document.getElementById('calendar').dataset.events),
        height: 'auto',
        contentHeight: 'auto',
        aspectRatio: 1.35,
        eventRender: function (event, element) {
            element.css('background-color', 'green');
            element.find('.fc-title').append('<br/><b>' + event.time + '</b><br/><i>' + event.category + '</i>');
        },
        dayRender: function (date, cell) {
            if (date.isSame(new Date(), "day")) {
                cell.css("background-color", "yellow");
            }
        }
    });

    // Обработчик для кнопки "Применить"
    document.getElementById('apply-date-button').addEventListener('click', function(event) {
        event.preventDefault();

        const year = document.getElementById('yearSelect').value;
        const month = document.getElementById('monthSelect').value;

        if (year && month) {
            $('#calendar').fullCalendar('gotoDate', `${year}-${month}-01`);
        }
    });
});