from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Payment
from .serializers import PaymentSerializer
from rest_framework.exceptions import PermissionDenied
from customer.models import Cart

class UserPaymentMixin:
    """
    Mixin to filter Payment objects by the current user.
    """
    def get_queryset(self):
        user = self.request.user
        return Payment.objects.filter(user=user)

class PaymentListCreateView(UserPaymentMixin, generics.ListCreateAPIView):
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        cart_id = self.request.user.cart.id
        if cart_id:
            try:
                cart = Cart.objects.get(id=cart_id, user=self.request.user)
                serializer.save(user=self.request.user, cart=cart)
            except Cart.DoesNotExist:
                raise PermissionDenied("Cart not found or does not belong to the user.")
        else:
            raise PermissionDenied("Cart ID is required to create a payment.")


class PaymentDetailView(generics.RetrieveUpdateDestroyAPIView, UserPaymentMixin):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        obj = super().get_object()
        if obj.user != self.request.user:
            raise PermissionDenied("You do not have permission to access this payment.")
        return obj
