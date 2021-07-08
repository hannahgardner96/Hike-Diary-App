from django.shortcuts import redirect
from rest_framework import viewsets
from .serializers import HikeLocationSerializer, HikeRecommendationSerializer, DiaryEntrySerializer
from .models import HikeLocation, HikeRecommendation, DiaryEntry

class HikeLocationView(viewsets.ModelViewSet):
    serializer_class = HikeLocationSerializer
    queryset = HikeLocation.objects.all()

class HikeRecommendationView(viewsets.ModelViewSet):
    serializer_class = HikeRecommendationSerializer
    queryset =  HikeRecommendation.objects.all()

class DiaryEntryView(viewsets.ModelViewSet):
    serializer_class = DiaryEntrySerializer
    queryset = DiaryEntry.objects.all()

redirect_index = lambda _r: redirect("/index.html")