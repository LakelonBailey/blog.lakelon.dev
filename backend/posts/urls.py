from django.urls import path
from posts.views import PostsAPI

urlpatterns = [
    path('', PostsAPI.as_view(), name='posts')
]