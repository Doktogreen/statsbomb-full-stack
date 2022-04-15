from django.db import models

# Create your models here.
class Teams(models.Model):
    team_id = models.IntegerField(blank=True)
    team_name = models.CharField(max_length=500, blank=True, null=True)
    team_first_color = models.CharField(max_length=500, blank=True, null=True)