from django.urls import path
from django.conf.urls import include
from snippets import views

urlpatterns = [
    path("snippets", views.SnippetList.as_view()),
    path("snippets/<int:pk>", views.SnippetDetail.as_view()),
    path("users", views.UserList.as_view()),
    path("users/<int:pk>", views.UserDetail.as_view()),
    path('api-auth', include('rest_framework.urls')),
]

# Funcion based views (?)
"""
urlpatterns = [
    path("snippets", views.snippet_list),
    path("snippets/<int:pk>", views.snippet_detail),
]
"""
