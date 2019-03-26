from rest_framework import serializers
from .models import Reservation
from django.contrib.auth.models import User
from datetime import datetime

class ReservationSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source = 'owner.username')
    class Meta:
        model = Reservation
        fields = ('id', 'created', 'sinceWhen', 'tilWhen', 'user', 'owner',)

    def validate(self, data):
        # datetime.(data['sinceWhen'])
        # dswhen = datetime.strptime(data['sinceWhen'][:-3] + data['sinceWhen'][-2:], "%Y-%m-%dT%H:%M:%S%z")
        # dtwhen = datetime.strptime(data['tilWhen'][:-3] + data['tilWhen'][-2:], "%Y-%m-%dT%H:%M:%S%z")
        dswhen = datetime.strptime(data['sinceWhen'][:-3] + data['sinceWhen'][-2:], "%Y-%m-%d %H:%M:%S%z")
        dtwhen = datetime.strptime(data['tilWhen'][:-3] + data['tilWhen'][-2:], "%Y-%m-%d %H:%M:%S%z")
        # 2019-03-20T22:05:51+09:00
        # print(data['sinceWhen'])
        if data['sinceWhen'] >= data['tilWhen']:
            raise serializers.ValidationError("Endtime must be later than start time.")
        all = Reservation.objects.all()
        for reserve in all:
            if reserve.sinceWhen <= dswhen and dswhen < reserve.tilWhen:
                raise serializers.ValidationError("Cannot Overlap.")
            if reserve.sinceWhen < dtwhen and dtwhen <= reserve.tilWhen:
                raise serializers.ValidationError("Cannot Overlap.")
            if dswhen <= reserve.sinceWhen and reserve.tilWhen <= dtwhen:
                raise serializers.ValidationError("Cannot Overlap.")

        return data

class UserSerializer(serializers.ModelSerializer):
    meetings = serializers.PrimaryKeyRelatedField(many=True, queryset=Reservation.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'meetings',)