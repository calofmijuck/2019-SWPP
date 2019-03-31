from .models import Reservation, User
from .serializers import ReservationSerializer, UserSerializer
from .permissions import OwnerOnly
from rest_framework.response import Response
from rest_framework import status, permissions, generics
from datetime import datetime


class ReservationList(generics.ListCreateAPIView):
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        data = request.data
        idx = data['sinceWhen'].rfind(':')
        dswhen = datetime.strptime(data['sinceWhen'][:idx] + data['sinceWhen'][idx + 1:], "%Y-%m-%dT%H:%M:%S%z")
        idx = data['tilWhen'].rfind(':')
        dtwhen = datetime.strptime(data['tilWhen'][:idx] + data['tilWhen'][idx + 1:], "%Y-%m-%dT%H:%M:%S%z")
        if dswhen >= dtwhen:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        all = Reservation.objects.all()
        for reserve in all:
            if dtwhen <= reserve.sinceWhen or dswhen >= reserve.tilWhen:
                continue
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        return self.create(request, *args, **kwargs)


class ReservationDetail(generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly, OwnerOnly,)
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def put(self, request, *args, **kwargs):
        data = request.data
        # print(kwargs)
        idx = data['sinceWhen'].rfind(':')
        dswhen = datetime.strptime(data['sinceWhen'][:idx] + data['sinceWhen'][idx + 1:], "%Y-%m-%dT%H:%M:%S%z")
        idx = data['tilWhen'].rfind(':')
        dtwhen = datetime.strptime(data['tilWhen'][:idx] + data['tilWhen'][idx + 1:], "%Y-%m-%dT%H:%M:%S%z")
        if dswhen >= dtwhen:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        all = Reservation.objects.all()
        for reserve in all:
            # Do not compare with current reservation
            if int(kwargs['pk']) == reserve.id:
                continue
            if dtwhen <= reserve.sinceWhen or dswhen >= reserve.tilWhen:
                continue
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        return self.update(request, *args, **kwargs)


class UserList(generics.ListCreateAPIView):
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = User.objects.all()
    serializer_class = UserSerializer
