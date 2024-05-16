from rest_framework import serializers
from .models import Hotel
from .models import FoodItem

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('name',)
        model = Hotel

class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('name', 'price', )
        model = FoodItem

