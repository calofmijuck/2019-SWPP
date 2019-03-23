from django.urls import path
from . import views
from django.conf.urls import include

urlpatterns = [
    path('meetings/', views.ReservationList.as_view()),
    path('meetings/<int:pk>/', views.ReservationDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
]

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]