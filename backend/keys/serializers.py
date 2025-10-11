from rest_framework import serializers

class HideKeySerializer(serializers.Serializer):
    text = serializers.CharField()

class ShowKeySerializer(serializers.Serializer):
    key = serializers.CharField()
