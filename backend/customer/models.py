from django.db import models
from django.contrib.auth.models import User

class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return (f"{self.user.first_name} {self.user.last_name}")
