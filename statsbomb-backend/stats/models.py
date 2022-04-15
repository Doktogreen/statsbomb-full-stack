from django.db import models

# Create your models here.

class Stats(models.Model):
    match_id = models.IntegerField(blank=True)
    team_id = models.IntegerField(blank=True,  null=True, unique=False)
    player_id = models.IntegerField(blank=True, null=True)
    minutes_played = models.DecimalField( decimal_places=2, max_digits=5, null=True)
    team_possession_percentage = models.DecimalField( decimal_places=2, max_digits=5, null=True)
    xg = models.DecimalField( max_digits=5, decimal_places=2, null=True)
    shots = models.IntegerField(blank=True, null=True)
    goals = models.IntegerField(blank=True, null=True)
    tackles = models.IntegerField(blank=True, null=True)
    interceptions = models.IntegerField(blank=True, null=True)
    pressures = models.IntegerField(blank=True, null=True)
    passes = models.IntegerField(blank=True, null=True)
    completed_passes = models.IntegerField(blank=True, null=True)
    left_foot_passes = models.IntegerField(blank=True, null=True)
    right_foot_passes = models.IntegerField(blank=True, null=True)
    player_shots_faced = models.IntegerField(blank=True, null=True)