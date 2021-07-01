from rest_framework import serializers
from .models import HikeLocation, HikeRecommendation, DiaryEntry

class HikeLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = HikeLocation
        fields = ('hike_name', 'hike_address', 'hike_lat', 'hike_lng', 'hike_img')

class HikeRecommendationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = HikeRecommendation
        fields = ('hike_location', 'weather_rating')

class DiaryEntrySerializer(serializers.ModelSerializer):
    class Meta: 
        model = DiaryEntry
        fields = ('hike_location', 'hike_date', 'hike_description', 'hike_weather_rating')