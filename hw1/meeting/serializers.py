from rest_framework import serializers
from meeting.models import Reservation, User

class ReservationSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    created = serializers.DateTimeField()
    sinceWhen = serializers.DateTimeField()
    tilWhen = serializers.DateTimeField()
    user = serializers.CharField()

    def create(self, validated_data):
        return Reservation.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.created = validated_data.get('created', instance.created)
        instance.sinceWhen = validated_data.get('sinceWhen', instance.sinceWhen)
        instance.tilWhen = validated_data.get('tilWhen', instance.tilWhen)
        instance.user = validated_data.get('user', instance.user)
        instance.save()
        return instance
