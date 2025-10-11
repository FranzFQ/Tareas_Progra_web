from django.urls import path
from .views import HideKey, RevealKey

urlpatterns = [
    path('hide/', HideKey.as_view(), name="hide_secret"),
    path('reveal/', RevealKey.as_view(), name="reveal_secret"),
]
