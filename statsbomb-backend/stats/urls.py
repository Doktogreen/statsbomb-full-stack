from django.conf.urls import url
from stats import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^stats$', views.statsApi),
    url(r'^stats/([0-9]+)$', views.statsApi),

    url(r'^stats/savefile', views.SaveFile)
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)