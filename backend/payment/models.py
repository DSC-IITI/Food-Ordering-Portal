from django.db import models
from customer.models import Cart

class PaymentInfo(models.Model):
    cart = models.OneToOneField(Cart, on_delete=models.CASCADE)
