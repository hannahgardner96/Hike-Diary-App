from django.db import models
from datetime import date

class HikeLocation(models.Model):
    hike_name = models.CharField(max_length = 100)
    hike_address = models.CharField(max_length = 100)
    hike_lat = models.DecimalField(max_digits=20, decimal_places=20)
    hike_lng = models.DecimalField(max_digits=20, decimal_places=20)

class HikeRecommendation(models.Model):
    hike_location = models.ForeignKey(HikeLocation, on_delete = models.CASCADE)
    hike_img = models.CharField(max_length = 200)
    weather_rating = models.IntegerField()

class DiaryEntry(models.Model):
    hike_location = models.ForeignKey(HikeLocation, on_delete = models.PROTECT)
    hike_date = models.DateField(default = date.today)
    hike_description = models.TextField()
    hike_weather_rating = models.IntegerField()


# referenced https://stackoverflow.com/questions/2029295/django-datefield-default-options for setting default date to today and improting datetime 
# referenced https://www.geeksforgeeks.org/django-model-data-types-and-fields-list/ for required arguments in fields