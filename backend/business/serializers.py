from rest_framework import serializers
from .models import Hotel
from .models import FoodItem

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'name', 'address', 'minPrice', 'rating', 'veg', 'nonVeg', 'hotel_image')
        read_only_fields = ['user']
        model = Hotel

    def create(self, validated_data):
        request = self.context.get('request')
        validated_data['user'] = request.user
        return super().create(validated_data)

class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'name', 'price', 'veg', 'nonVeg', 'image')
        model = FoodItem

class HotelDetailSerializer(serializers.ModelSerializer):
    food_items = FoodItemSerializer(many=True, read_only=True)

    class Meta:
        model = Hotel
        fields = ['id', 'name', 'address', 'minPrice', 'rating', 'nonVeg', 'veg', 'food_items']
