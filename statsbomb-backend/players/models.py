from django.db import models

# Create your models here.

class Players(models.Model):
    player_id = models.IntegerField(blank=True)
    player_name = models.CharField(max_length=500, blank=True, null=True)
    player_known_name = models.CharField(max_length=500, blank=True, null=True)
    player_birth_date = models.DateTimeField(auto_now_add=True)
    country_id = models.IntegerField(blank=True)
    country_name = models.CharField(max_length=500, blank=True, null=True)
    country_code = models.CharField(max_length=500, blank=True, null=True)