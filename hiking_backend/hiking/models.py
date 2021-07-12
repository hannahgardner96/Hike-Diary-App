from django.db import models
from datetime import date

class HikeLocation(models.Model):
    hike_name = models.CharField(max_length = 100, null=True)
    hike_address = models.CharField(max_length = 100, null=True)
    hike_lat = models.FloatField(null=True)
    hike_lng = models.FloatField(null=True)
    hike_img = models.CharField(max_length = 1000, null=True)

class HikeRecommendation(models.Model):
    hike_location = models.ForeignKey(HikeLocation, on_delete = models.CASCADE)

class DiaryEntry(models.Model):
    hike_name = models.CharField(max_length = 100, null=True)
    hike_address = models.CharField(max_length = 100, null=True)
    hike_date = models.DateField(default = date.today)
    hike_description = models.TextField()


# referenced https://stackoverflow.com/questions/2029295/django-datefield-default-options for setting default date to today and improting datetime 
# referenced https://www.geeksforgeeks.org/django-model-data-types-and-fields-list/ for required arguments in fields