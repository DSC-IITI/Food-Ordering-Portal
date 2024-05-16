from django.urls import path
from business.views import HotelList, HotelDetail, FoodItemList, FoodItemDetail
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Tomato Backend",
        default_version="v1",
        description="Basic backend"
    ),
    public=True,
    permission_classes = (permissions.AllowAny, ),
)

urlpatterns = [
    path("", schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path("redoc/", schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('hotels/', HotelList.as_view()),
    path('hotels/<int:pk>/', HotelDetail.as_view()),
    path('food-item/', FoodItemList.as_view()),
    path('food-item/<int:pk>', FoodItemDetail.as_view()),
]

