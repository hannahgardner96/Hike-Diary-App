from django.contrib import admin

from .models import HikeLocation, HikeRecommendation, DiaryEntry

# Register your models here.
admin.site.register(HikeLocation)
admin.site.register(HikeRecommendation)
admin.site.register(DiaryEntry)