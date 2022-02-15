from dataclasses import field

from rest_framework import serializers
from .models import Birthday


class BithdaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Birthday
        fields = ('id', 'name', 'email', 'birthdate', 'user_id')
