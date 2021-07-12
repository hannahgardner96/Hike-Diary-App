from rest_framework import serializers
from .models import HikeLocation, HikeRecommendation, DiaryEntry

class HikeLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = HikeLocation
        fields = ('address', 'geolocation')

class HikeRecommendationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = HikeRecommendation
        fields = ('hike_location')

class DiaryEntrySerializer(serializers.ModelSerializer):
    class Meta: 
        model = DiaryEntry
        fields = ('hike_name', 'hike_address', 'hike_date', 'hike_description')