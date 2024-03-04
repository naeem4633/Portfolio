from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Furniture, SavedItem
from .serializers import FurnitureSerializer, SavedItemSerializer
from rest_framework import status

@api_view(['GET'])
def getAllFurniture(request):
    furniture = Furniture.objects.all()
    serializer = FurnitureSerializer(furniture, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getBeds(request):
    beds = Furniture.objects.filter(category="bed")
    serializer = FurnitureSerializer(beds, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def getDining(request):
    dining = Furniture.objects.filter(category="dining")
    serializer = FurnitureSerializer(dining, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def getWardobes(request):
    wardobes = Furniture.objects.filter(category="wardobe")
    serializer = FurnitureSerializer(wardobes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getSingleItem(request, pk):
    furniture = Furniture.objects.get(id=pk)
    serializer = FurnitureSerializer(furniture, many=False)
    return Response(serializer.data)
@api_view(['GET'])
def getSimilarItems(request, category):
    similarItems = Furniture.objects.filter(category=category)[:3]
    serializer = FurnitureSerializer(similarItems, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def getSavedItems(request):
    savedItems = SavedItem.objects.all()
    serializer = SavedItemSerializer(savedItems, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getCartItems(request):
    cartItems = SavedItem.objects.filter(is_cart=True)
    serializer = SavedItemSerializer(cartItems, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def getWishlistItems(request):
    wishlistItems = SavedItem.objects.filter(is_wishlist=True)
    serializer = SavedItemSerializer(wishlistItems, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def saveItem(request):
    furniture_data = request.data.get('furniture')
    quantity = request.data.get('quantity')
    is_cart = request.data.get('is_cart')
    is_wishlist = request.data.get('is_wishlist')

    furniture_id = furniture_data.get('id')
    try:
        furniture = Furniture.objects.get(id=furniture_id)
    except Furniture.DoesNotExist:
        return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

    saved_item, created = SavedItem.objects.get_or_create(furniture=furniture)
    if not created:
        saved_item.quantity += quantity  # Increment the quantity if the item already exists
    else:
        saved_item.quantity = quantity
    saved_item.is_cart = is_cart
    saved_item.is_wishlist = is_wishlist
    saved_item.save()

    serializer = SavedItemSerializer(saved_item)
    return Response(serializer.data, status=status.HTTP_200_OK)



@api_view(['DELETE'])
def deleteSavedItem(request, pk):
    saved_item = SavedItem.objects.get(pk=pk)
    saved_item.delete()
    return Response("Item deleted successfully")