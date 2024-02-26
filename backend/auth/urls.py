from django.urls import path
from auth.views import AccessTokenView


urlpatterns = [
    path(
        'access-token/<str:code>/',
        AccessTokenView.as_view(),
        name='access_token'
    )
]