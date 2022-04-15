from rest_framework import serializers
from teams.models import Teams

class TeamsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teams
        fields = ( "team_id", "team_name", "team_first_color" )