from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('medapp/', include('doctordisplay.urls')),  
    path('user/',include('User.urls'))# Include your app's URLs
]
