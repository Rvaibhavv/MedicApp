from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet
router = DefaultRouter()
router.register(r'doctors', DoctorViewSet, basename='doctor')  # Registering the DoctorViewSet with a 'doctors' route
 
urlpatterns = [
    path('api/', include(router.urls)),  # This will create routes like /api/doctors/
]
