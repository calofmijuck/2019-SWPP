from django.urls import path
from . import views

app_name = 'meetings'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:reservation_id>/', views.detail, name='detail'),
]
