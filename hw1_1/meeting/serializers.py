from rest_framework import serializers
from .models import Reservation
from django.contrib.auth.models import User

class ReservationSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.id')

    class Meta:
        model = Reservation
        fields = ('id', 'created', 'sinceWhen', 'tilWhen', 'user',)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'meetings')