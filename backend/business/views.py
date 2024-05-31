from rest_framework import generics, permissions
from .serializers import HotelSerializer, FoodItemSerializer, HotelDetailSerializer
from .models import Hotel, FoodItem
from rest_framework.parsers import MultiPartParser, FormParser

class HotelList(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    parser_classes = (MultiPartParser, FormParser)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

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
