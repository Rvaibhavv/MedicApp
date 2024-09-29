from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User  # Adjust this import based on your User model
from .serializers import UserSerializer
from django.contrib.auth import authenticate

@api_view(['POST'])
def signin(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



from django.contrib.auth.hashers import check_password

@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    # Check for missing email or password
    if not email or not password:
        return Response({'error': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(email=email)
        
        # Verify the hashed password
        if check_password(password, user.password):
            # Prepare user data to return
            user_data = {
                'id': user.id,
                'name': user.name,  # Assuming your User model has a name field
                'dob': user.dob,    # Assuming your User model has a dob field
                'phone': user.phone, # Assuming your User model has a phone field
                'email': user.email
            }
            return Response({'message': 'Login successful', 'userData': user_data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
