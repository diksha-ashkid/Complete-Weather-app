from django.urls import path
from api import views
from .views import WeatherList

urlpatterns = [
    path("weather/", views.WeatherList.as_view()),
    

]