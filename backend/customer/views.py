from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Cart, CartItem
from business.models import FoodItem
from .serializers import CartSerializer, CartItemSerializer
from rest_framework.permissions import IsAuthenticated

class CartDetailView(APIView):
    """
    Retrieve or create the current user's cart.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        cart, created = Cart.objects.get_or_create(user=request.user)
        serializer = CartSerializer(cart)
        return Response(serializer.data)


class AddItemToCartView(APIView):
    """
    Add an item to the user's cart.
    """
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            cart = Cart.objects.get(user=request.user)
            food_item = FoodItem.objects.get(id=request.data.get('food_item_id'))
            quantity = request.data.get('quantity', 1)
            
            # Check if item already exists in the cart
            cart_item, created = CartItem.objects.get_or_create(cart=cart, food_item=food_item)
            if not created:
                cart_item.quantity += int(quantity)
                cart_item.save()
            
            serializer = CartItemSerializer(cart_item)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        except FoodItem.DoesNotExist:
            return Response({"error": "Food item not found."}, status=status.HTTP_404_NOT_FOUND)


class UpdateCartItemView(APIView):
    """
    Update the quantity of a cart item.
    """
    permission_classes = [IsAuthenticated]

    def patch(self, request, cart_item_id):
        try:
            cart_item = CartItem.objects.get(id=cart_item_id, cart__user=request.user)
            quantity = request.data.get('quantity', 1)
            cart_item.quantity = int(quantity)
            cart_item.save()
            
            serializer = CartItemSerializer(cart_item)
            return Response(serializer.data)
        
        except CartItem.DoesNotExist:
            return Response({"error": "Cart item not found."}, status=status.HTTP_404_NOT_FOUND)


class RemoveItemFromCartView(APIView):
    """
    Remove an item from the user's cart.
    """
    permission_classes = [IsAuthenticated]

    def delete(self, request, cart_item_id):
        try:
            cart_item = CartItem.objects.get(id=cart_item_id, cart__user=request.user)
            cart_item.delete()
            return Response({"message": "Item removed from cart."}, status=status.HTTP_204_NO_CONTENT)
        
        except CartItem.DoesNotExist:
            return Response({"error": "Cart item not found."}, status=status.HTTP_404_NOT_FOUND)
