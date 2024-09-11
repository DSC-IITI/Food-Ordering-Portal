from django.db import models
from django.contrib.auth.models import User
from customer.models import Cart

class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    payment_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(max_length=50)
    status = models.CharField(max_length=20, choices=[('Pending', 'Pending'), ('Completed', 'Completed'), ('Failed', 'Failed')], default='Pending')

    def save(self, *args, **kwargs):
        if not self.pk:
            # This is a new instance, calculate amount from cart
            self.amount = sum(item.food_item.price * item.quantity for item in self.cart.items.all())
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Payment of {self.amount} by {self.user.username} on {self.payment_date}"

