from rest_framework import serializers
from .models import Reservation
from django.contrib.auth.models import User

class ReservationSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source = 'owner.username')
    class Meta:
        model = Reservation
        fields = ('id', 'created', 'sinceWhen', 'tilWhen', 'user', 'owner',)

class UserSerializer(serializers.ModelSerializer):
    meetings = serializers.PrimaryKeyRelatedField(many=True, queryset=Reservation.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'meetings',)