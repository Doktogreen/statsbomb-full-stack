from django.conf.urls import url
from players import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^players$', views.playersApi),
    url(r'^players/([0-9]+)$', views.playersApi),

    url(r'^players/savefile', views.SaveFile)
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)