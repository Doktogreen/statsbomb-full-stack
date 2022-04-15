from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from match.models import Match
from match.serializers import MatchSerializer
from django.core.files.storage import default_storage

@csrf_exempt
def matchesApi(request, id=0):
    if request.method == 'GET':
        matches = Match.objects.all()
        matches_serializer = MatchSerializer(matches, many=True)
        return JsonResponse(matches_serializer.data, safe=False)
    elif request.method == 'POST':
        matches_data = JSONParser().parse(request)
        matches_serializer = MatchSerializer(data=matches_data)
        if matches_serializer.is_valid():
            matches_serializer.save()
            return JsonResponse("Successfully Added", safe=False)
        return JsonResponse("Fail to Add", safe=False)
    elif request.method == 'PUT':
        matches_data = JSONParser().parse(request)
        matches = Match.objects.get(match_id=matches_data['match_id'])
        matches_serializer = MatchSerializer(matches, data=matches_data)
        if matches_serializer.is_valid():
            matches_serializer.save()
            return JsonResponse("Successfully Updated", safe=False)
        return JsonResponse("Fail to Update", safe=False)
    elif request.method == 'DELETE':
        matches = Match.objects.get(match_id=id)
        matches.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def SaveFile(request):
    file = request.FILES['file']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)
