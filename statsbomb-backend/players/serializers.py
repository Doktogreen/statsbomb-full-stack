from rest_framework import serializers
from players.models import Players

class PlayersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Players
        fields = ("player_id", "player_name", "player_known_name",
                 "player_birth_date" ,"country_id", "country_name",
                 "country_code")