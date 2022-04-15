from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from players.models import Players
from players.serializers import PlayersSerializer
from django.core.files.storage import default_storage

@csrf_exempt
def playersApi(request, id=0):
    if request.method == 'GET':
        players = Players.objects.all()
        players_serializer = PlayersSerializer(players, many=True)
        return JsonResponse(players_serializer.data, safe=False)
    elif request.method == 'POST':
        players_data = JSONParser().parse(request)
        players_serializer = PlayersSerializer(data=players_data)
        if players_serializer.is_valid():
            players_serializer.save()
            return JsonResponse("Successfully Added", safe=False)
        return JsonResponse("Fail to Add", safe=False)
    elif request.method == 'PUT':
        players_data = JSONParser().parse(request)
        players = Players.objects.get(player_id=players_data['player_id'])
        players_serializer = PlayersSerializer(players, data=players_data)
        if players_serializer.is_valid():
            players_serializer.save()
            return JsonResponse("Successfully Updated", safe=False)
        return JsonResponse("Fail to Update", safe=False)
    elif request.method == 'DELETE':
        players = Players.objects.get(player_id=id)
        players.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def SaveFile(request):
    file = request.FILES['file']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)
