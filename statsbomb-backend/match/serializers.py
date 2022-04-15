from rest_framework import serializers
from match.models import Match

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ("match_id" ,"match_date", "match_home_team_id",
                "match_away_team_id", "match_home_score" ,"match_away_score",
                "match_home_penalty_score", "match_away_penalty_score",
            )