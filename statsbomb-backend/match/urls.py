from django.conf.urls import url
from match import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^matches$', views.matchesApi),
    url(r'^matches/([0-9]+)$', views.matchesApi),

    url(r'^matches/savefile', views.SaveFile)
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)