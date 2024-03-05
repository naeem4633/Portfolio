from django.urls import path
from . import views

urlpatterns = [
    # Catch all URL pattern to route all requests to the main React app
    path('music', views.index),
]