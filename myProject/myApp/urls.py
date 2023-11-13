from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import UserProfileAPIView
from django.views.generic.base import RedirectView

urlpatterns = [
    path('registration/', UserProfileAPIView.as_view(), name='registration'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)