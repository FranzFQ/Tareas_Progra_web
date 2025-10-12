import uuid
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from .serializers import HideKeySerializer, ShowKeySerializer

class HideKey(APIView):
    def post(self, request):
        serializer = HideKeySerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        text = serializer.validated_data['text']

        # generar key única
        key = uuid.uuid4().hex  
        settings.REDIS_CLIENT.set(key, text)

        return Response({"key": key}, status=status.HTTP_201_CREATED)

class RevealKey(APIView):
    def post(self, request):
        serializer = ShowKeySerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        key = serializer.validated_data['key']
        secret = settings.REDIS_CLIENT.get(key)

        if not secret:
            return Response({"error": "invalid key or the key was already used"}, status=status.HTTP_404_NOT_FOUND)

        # destruir después de leer 🔥
        settings.REDIS_CLIENT.delete(key)

        return Response({"secret": secret}, status=status.HTTP_200_OK)
