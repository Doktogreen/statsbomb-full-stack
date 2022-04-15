from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from stats.models import Stats
from stats.serializers import StatsSerializer
from django.core.files.storage import default_storage

@csrf_exempt
def statsApi(request, id=0):
    if request.method == 'GET':
        stats = Stats.objects.all()
        stats_serializer = StatsSerializer(stats, many=True)
        return JsonResponse(stats_serializer.data, safe=False)
    elif request.method == 'POST':
        stats_data = JSONParser().parse(request)
        stats_serializer = StatsSerializer(data=stats_data)
        if stats_serializer.is_valid():
            stats_serializer.save()
            return JsonResponse("Successfully Added", safe=False)
        return JsonResponse("Fail to Add", safe=False)
    elif request.method == 'PUT':
        stats_data = JSONParser().parse(request)
        stats = Stats.objects.get(match_id=stats_data['match_id'])
        stats_serializer = StatsSerializer(stats, data=stats_data)
        if stats_serializer.is_valid():
            stats_serializer.save()
            return JsonResponse("Successfully Updated", safe=False)
        return JsonResponse("Fail to Update", safe=False)
    elif request.method == 'DELETE':
        stats = Stats.objects.get(match_id=id)
        stats.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def SaveFile(request):
    file = request.FILES['file']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)
