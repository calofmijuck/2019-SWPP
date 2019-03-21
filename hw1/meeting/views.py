from .models import Reservation, User
from .serializers import ReservationSerializer, UserSerializer
from .permissions import OwnerOnly
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions

class ReservationList(APIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get(self, request, format = None):
        reserve = Reservation.objects.all()
        serializer = ReservationSerializer(reserve, many = True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = ReservationSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.data, status = status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)

class ReservationDetail(APIView):
    permission_classes = (OwnerOnly,)
    def get_object(self, pk):
        try:
            return Reservation.objects.get(pk = pk)
        except Reservation.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        reserve = self.get_object(pk)
        serializer = ReservationSerializer(reserve)
        return Response(serializer.data)

    def put(self, request, pk, format = None):
        reserve = self.get_object(pk)
        serializer = ReservationSerializer(reserve, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format = None):
        reserve = self.get_object(pk)
        reserve.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)


class UserList(APIView):
    def get(self, request, format = None):
        user = User.objects.all()
        serializer = UserSerializer(user, many = True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.data, status = status.HTTP_400_BAD_REQUEST)


class UserDetail(APIView):
    def get_object(self, pk):
        try:
            return User.objects.get(pk = pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        user = self.get_object(pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
