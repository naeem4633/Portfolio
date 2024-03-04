from django.db import models

# Create your models here.
class Furniture(models.Model):
    sku = models.CharField(max_length=11, null=True)
    name = models.CharField(max_length=100)
    price = models.IntegerField(max_length=10)
    description = models.TextField(null=True)
    stock = models.IntegerField(max_length=10, default=10)
    image_path = models.CharField(max_length=200, null=True)
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.name
                                    
class SavedItem(models.Model):
    furniture = models.ForeignKey(Furniture, on_delete=models.CASCADE)
    quantity = models.IntegerField(max_length=10, null=True)
    is_wishlist = models.BooleanField(default=False)
    is_cart = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.furniture.name} - cart:{self.is_cart} - wishlist{self.is_wishlist}"