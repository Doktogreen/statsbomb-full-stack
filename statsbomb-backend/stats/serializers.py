from rest_framework import serializers
from stats.models import Stats

class StatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stats
        fields = ("match_id", "team_id", "player_id", "minutes_played",
                "team_possession_percentage", "xg", "shots", "goals",
                "tackles", "interceptions", "pressures", "passes",
                "completed_passes", "left_foot_passes", 
                "right_foot_passes", "player_shots_faced",)