from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Cart for {self.user.first_name} {self.user.last_name}"
    

# Signal to create a Cart object for each new User
@receiver(post_save, sender=User)
def create_user_cart(sender, instance, created, **kwargs):
    if created:
        Cart.objects.create(user=instance)
        

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='customer_profile')
    phone_number = models.CharField(max_length=15)
    address1 = models.CharField(max_length=100)
    address2 = models.CharField(blank=True, null=True,max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    date_joined = models.DateTimeField(auto_now_add=True)
    
    payment_method=models.CharField(max_length=100)

    def __str__(self):
        return self.user.username        

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='orders')
    order_date = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=50)
    

    def __str__(self):
        return f"Order {self.id} for {self.customer.user.username}"
class PaymentMethod(models.Model):
    method_name = models.CharField(max_length=100)
    details = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.method_name
