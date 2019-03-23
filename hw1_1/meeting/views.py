from .models import Reservation, User
from .serializers import ReservationSerializer, UserSerializer
from .permissions import OwnerOnly
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework import generics


class ReservationList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        data = request.data
        if data['sinceWhen'] >= data['tilWhen']:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return self.create(request, *args, **kwargs)


class ReservationDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, OwnerOnly,)
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def put(self, request, *args, **kwargs):
        data = request.data
        if data['sinceWhen'] >= data['tilWhen']:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return self.update(request, *args, **kwargs)


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
