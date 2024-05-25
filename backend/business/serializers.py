from rest_framework import serializers
from .models import Hotel
from .models import FoodItem

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'name', 'address', 'minPrice', 'rating', 'veg', 'nonVeg',)
        model = Hotel

class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'name', 'price', 'veg', 'nonVeg', )
        model = FoodItem

class HotelDetailSerializer(serializers.ModelSerializer):
    food_items = FoodItemSerializer(many=True, read_only=True)

    class Meta:
        model = Hotel
        fields = ['id', 'name', 'address', 'minPrice', 'rating', 'nonVeg', 'veg', 'food_items']
