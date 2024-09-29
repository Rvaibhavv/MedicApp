from django.urls import path
from .views import signin 
from .views import login # Ensure this matches the path to your views

urlpatterns = [
    path('signin/', signin, name='signin'),  # URL for the sign-in view
    path('login/', login, name='login'),
]
