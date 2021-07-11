from django.shortcuts import redirect
from rest_framework import viewsets
from .serializers import HikeLocationSerializer, HikeRecommendationSerializer, DiaryEntrySerializer
from .models import HikeLocation, HikeRecommendation, DiaryEntry
import requests
from django.conf import settings
from django.http import HttpResponse

class HikeLocationView(viewsets.ModelViewSet):
    serializer_class = HikeLocationSerializer
    queryset = HikeLocation.objects.all()

class HikeRecommendationView(viewsets.ModelViewSet):
    serializer_class = HikeRecommendationSerializer
    queryset =  HikeRecommendation.objects.all()

class DiaryEntryView(viewsets.ModelViewSet):
    serializer_class = DiaryEntrySerializer
    queryset = DiaryEntry.objects.all()



def get_location(request):
    location_object = requests.get(f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&keyword=hikes&key={settings.GOOGLE_MAPS_API_KEY}&fields=name,geometry,formatted_address,photos&input={request.GET['location_string']}")
    return HttpResponse(location_object)

def get_nearby_locations(request):
    nearby_locations = requests.get(f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={request.GET['lat']},{request.GET['lng']}&radius=5000&keyword=hike&key={settings.GOOGLE_MAPS_API_KEY}")
    return HttpResponse(nearby_locations)

def get_photo(request):
    photo_object = requests.get(f"https://maps.googleapis.com/maps/api/place/photo?photoreference=${request.GET['photo_ref']}&key=${settings.GOOGLE_MAPS_API_KEY}`")
    return HttpResponse(photo_object)


redirect_index = lambda _r: redirect("/index.html")