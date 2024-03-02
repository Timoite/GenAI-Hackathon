from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .main import get_timeline


@csrf_exempt
def process_input(request):
    if request.method == 'POST':
        title = request.POST.get('title', '')
        result = get_timeline(title)
        
        return JsonResponse({'processed_data': result})
    
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

