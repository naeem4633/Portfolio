from rest_framework import serializers
from .models import Furniture, SavedItem

class FurnitureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Furniture
        fields = '__all__'

class SavedItemSerializer(serializers.ModelSerializer):
    furniture = FurnitureSerializer(read_only=True)
    class Meta:
        model = SavedItem
        fields = '__all__'  