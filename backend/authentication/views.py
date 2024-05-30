from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

class CheckAuthentication(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"is_authenticated": True})
    
    def handle_no_permission(self):
        return Response({"is_authenticated": False})
