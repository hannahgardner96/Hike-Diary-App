from django.db import models
from datetime import date
from django.contrib import admin
from django_google_maps import widgets as map_widgets
from django_google_maps import fields as map_fields

class HikeLocation(models.Model):
    address = map_fields.AddressField(max_length = 200)
    geolocation = map_fields.GeoLocationField(max_length=100, null=True)

class HikeRecommendation(models.Model):
    hike_location = models.ForeignKey(HikeLocation, on_delete = models.CASCADE)
    weather_rating = models.IntegerField()

class DiaryEntry(models.Model):
    hike_location = models.ForeignKey(HikeLocation, on_delete = models.PROTECT)
    hike_date = models.DateField(default = date.today)
    hike_description = models.TextField()
    hike_weather_rating = models.IntegerField()


# referenced https://stackoverflow.com/questions/2029295/django-datefield-default-options for setting default date to today and improting datetime 
# referenced https://www.geeksforgeeks.org/django-model-data-types-and-fields-list/ for required arguments in fields