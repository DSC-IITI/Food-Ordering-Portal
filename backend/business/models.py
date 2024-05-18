from django.db import models
from customer.models import Cart
from django.contrib.auth.models import User

class Hotel(models.Model):
    name = models.CharField(max_length=250)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name

class FoodItem(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(range(1, 10000))
    carts = models.ManyToManyField(Cart, blank=True)

    def __str__(self) -> str:
        return self.name
