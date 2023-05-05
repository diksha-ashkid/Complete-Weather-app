from django.contrib import admin

# Register your models here.
from .models import Weather

@admin.register(Weather)
class WeatherAdmin(admin.ModelAdmin):
    list_display = ["location", "temp", "description", "feels_like", "humidity", "wind_speed"]

