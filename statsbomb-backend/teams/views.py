from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from teams.models import Teams
from teams.serializers import TeamsSerializer
from django.core.files.storage import default_storage

@csrf_exempt
def teamsApi(request, id=0):
    if request.method == 'GET':
        team = Teams.objects.all()
        team_serializer = TeamsSerializer(team, many=True)
        return JsonResponse(team_serializer.data, safe=False)
    elif request.method == 'POST':
        team_data = JSONParser().parse(request)
        team_serializer = TeamsSerializer(data=team_data)
        if team_serializer.is_valid():
            team_serializer.save()
            return JsonResponse("Successfully Added", safe=False)
        return JsonResponse("Fail to Add", safe=False)
    elif request.method == 'PUT':
        team_data = JSONParser().parse(request)
        team = Teams.objects.get(team_id=team_data['team_id'])
        team_serializer = TeamsSerializer(team, data=team_data)
        if team_serializer.is_valid():
            team_serializer.save()
            return JsonResponse("Successfully Updated", safe=False)
        return JsonResponse("Fail to Update", safe=False)
    elif request.method == 'DELETE':
        team = Teams.objects.get(team_id=id)
        team.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def SaveFile(request):
    file = request.FILES['file']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)
