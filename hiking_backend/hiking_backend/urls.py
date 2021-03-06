"""hiking_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.contrib.staticfiles.views import serve
from django.urls import include, path, re_path
from rest_framework import routers
from hiking import views


router = routers.DefaultRouter()
router.register(r'hike_location', views.HikeLocationView)
router.register(r'hike_recommendation', views.HikeRecommendationView)
router.register(r'diary_entry', views.DiaryEntryView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/location_search', views.get_location),
    path('api/get_nearby_locations', views.get_nearby_locations),
    path('api/photo_search', views.get_photo),
    path('api/', include(router.urls)),
    # path('api/diary_entry'), needs to be a path that relates to a put function
    path('', views.redirect_index),
    re_path(r'^(?P<path>.*)$', serve)
]