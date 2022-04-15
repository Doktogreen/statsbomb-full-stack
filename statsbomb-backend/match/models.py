from django.db import models

# Create your models here.

class Match(models.Model):
    match_id = models.IntegerField(blank=True)
    match_date = models.DateTimeField(auto_now_add=True)
    match_home_team_id = models.IntegerField(blank=True, null=True)
    match_away_team_id = models.IntegerField(blank=True, null=True)
    match_home_score = models.IntegerField(blank=True, null=True)
    match_away_score = models.IntegerField(blank=True, null=True)
    match_home_penalty_score = models.IntegerField(blank=True, null=True)
    match_away_penalty_score = models.IntegerField(blank=True, null=True)