from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny
# Create your views here.

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

@api_view(['GET'])
def samuca(request):
    return Response({'message': 'Samuca!'})

@api_view(['POST'])
@permission_classes([AllowAny])
def authenticate(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response({'message': 'Authentication successful'})
    else:
        return Response({'message': 'Authentication failed'}, status=401)