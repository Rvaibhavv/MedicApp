from rest_framework import serializers
from .models import User  # Adjust this import based on your User model location

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'email', 'phone', 'dob', 'password']  # Include all relevant fields
