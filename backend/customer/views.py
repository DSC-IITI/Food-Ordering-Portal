from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Customer, Order, PaymentMethod
from .serializers import CustomerSerializer, OrderSerializer, PaymentMethodSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class PaymentMethodViewSet(viewsets.ModelViewSet):
    queryset = PaymentMethod.objects.all()
    serializer_class = PaymentMethodSerializer
