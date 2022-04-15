from django.conf.urls import url
from teams import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^teams$', views.teamsApi),
    url(r'^teams/([0-9]+)$', views.teamsApi),

    url(r'^teams/savefile', views.SaveFile)
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)