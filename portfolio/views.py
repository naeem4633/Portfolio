from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def music_frontend(request):
    return render(request, 'musicFrontend/build/index.html')

def furniture_frontend(request):
    return render(request, 'furnitureFrontend/build/index.html')

def cosmetics_frontend(request):
    return render(request, 'cosmeticsFrontend/build/index.html')

def photographer_frontend(request):
    return render(request, 'photographerFrontend/build/index.html') 

def coffee_frontend(request):
    return render(request, 'coffeeFrontend/build/index.html') 