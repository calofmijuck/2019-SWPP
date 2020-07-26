from django.urls import path
from snippets import views

urlpatterns = [
    path("snippets", views.SnippetList.as_view()),
    path("snippets/<int:pk>", views.SnippetDetail.as_view()),
]

# Funcion based views (?)
"""
urlpatterns = [
    path("snippets", views.snippet_list),
    path("snippets/<int:pk>", views.snippet_detail),
]
"""
