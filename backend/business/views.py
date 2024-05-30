from rest_framework import generics, permissions
from .serializers import HotelSerializer, FoodItemSerializer, HotelDetailSerializer
from .models import Hotel, FoodItem

class HotelList(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

class HotelDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelDetailSerializer

class FoodItemList(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer

class FoodItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer
