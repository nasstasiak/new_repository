# new_repository
new repository for events project


<!-- from django.shortcuts import render
from .models import Rating  

def event_detail(request, event_id):
    event = Event.objects.get(id=event_id)  # Получаем объект мероприятия
    average_rating = event.get_average_rating()  # Метод для вычисления среднего рейтинга
    return render(request, 'online_card_v2.html', {'average_rating': average_rating})


def get_average_rating(self):
        from django.db.models import Avg
        return self.ratings.aggregate(Avg('value'))['value__avg'] or 0 -->