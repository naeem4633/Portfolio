from django.urls import path
from . import views

urlpatterns = [
    path('', views.getAllFurniture),
    path('beds/', views.getBeds),
    path('dining/', views.getDining),
    path('wardobes/', views.getWardobes),
    path('single-item/<int:pk>', views.getSingleItem),
    path('similar-items/<str:category>', views.getSimilarItems),
    path('cart-items/', views.getCartItems),
    path('wishlist-items/', views.getWishlistItems),
    path('save-item/', views.saveItem),
    path('delete-item/<int:pk>', views.deleteSavedItem),
    path('saved-items/', views.getSavedItems),
]