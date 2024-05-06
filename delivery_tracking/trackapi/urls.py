from django.urls import path
from .views import fedex_tracking


urlpatterns = [
    path('track/', fedex_tracking.as_view())    
]