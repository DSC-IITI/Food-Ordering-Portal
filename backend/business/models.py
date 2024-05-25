from django.db import models
from customer.models import Cart
from django.contrib.auth.models import User

class Hotel(models.Model):
    name = models.CharField(max_length=250)
    address = models.CharField(max_length=500)
    minPrice = models.IntegerField()
    rating = models.IntegerField(range(1,5))
    nonVeg = models.BooleanField()
    veg = models.BooleanField()
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name

class FoodItem(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(range(1, 10000))
    veg = models.BooleanField()
    nonVeg = models.BooleanField()
    carts = models.ManyToManyField(Cart, blank=True)
    hotels = models.ManyToManyField(Hotel, related_name='food_items')

    def __str__(self) -> str:
        return self.name
