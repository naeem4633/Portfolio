from django.shortcuts import render

def index(request):
    # Render the index.html template, which will contain the main React app
    return render(request, 'index.html') 