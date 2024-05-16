from rest_framework import generics
from .serializers import HotelSerializer, FoodItemSerializer
from .models import Hotel, FoodItem

class HotelList(generics.ListCreateAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

class HotelDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

class FoodItemList(generics.ListCreateAPIView):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer

class FoodItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer
